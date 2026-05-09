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
// FILTER HELPERS
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
    rent: "Rent / Mortgage",
    other: "Everyday Spend"
  };

  return labels[category] || category;
}

function hasFilter(selectedFilters, filter) {
  return selectedFilters.includes(filter);
}

function hasHotelBrandFilter(selectedFilters) {
  return selectedFilters.some(f =>
    ["hilton", "marriott", "hyatt", "ihg"].includes(f)
  );
}

function hasAirlineBrandFilter(selectedFilters) {
  return selectedFilters.some(f =>
    [
      "delta",
      "united",
      "american",
      "southwest",
      "aircanada",
      "britishairways",
      "aerlingus",
      "iberia"
    ].includes(f)
  );
}

function clearCardFilters() {
  document.querySelectorAll(".card-filter, .top-category-filter").forEach(input => {
    input.checked = false;
  });

  const goal = document.getElementById("travelGoal");
  if (goal) goal.value = "bestOverall";

  const slider = document.getElementById("annualFeeSlider");
  if (slider) slider.value = 895;

  const feeValue = document.getElementById("feeValue");
  if (feeValue) feeValue.textContent = "$895";

  const container = document.getElementById("resultsContent");
  if (container) {
    container.innerHTML = `
      <div class="results-placeholder">
        <h2>Find Your Best Cards</h2>
        <p>
          Select your categories and filters, then click
          <strong>"Find My Cards"</strong> to get personalized recommendations.
        </p>
      </div>
    `;
  }
}


// =============================
// FILTER LOGIC
// =============================

function passesFilter(card, selectedFilters) {
  const issuerFilters = ["amex", "chase", "capitalone", "citi", "bilt"];

  const typeFilters = [
    "flexible",
    "cashback",
    "airline",
    "hotel",
    "business",
    "beginner",
    "premium"
  ];

  const brandFilters = [
    "delta",
    "united",
    "american",
    "southwest",
    "hilton",
    "marriott",
    "hyatt",
    "ihg",
    "aircanada",
    "britishairways",
    "aerlingus",
    "iberia"
  ];

  const selectedIssuers = selectedFilters.filter(f => issuerFilters.includes(f));
  const selectedTypes = selectedFilters.filter(f => typeFilters.includes(f));
  const selectedBrands = selectedFilters.filter(f => brandFilters.includes(f));

  // Issuer filters are OR inside issuer group.
  // Example: Amex + Chase means show cards from either Amex or Chase.
  if (selectedIssuers.length > 0 && !selectedIssuers.includes(card.issuerTag)) {
    return false;
  }

  // Brand filters are OR inside brand group.
  // Example: Hilton + Marriott means show either Hilton or Marriott cards.
  if (selectedBrands.length > 0 && !selectedBrands.includes(card.brand)) {
    return false;
  }

  // Type filters are AND-style for special filters and OR-style for main card types.
  const selectedMainTypes = selectedTypes.filter(f =>
    ["flexible", "cashback", "airline", "hotel"].includes(f)
  );

  if (selectedMainTypes.length > 0 && !selectedMainTypes.includes(card.type)) {
    return false;
  }

  if (selectedTypes.includes("business") && card.business !== true) {
    return false;
  }

  if (selectedTypes.includes("beginner") && card.beginnerFriendly !== true) {
    return false;
  }

  if (selectedTypes.includes("premium") && card.premium !== true) {
    return false;
  }

  return true;
}

