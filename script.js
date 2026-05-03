// =============================
// PAGE LOADING
// =============================

function loadPage(page) {
  fetch("pages/" + page)
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("content").innerHTML = data;

      var menu = document.getElementById("menu");
      if (menu) {
        menu.classList.remove("open");
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    });
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadPage("home.html");
});


// =============================
// CALCULATOR HELPERS
// =============================

function getValue(id) {
  return Number(document.getElementById(id)?.value) || 0;
}

function getSelectedFilters() {
  const filters = document.querySelectorAll(".card-filter:checked");
  return Array.from(filters).map(f => f.value);
}

function getSelectedTopCategories() {
  const categories = document.querySelectorAll(".top-category-filter:checked");
  return Array.from(categories).map(c => c.value);
}

function getTopCategoryFromSpend(spend) {
  let max = 0;
  let top = "other";

  for (let key in spend) {
    if (spend[key] > max) {
      max = spend[key];
      top = key;
    }
  }

  return top;
}

function hasAnySpend(spend) {
  return Object.values(spend).some(value => value > 0);
}

function passesFilter(card, selectedFilters) {
  if (selectedFilters.length === 0) return true;

  return selectedFilters.some(f =>
    (card.tags && card.tags.includes(f)) ||
    card.issuerTag === f ||
    card.brand === f ||
    card.type === f
  );
}

function passesGoalFilter(card, goal) {
  if (goal === "bestOverall") return true;

  if (goal === "luxuryTravel") {
    return card.tags?.includes("luxuryTravel") || card.premium === true;
  }

  if (goal === "freeFlights") {
    return card.type === "airline" ||
      card.tags?.includes("flights") ||
      card.tags?.includes("travel");
  }

  if (goal === "freeHotels") {
    return card.type === "hotel" ||
      card.tags?.includes("hotel");
  }

  if (goal === "cashBack") {
    return card.type === "cashback" ||
      card.tags?.includes("cashback");
  }

  if (goal === "simpleSetup") {
    return card.beginnerFriendly === true ||
      card.tags?.includes("everyday");
  }

  if (goal === "maximizePoints") {
    return card.type === "flexible" ||
      card.tags?.includes("flexible");
  }

  return true;
}

function getCategoryMultiplier(card, category) {
  if (!card.rewards) return 1;

  if (category === "rent" && card.issuerTag !== "bilt") {
    return 0;
  }

  return card.rewards[category] || 1;
}

function categoryLabel(category) {
  const labels = {
    dining: "Dining",
    groceries: "Groceries",
    gas: "Gas",
    flightsDirect: "Flights",
    hotelsDirect: "Hotels",
    travelPortal: "Travel Portal",
    rent: "Rent / Mortgage",
    other: "Everyday Spend"
  };

  return labels[category] || category;
}


// =============================
// SCORING ENGINE
// =============================

function calculateSpendRewards(card, spend) {
  let spendRewards = 0;

  for (let category in spend) {
    const multiplier = getCategoryMultiplier(card, category);
    spendRewards += spend[category] * multiplier * card.pointValue;
  }

  return spendRewards;
}

function calculateRecommendationScore(card, spend, selectedTopCategories, goal) {
  const spendRewards = calculateSpendRewards(card, spend);

  let score = spendRewards;
  let bonus = 0;
  let penalty = 0;

  // If user picked categories, prioritize those heavily
  selectedTopCategories.forEach(category => {
    const multiplier = getCategoryMultiplier(card, category);

    if (multiplier >= 5) bonus += 350;
    else if (multiplier >= 3) bonus += 250;
    else if (multiplier >= 2) bonus += 125;
    else if (multiplier === 0) penalty += 200;
  });

  // If no category picked, detect highest spend category from monthly inputs
  if (selectedTopCategories.length === 0 && hasAnySpend(spend)) {
    const topCategory = getTopCategoryFromSpend(spend);
    const multiplier = getCategoryMultiplier(card, topCategory);

    if (multiplier >= 5) bonus += 300;
    else if (multiplier >= 3) bonus += 200;
    else if (multiplier >= 2) bonus += 100;
    else if (multiplier === 0) penalty += 150;
  }

  // Goal scoring
  if (goal === "luxuryTravel" && (card.premium || card.tags?.includes("luxuryTravel"))) bonus += 300;
  if (goal === "freeFlights" && card.type === "airline") bonus += 300;
  if (goal === "freeHotels" && card.type === "hotel") bonus += 300;
  if (goal === "cashBack" && card.type === "cashback") bonus += 300;
  if (goal === "simpleSetup" && card.beginnerFriendly) bonus += 250;
  if (goal === "maximizePoints" && card.type === "flexible") bonus += 300;

  // Rent rule boost
  if (selectedTopCategories.includes("rent") && card.issuerTag === "bilt") {
    bonus += 500;
  }

  // Travel portal caution:
  // Portal cards should not dominate unless user actually selects/enters travel portal spend.
  const userCaresAboutPortal =
    selectedTopCategories.includes("travelPortal") || spend.travelPortal > 0;

  if (!userCaresAboutPortal && (card.rewards?.travelPortal || 0) >= 5) {
    penalty += 100;
  }

  // Annual fee is NOT subtracted and NOT scored.
  // Slider is the only annual-fee control.

  const finalScore = score + bonus - penalty;

  let matchScore = 70 + Math.round((bonus - penalty) / 20);
  if (matchScore > 99) matchScore = 99;
  if (matchScore < 50) matchScore = 50;

  return {
    card,
    spendRewards,
    score: finalScore,
    matchScore,
    bonus,
    penalty
  };
}


