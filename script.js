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

function getWelcomeBonus(card) {
  const bonusData = window.welcomeBonuses || {};
  const bonus = bonusData[card.slug];

  if (!bonus) {
    return "Check the current welcome bonus before applying.";
  }

  let text = bonus.bonus || "Check the current welcome bonus before applying.";

  if (bonus.spendRequirement) {
    text += `<br><small>Spend Requirement: ${bonus.spendRequirement}</small>`;
  }

  if (bonus.estimatedValue) {
    text += `<br><small>Estimated Value: ${bonus.estimatedValue}</small>`;
  }

  if (bonus.elevated) {
    text += `<br><small>🔥 Elevated Offer</small>`;
  }

  return text;
}

function clearCardFilters() {
  document.querySelectorAll(".card-filter, .top-category-filter").forEach(input => {
    input.checked = false;
  });

  const goal = document.getElementById("travelGoal");
  if (goal) goal.value = "bestOverall";

  const minSlider = document.getElementById("minAnnualFeeSlider");
  if (minSlider) minSlider.value = 0;

  const maxSlider = document.getElementById("maxAnnualFeeSlider");
  if (maxSlider) maxSlider.value = 895;

  const minFeeValue = document.getElementById("minFeeValue");
  if (minFeeValue) minFeeValue.textContent = "$0";

  const maxFeeValue = document.getElementById("maxFeeValue");
  if (maxFeeValue) maxFeeValue.textContent = "$895";

  const container = document.getElementById("resultsContent");

  if (container) {
    container.innerHTML = `
      <div class="results-placeholder">
        <h2>Find Your Best Cards</h2>
        <p>
          Select your categories and filters, then click
          <strong>"Find My Cards"</strong>
          to get personalized recommendations.
        </p>
      </div>
    `;
  }
}


// =============================
// FILTER GROUP LOGIC
// =============================

function passesFilter(card, selectedFilters) {

  const issuerFilters = [
    "amex",
    "chase",
    "capitalone",
    "citi",
    "bilt"
  ];

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

  const selectedIssuers = selectedFilters.filter(f =>
    issuerFilters.includes(f)
  );

  const selectedTypes = selectedFilters.filter(f =>
    typeFilters.includes(f)
  );

  const selectedBrands = selectedFilters.filter(f =>
    brandFilters.includes(f)
  );

  if (
    selectedIssuers.length > 0 &&
    !selectedIssuers.includes(card.issuerTag)
  ) {
    return false;
  }

  if (
    selectedBrands.length > 0 &&
    !selectedBrands.includes(card.brand)
  ) {
    return false;
  }

  const selectedMainTypes = selectedTypes.filter(f =>
    ["flexible", "cashback", "airline", "hotel"].includes(f)
  );

  if (
    selectedMainTypes.length > 0 &&
    !selectedMainTypes.includes(card.type)
  ) {
    return false;
  }

  if (
    selectedTypes.includes("business") &&
    card.business !== true
  ) {
    return false;
  }

  if (
    selectedTypes.includes("beginner") &&
    card.beginnerFriendly !== true
  ) {
    return false;
  }

  if (
    selectedTypes.includes("premium") &&
    card.premium !== true
  ) {
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
    return (
      card.type === "airline" ||
      card.tags?.includes("flights") ||
      card.tags?.includes("travel")
    );
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
    return true;
  }

  return card.business !== true;
}


// =============================
// SCORING ENGINE
// =============================

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

  const everydayCategories = [
    "dining",
    "groceries",
    "gas",
    "other"
  ];

  const isEverydayCategory =
    everydayCategories.includes(category);

  if (
    isEverydayCategory &&
    card.type === "flexible"
  ) {
    score += 30;
  }

  if (
    isEverydayCategory &&
    card.type === "cashback"
  ) {
    score += 25;
  }

  if (
    isEverydayCategory &&
    card.type === "hotel"
  ) {
    if (
      !selectedFilters.includes("hotel") &&
      !hasHotelBrandFilter(selectedFilters)
    ) {
      score -= 60;
    }
  }

  if (
    isEverydayCategory &&
    card.type === "airline"
  ) {
    if (
      !selectedFilters.includes("airline") &&
      !hasAirlineBrandFilter(selectedFilters)
    ) {
      score -= 55;
    }
  }

  if (
    card.brand === "bilt" &&
    category !== "rent"
  ) {
    if (!selectedFilters.includes("bilt")) {
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

  const portalMultiplier =
    card.rewards.travelPortal || 0;

  if (
    ["flightsDirect", "hotelsDirect"].includes(category)
  ) {
    score += portalMultiplier * 2;
  }

  const premiumRelevant =
    goal === "luxuryTravel" ||
    selectedFilters.includes("premium") ||
    category === "flightsDirect" ||
    category === "hotelsDirect";

  if (
    card.premium &&
    !premiumRelevant &&
    isEverydayCategory
  ) {
    score -= 35;
  }

  return score;
}