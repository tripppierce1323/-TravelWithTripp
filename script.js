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
// FINDER HELPERS
// Replaces old calculator helpers
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
// FILTER GROUP LOGIC
// Replaces old passesFilter()
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

  // Same group = OR, different groups = AND

  if (selectedIssuers.length > 0 && !selectedIssuers.includes(card.issuerTag)) {
    return false;
  }

  if (selectedBrands.length > 0 && !selectedBrands.includes(card.brand)) {
    return false;
  }

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
  const businessSelected = selectedFilters.includes("business");

  if (businessSelected) {
    return true; // allow business cards into the pool
  }

  return card.business !== true; // hide business cards by default
}


// =============================
// SCORING ENGINE
// Replaces old spend-based scoring
// =============================

function hasHotelBrandFilter(selectedFilters) {
  return selectedFilters.some(f =>
    ["hilton", "marriott", "hyatt", "ihg"].includes(f)
  );
}

function hasAirlineBrandFilter(selectedFilters) {
  return selectedFilters.some(f =>
    ["delta", "united", "american", "southwest", "aircanada", "britishairways", "aerlingus", "iberia"].includes(f)
  );
}

function getCategoryScore(card, category, selectedFilters, goal) {
  if (!card.rewards) return 0;

  let score = 0;

  if (category === "rent") {
    return card.brand === "bilt" ? 120 : 0;
  }

  const multiplier = card.rewards[category] || 0;
  const realValue = multiplier * (card.pointValue || 0.01);

  score += multiplier * 10;
  score += realValue * 400;

  const everydayCategories = ["dining", "groceries", "gas", "other"];
  const isEverydayCategory = everydayCategories.includes(category);

  if (isEverydayCategory && card.type === "flexible") score += 30;
  if (isEverydayCategory && card.type === "cashback") score += 25;

  if (isEverydayCategory && card.type === "hotel") {
    if (!selectedFilters.includes("hotel") && !hasHotelBrandFilter(selectedFilters)) {
      score -= 60;
    }
  }

  if (isEverydayCategory && card.type === "airline") {
    if (!selectedFilters.includes("airline") && !hasAirlineBrandFilter(selectedFilters)) {
      score -= 55;
    }
  }

  if (card.brand === "bilt" && category !== "rent") {
    if (!selectedFilters.includes("bilt")) score -= 75;
  }

  if (category === "flightsDirect") {
    if (card.type === "flexible") score += 25;
    if (card.type === "airline") score += 30;
  }

  if (category === "hotelsDirect") {
    if (card.type === "hotel") score += 30;
    if (card.type === "flexible") score += 20;
  }

  const portalMultiplier = card.rewards.travelPortal || 0;
  if (["flightsDirect", "hotelsDirect"].includes(category)) {
    score += portalMultiplier * 2;
  }

  const premiumRelevant =
    goal === "luxuryTravel" ||
    selectedFilters.includes("premium") ||
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
// Replaces old mini-card rendering
// =============================

function renderList(items) {
  if (!items || !items.length) return "";

  return `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function formatBestPairing(bestPairing) {
  if (Array.isArray(bestPairing)) return bestPairing.join(", ");
  return bestPairing || "Pairs well with a strong everyday earning card.";
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
        <p>${card.myReview || card.why || ""}</p>
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
        <p>${formatBestPairing(card.bestPairing)}</p>
      </div>

      <div class="actions">
        <a href="${card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
        ${card.youtubeUrl ? `<a href="${card.youtubeUrl}" target="_blank" class="video-btn">Watch My Review</a>` : ""}
      </div>
    </div>
  `;
}


// =============================
// GROUPING LOGIC
// New section
// =============================

function getGroupLabel(card, selectedFilters) {
  const brandLabels = {
    hilton: "Hilton Cards",
    marriott: "Marriott Cards",
    hyatt: "Hyatt Cards",
    ihg: "IHG Cards",
    delta: "Delta Cards",
    united: "United Cards",
    american: "American Airlines Cards",
    southwest: "Southwest Cards",
    aircanada: "Air Canada / Aeroplan Cards",
    britishairways: "British Airways Cards",
    aerlingus: "Aer Lingus Cards",
    iberia: "Iberia Cards"
  };

  const issuerLabels = {
    amex: "Amex Cards",
    chase: "Chase Cards",
    capitalone: "Capital One Cards",
    citi: "Citi Cards",
    bilt: "Bilt Cards"
  };

  const selectedBrandFilters = selectedFilters.filter(f => brandLabels[f]);
  const selectedIssuerFilters = selectedFilters.filter(f => issuerLabels[f]);

  // 1. If a hotel/airline brand is selected, group by brand.
  if (selectedBrandFilters.length > 0) {
    return brandLabels[card.brand] || "Other Cards";
  }

  // 2. If an issuer is selected, group by issuer.
  if (selectedIssuerFilters.length > 0) {
    return issuerLabels[card.issuerTag] || "Other Cards";
  }

  // 3. If no brand or issuer is selected, group by card type.
  // Flexible first, then cash back, then branded cards.
  if (card.type === "flexible") return "Flexible Points Cards";
  if (card.type === "cashback") return "Cash Back Cards";
  if (card.type === "airline") return "Airline Cards";
  if (card.type === "hotel") return "Hotel Cards";
  if (card.business) return "Business Cards";

  return "Other Cards";
}


// =============================
// RESULTS RENDERING
// Replaces old renderResults()
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

  const selectedFilters = getSelectedFilters();
  const groups = {};

  results.forEach(result => {
    const label = getGroupLabel(result.card, selectedFilters);

    if (!groups[label]) groups[label] = [];
    groups[label].push(result);
  });

  const groupOrder = [
  "Flexible Points Cards",
  "Cash Back Cards",

  "Amex Cards",
  "Chase Cards",
  "Capital One Cards",
  "Citi Cards",
  "Bilt Cards",

  "Hilton Cards",
  "Marriott Cards",
  "Hyatt Cards",
  "IHG Cards",
  "Delta Cards",
  "United Cards",
  "American Airlines Cards",
  "Southwest Cards",
  "Air Canada / Aeroplan Cards",
  "British Airways Cards",
  "Aer Lingus Cards",
  "Iberia Cards",

  "Airline Cards",
  "Hotel Cards",
  "Business Cards",
  "Beginner Friendly Cards",
  "Premium Cards",

  "Other Cards"
];

  const sortedGroupNames = Object.keys(groups).sort((a, b) => {
    const aIndex = groupOrder.indexOf(a);
    const bIndex = groupOrder.indexOf(b);

    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;

    return aIndex - bIndex;
  });

  container.innerHTML = sortedGroupNames.map(groupName => `
    <div class="other-cards">
      <h2>${groupName}</h2>
      ${groups[groupName].map(renderCard).join("")}
    </div>
  `).join("");
}


// =============================
// MAIN FINDER
// Replaces old runCalculator()
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
    .filter(result => selectedFilters.length > 0 || selectedCategories.length > 0 ? true : result.score > 0)
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