// =============================
// RESULTS RENDERING
// =============================

function renderResults(results, selectedTopCategories) {
  const container = document.getElementById("resultsContent");
  if (!container) return;

  document.querySelector(".results-placeholder")?.remove();

  if (!results.length) {
    container.innerHTML = "<p>No cards matched your filters.</p>";
    return;
  }

  const best = results[0];

  const selectedCategoryText = selectedTopCategories.length
    ? selectedTopCategories.map(categoryLabel).join(", ")
    : "Based on your monthly spending";

  container.innerHTML = `
    <div class="result-hero">
      <h2>Best Overall Card</h2>

      <div class="result-card">
        <img src="${best.card.imageUrl || 'images/default-card.jpg'}" />

        <h3>${best.card.name}</h3>

        <p class="value">
          $${Math.round(best.spendRewards)} / year estimated rewards
        </p>

        <p><strong>Match Score:</strong> ${best.matchScore}%</p>
        <p><strong>Annual Fee:</strong> $${best.card.annualFee}</p>
        <p><strong>Best For:</strong> ${best.card.bestFor}</p>
        <p><strong>Matched Categories:</strong> ${selectedCategoryText}</p>

        <div class="why">
          <strong>Why this card:</strong>
          <p>${best.card.why}</p>
        </div>

        <div class="bad">
          <strong>Keep in mind:</strong>
          <p>${(best.card.weaknesses || []).join(", ")}</p>
        </div>

        <p class="slider-note">
          Estimated rewards are based on spend only. Annual fee and credits are not included in this estimate.
        </p>

        <div class="actions">
          <a href="${best.card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
          ${best.card.youtubeUrl ? `<a href="${best.card.youtubeUrl}" target="_blank" class="video-btn">Watch Video</a>` : ""}
        </div>
      </div>
    </div>

    <div class="other-cards">
      <h2>Top Matches</h2>

      ${results.slice(1, 7).map(r => `
        <div class="mini-card">
          <img src="${r.card.imageUrl || 'images/default-card.jpg'}" />
          <h4>${r.card.name}</h4>
          <p>${r.matchScore}% match</p>
          <p>$${Math.round(r.spendRewards)} / year rewards</p>
          <p>Annual Fee: $${r.card.annualFee}</p>
        </div>
      `).join("")}
    </div>
  `;
}


// =============================
// MAIN CALCULATOR
// =============================

function runCalculator() {
  const cardsData = window.creditCards || creditCards;

  if (!cardsData) {
    alert("Card data is missing. Make sure data/cards.js is loaded.");
    return;
  }

  // Monthly spend entered by user, converted to yearly.
  const spend = {
    dining: getValue("dining") * 12,
    groceries: getValue("groceries") * 12,
    gas: getValue("gas") * 12,
    flightsDirect: getValue("flightsDirect") * 12,
    hotelsDirect: getValue("hotelsDirect") * 12,
    travelPortal: getValue("travelPortal") * 12,
    rent: getValue("rent") * 12,
    other: getValue("other") * 12
  };

  const selectedTopCategories = getSelectedTopCategories();
  const maxFee = Number(document.getElementById("annualFeeSlider")?.value) || 895;
  const selectedFilters = getSelectedFilters();
  const goal = document.getElementById("travelGoal")?.value || "bestOverall";

  const results = cardsData
    .filter(card => card.annualFee <= maxFee)
    .filter(card => passesFilter(card, selectedFilters))
    .filter(card => passesGoalFilter(card, goal))
    .map(card => calculateRecommendationScore(card, spend, selectedTopCategories, goal))
    .sort((a, b) => b.score - a.score);

  renderResults(results, selectedTopCategories);
}


// =============================
// EVENT LISTENERS
// =============================

document.addEventListener("input", function(e) {
  if (e.target.id === "annualFeeSlider") {
    document.getElementById("feeValue").textContent = "$" + e.target.value;
  }
});

// Expose functions for inline HTML
window.runCalculator = runCalculator;
window.loadPage = loadPage;
window.toggleMenu = toggleMenu;