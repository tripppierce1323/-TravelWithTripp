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
// SEARCH / RECOMMENDATION HELPERS
// =============================

function getSelectedFilters() {
  const filters = document.querySelectorAll(".card-filter:checked");
  return Array.from(filters).map(f => f.value);
}

function getSelectedTopCategories() {
  const categories = document.querySelectorAll(".top-category-filter:checked");
  return Array.from(categories).map(c => c.value);
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
    other: "Everyday Spend",
    travel: "Travel",
    hotels: "Hotels",
    flights: "Flights",
    cashback: "Cash Back",
    flexible: "Flexible Points",
    airline: "Airline Cards",
    hotel: "Hotel Cards",
    beginner: "Beginner Friendly",
    premium: "Premium Travel"
  };

  return labels[category] || category;
}

function passesFilter(card, selectedFilters) {
  if (selectedFilters.length === 0) return true;

  return selectedFilters.some(f =>
    card.issuerTag === f ||
    card.brand === f ||
    card.type === f ||
    card.tags?.includes(f)
  );
}

function passesGoalFilter(card, goal) {
  if (goal === "bestOverall") return true;

  if (goal === "luxuryTravel") {
    return card.premium || card.tags?.includes("luxuryTravel");
  }

  if (goal === "freeFlights") {
    return card.type === "airline" || card.tags?.includes("flights") || card.tags?.includes("travel");
  }

  if (goal === "freeHotels") {
    return card.type === "hotel";
  }

  if (goal === "cashBack") {
    return card.type === "cashback";
  }

  if (goal === "simpleSetup") {
    return card.beginnerFriendly || card.tags?.includes("everyday");
  }

  if (goal === "maximizePoints") {
    return card.type === "flexible";
  }

  return true;
}


// =============================
// RECOMMENDATION SCORING
// =============================

function getCategoryScore(card, category) {
  if (!card.rewards) return 0;

  let score = 0;

  // Rent should only recommend Bilt
  if (category === "rent") {
    return card.brand === "bilt" ? 100 : 0;
  }

  const multiplier = card.rewards[category] || 0;
  const realValue = multiplier * (card.pointValue || 0.01);

  score += multiplier * 10;
  score += realValue * 500;

  const everydayCategories = ["dining", "groceries", "gas", "other"];

  if (everydayCategories.includes(category)) {
    if (card.type === "flexible") score += 25;
    if (card.type === "cashback") score += 20;
    if (card.type === "hotel") score -= 25;
    if (card.type === "airline") score -= 20;
  }

  if (category === "flightsDirect") {
    if (card.type === "flexible") score += 25;
    if (card.type === "airline") score += 20;
  }

  if (category === "hotelsDirect") {
    if (card.type === "hotel") score += 25;
    if (card.type === "flexible") score += 20;
  }

  if (category === "travelPortal") {
    if (card.type === "flexible") score += 25;
  }

  return score;
}

function getGoalScore(card, goal) {
  let score = 0;

  if (goal === "luxuryTravel" && (card.premium || card.tags?.includes("luxuryTravel"))) score += 50;
  if (goal === "freeFlights" && card.type === "airline") score += 50;
  if (goal === "freeHotels" && card.type === "hotel") score += 50;
  if (goal === "cashBack" && card.type === "cashback") score += 50;
  if (goal === "simpleSetup" && card.beginnerFriendly) score += 50;
  if (goal === "maximizePoints" && card.type === "flexible") score += 50;

  return score;
}

function calculateRecommendationScore(card, selectedCategories, goal) {
  let score = 0;

  if (selectedCategories.length === 0) {
    score += 20;

    if (card.type === "flexible") score += 35;
    if (card.beginnerFriendly) score += 20;
    if (card.tags?.includes("everyday")) score += 15;
  }

  selectedCategories.forEach(category => {
    score += getCategoryScore(card, category);
  });

  score += getGoalScore(card, goal);

  if (card.type === "flexible") score += 10;
  if (card.beginnerFriendly) score += 5;

  let matchScore = Math.round(score);
  if (matchScore > 99) matchScore = 99;
  if (matchScore < 50) matchScore = 50;

  return {
    card,
    score,
    matchScore
  };
}