function passesGoalFilter(card, goal) {
  if (goal === "bestOverall") return true;

  if (goal === "luxuryTravel") {
    return card.premium || card.tags?.includes("luxuryTravel");
  }

  if (goal === "freeFlights") {
    return card.type === "airline" ||
      card.tags?.includes("flights") ||
      card.tags?.includes("travel");
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

function shouldShowBusinessCards(card, selectedFilters) {
  if (!card.business) return true;
  return selectedFilters.includes("business");
}


// =============================
// SCORING LOGIC
// =============================

function getCategoryScore(card, category, selectedFilters, goal) {
  if (!card.rewards) return 0;

  let score = 0;

  // Rent should only recommend Bilt.
  if (category === "rent") {
    return card.brand === "bilt" ? 120 : 0;
  }

  const multiplier = card.rewards[category] || 0;
  const realValue = multiplier * (card.pointValue || 0.01);

  score += multiplier * 10;
  score += realValue * 400;

  const everydayCategories = ["dining", "groceries", "gas", "other"];
  const isEverydayCategory = everydayCategories.includes(category);

  if (isEverydayCategory && card.type === "flexible") {
    score += 30;
  }

  if (isEverydayCategory && card.type === "cashback") {
    score += 25;
  }

  if (isEverydayCategory && card.type === "hotel") {
    if (!hasFilter(selectedFilters, "hotel") && !hasHotelBrandFilter(selectedFilters)) {
      score -= 60;
    }
  }

  if (isEverydayCategory && card.type === "airline") {
    if (!hasFilter(selectedFilters, "airline") && !hasAirlineBrandFilter(selectedFilters)) {
      score -= 55;
    }
  }

  if (card.brand === "bilt" && category !== "rent") {
    if (!hasFilter(selectedFilters, "bilt")) {
      score -= 75;
    }
  }

  if (category === "flightsDirect") {
    if (card.type === "flexible") score += 25;
    if (card.type === "airline") score += 30;
  }

  if (category === "hotelsDirect") {
    if (card.type === "hotel") score += 30;
    if (card.type === "flexible") score += 20;
  }

  // Travel portal multipliers are considered, but weighted lower.
  const portalMultiplier = card.rewards.travelPortal || 0;
  if (["flightsDirect", "hotelsDirect"].includes(category)) {
    score += portalMultiplier * 2;
  }

  const premiumRelevant =
    goal === "luxuryTravel" ||
    hasFilter(selectedFilters, "premium") ||
    category === "flightsDirect" ||
    category === "hotelsDirect";

  if (card.premium && !premiumRelevant && isEverydayCategory) {
    score -= 35;
  }

  return score;
}

function getGoalScore(card, goal) {
  let score = 0;

  if (goal === "luxuryTravel" && (card.premium || card.tags?.includes("luxuryTravel"))) score += 55;
  if (goal === "freeFlights" && card.type === "airline") score += 50;
  if (goal === "freeHotels" && card.type === "hotel") score += 50;
  if (goal === "cashBack" && card.type === "cashback") score += 55;
  if (goal === "simpleSetup" && card.beginnerFriendly) score += 50;
  if (goal === "maximizePoints" && card.type === "flexible") score += 55;

  return score;
}

function calculateRecommendationScore(card, selectedCategories, selectedFilters, goal) {
  let score = 0;

  if (selectedCategories.length === 0) {
    score += 20;

    if (card.type === "flexible") score += 35;
    if (card.beginnerFriendly) score += 20;
    if (card.tags?.includes("everyday")) score += 15;
  }

  selectedCategories.forEach(category => {
    score += getCategoryScore(card, category, selectedFilters, goal);
  });

  score += getGoalScore(card, goal);

  if (card.type === "flexible") score += 10;
  if (card.beginnerFriendly) score += 5;

  if (card.featuredCard || card.featured) score += 7;

  return {
    card,
    score,
    matchLabel: getMatchLabel(score)
  };
}

function getMatchLabel(score) {
  if (score >= 115) return "Excellent Match";
  if (score >= 80) return "Strong Match";
  return "Good Match";
}


// =============================
// RENDER HELPERS
// =============================

function renderList(items) {
  if (!items || !items.length) return "";

  return `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderCard(cardResult) {
  const card = cardResult.card;

  return `
    <div class="mini-card">
      <img src="${card.imageUrl || 'images/default-card.jpg'}" />

      <h4>${card.name}</h4>

      <p><strong>${cardResult.matchLabel}</strong></p>
      <p><strong>Annual Fee:</strong> $${card.annualFee}</p>
      <p><strong>Best For:</strong> ${card.bestFor}</p>

      <div class="card-detail-block">
        <strong>Top Multipliers</strong>
        ${renderList(card.multipliers || card.benefits || [])}
      </div>

      <div class="card-detail-block">
        <strong>Current Welcome Bonus</strong>
        <p>${card.welcomeBonus || "Check the current welcome bonus before applying."}</p>
      </div>

      <div class="card-detail-block">
        <strong>My Review</strong>
        <p>${card.myReview || card.why}</p>
      </div>

      <div class="card-detail-block">
        <strong>Good For</strong>
        ${renderList(card.goodFor || [])}
      </div>

      <div class="card-detail-block">
        <strong>Not Good For</strong>
        ${renderList(card.notGoodFor || card.weaknesses || [])}
      </div>

      <div class="card-detail-block">
        <strong>Best Pairing</strong>
        <p>${
          Array.isArray(card.bestPairing)
            ? card.bestPairing.join(", ")
            : (card.bestPairing || "Pairs well with a strong everyday earning card.")
        }</p>
      </div>

      <div class="actions">
        <a href="${card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
        ${card.youtubeUrl ? `<a href="${card.youtubeUrl}" target="_blank" class="video-btn">Watch My Review</a>` : ""}
      </div>
    </div>
  `;
}

function renderBestCard(cardResult) {
  const card = cardResult.card;

  return `
    <div class="result-card">
      <img src="${card.imageUrl || 'images/default-card.jpg'}" />

      <h3>${card.name}</h3>

      <p><strong>${cardResult.matchLabel}</strong></p>
      <p><strong>Annual Fee:</strong> $${card.annualFee}</p>
      <p><strong>Best For:</strong> ${card.bestFor}</p>

      <div class="why">
        <strong>Top Multipliers</strong>
        ${renderList(card.multipliers || card.benefits || [])}
      </div>

      <div class="why">
        <strong>Current Welcome Bonus</strong>
        <p>${card.welcomeBonus || "Check the current welcome bonus before applying."}</p>
      </div>

      <div class="why">
        <strong>My Review</strong>
        <p>${card.myReview || card.why}</p>
      </div>

      <div class="why">
        <strong>Good For</strong>
        ${renderList(card.goodFor || [])}
      </div>

      <div class="bad">
        <strong>Not Good For</strong>
        ${renderList(card.notGoodFor || card.weaknesses || [])}
      </div>

      <div class="why">
        <strong>Best Pairing</strong>
        <p>${
          Array.isArray(card.bestPairing)
            ? card.bestPairing.join(", ")
            : (card.bestPairing || "Pairs well with a strong everyday earning card.")
        }</p>
      </div>

      <p class="slider-note">
        Recommendations are based on your selected filters and categories, not estimated yearly spend.
      </p>

      <div class="actions">
        <a href="${card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
        ${card.youtubeUrl ? `<a href="${card.youtubeUrl}" target="_blank" class="video-btn">Watch My Review</a>` : ""}
      </div>
    </div>
  `;
}


// =============================
// RESULTS RENDERING
// =============================

function renderResults(results, selectedCategories) {
  const container = document.getElementById("resultsContent");
  if (!container) return;

  document.querySelector(".results-placeholder")?.remove();

  if (!results.length) {
    container.innerHTML = `
      <div class="results-placeholder">
        <h2>No cards found</h2>
        <p>No cards matched your selected filters. Try removing one filter or choosing a different issuer or brand.</p>
      </div>
    `;
    return;
  }

  const usedCards = new Set();
  const best = results[0];
  usedCards.add(best.card.name);

  let categorySections = "";

  selectedCategories.forEach(category => {
    const selectedFilters = getSelectedFilters();
    const goal = document.getElementById("travelGoal")?.value || "bestOverall";

    const categoryResults = results
      .filter(r => r.card.name !== best.card.name)
      .filter(r => !usedCards.has(r.card.name))
      .filter(r => getCategoryScore(r.card, category, selectedFilters, goal) > 0)
      .sort((a, b) =>
        getCategoryScore(b.card, category, selectedFilters, goal) -
        getCategoryScore(a.card, category, selectedFilters, goal)
      )
      .slice(0, 4);

    categoryResults.forEach(r => usedCards.add(r.card.name));

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
    const topCards = results
      .filter(r => r.card.name !== best.card.name)
      .slice(0, 4);

    categorySections = `
      <div class="other-cards">
        <h2>Top Recommended Cards</h2>
        ${topCards.map(renderCard).join("")}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="result-hero">
      <h2>Best Overall Match</h2>
      ${renderBestCard(best)}
    </div>

    ${categorySections}
  `;
}


// =============================
// MAIN SEARCH ENGINE
// =============================

function runCalculator() {
  const personalCards = window.creditCards || (typeof creditCards !== "undefined" ? creditCards : []);
  const businessCards = window.businessCreditCards || [];

  const selectedCategories = getSelectedTopCategories();
  const maxFee = Number(document.getElementById("annualFeeSlider")?.value) || 895;
  const selectedFilters = getSelectedFilters();
  const goal = document.getElementById("travelGoal")?.value || "bestOverall";

  const cardsData = [...personalCards, ...businessCards];

  if (!cardsData.length) {
    alert("Card data is missing. Make sure data/cards.js and data/businesscards.js are loaded.");
    return;
  }

  const results = cardsData
    .filter(card => card.annualFee <= maxFee)
    .filter(card => shouldShowBusinessCards(card, selectedFilters))
    .filter(card => passesFilter(card, selectedFilters))
    .filter(card => passesGoalFilter(card, goal))
    .map(card => calculateRecommendationScore(card, selectedCategories, selectedFilters, goal))
    .filter(result => result.score > 0)
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
window.clearCardFilters = clearCardFilters;
window.loadPage = loadPage;
window.toggleMenu = toggleMenu;