// =============================
// RESULTS RENDERING
// =============================

function renderCard(cardResult) {
  const card = cardResult.card;

  return `
    <div class="mini-card">
      <img src="${card.imageUrl || 'images/default-card.jpg'}" />

      <h4>${card.name}</h4>

      <p><strong>${cardResult.matchScore}% match</strong></p>
      <p><strong>Best For:</strong> ${card.bestFor}</p>
      <p><strong>Annual Fee:</strong> $${card.annualFee}</p>

      <p>${card.why}</p>

      <div class="actions">
        <a href="${card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
        ${card.youtubeUrl ? `<a href="${card.youtubeUrl}" target="_blank" class="video-btn">Watch Video</a>` : ""}
      </div>
    </div>
  `;
}

function renderResults(results, selectedCategories) {
  const container = document.getElementById("resultsContent");
  if (!container) return;

  document.querySelector(".results-placeholder")?.remove();

  if (!results.length) {
    container.innerHTML = "<p>No cards matched your filters.</p>";
    return;
  }

  const best = results[0];

  let categorySections = "";

  selectedCategories.forEach(category => {
    const categoryResults = results
      .filter(r => getCategoryScore(r.card, category) > 0)
      .sort((a, b) => getCategoryScore(b.card, category) - getCategoryScore(a.card, category))
      .slice(0, 4);

    if (categoryResults.length) {
      categorySections += `
        <div class="other-cards">
          <h2>Best for ${categoryLabel(category)}</h2>
          ${categoryResults.map(renderCard).join("")}
        </div>
      `;
    }
  });

  if (!selectedCategories.length) {
    categorySections = `
      <div class="other-cards">
        <h2>Top Recommended Cards</h2>
        ${results.slice(1, 7).map(renderCard).join("")}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="result-hero">
      <h2>Best Overall Match</h2>

      <div class="result-card">
        <img src="${best.card.imageUrl || 'images/default-card.jpg'}" />

        <h3>${best.card.name}</h3>

        <p><strong>Match Score:</strong> ${best.matchScore}%</p>
        <p><strong>Annual Fee:</strong> $${best.card.annualFee}</p>
        <p><strong>Best For:</strong> ${best.card.bestFor}</p>

        <div class="why">
          <strong>Why this card:</strong>
          <p>${best.card.why}</p>
        </div>

        <div class="bad">
          <strong>Keep in mind:</strong>
          <p>${(best.card.weaknesses || []).join(", ")}</p>
        </div>

        <p class="slider-note">
          Recommendations are based on your selected filters and categories, not estimated yearly spend.
        </p>

        <div class="actions">
          <a href="${best.card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
          ${best.card.youtubeUrl ? `<a href="${best.card.youtubeUrl}" target="_blank" class="video-btn">Watch Video</a>` : ""}
        </div>
      </div>
    </div>

    ${categorySections}
  `;
}


// =============================
// MAIN SEARCH ENGINE
// =============================

function runCalculator() {
  const cardsData = window.creditCards || creditCards;

  if (!cardsData) {
    alert("Card data is missing. Make sure data/cards.js is loaded.");
    return;
  }

  const selectedCategories = getSelectedTopCategories();
  const maxFee = Number(document.getElementById("annualFeeSlider")?.value) || 895;
  const selectedFilters = getSelectedFilters();
  const goal = document.getElementById("travelGoal")?.value || "bestOverall";

  const results = cardsData
    .filter(card => card.annualFee <= maxFee)
    .filter(card => passesFilter(card, selectedFilters))
    .filter(card => passesGoalFilter(card, goal))
    .map(card => calculateRecommendationScore(card, selectedCategories, goal))
    .sort((a, b) => b.score - a.score);

  renderResults(results, selectedCategories);
}


// =============================
// EVENT LISTENERS
// =============================

document.addEventListener("input", function(e) {
  if (e.target.id === "annualFeeSlider") {
    document.getElementById("feeValue").textContent = "$" + e.target.value;
  }
});

window.runCalculator = runCalculator;
window.loadPage = loadPage;
window.toggleMenu = toggleMenu;