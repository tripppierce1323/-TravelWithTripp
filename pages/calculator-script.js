// =============================
// FINDER HELPERS
// =============================

function getSelectedFilters() {

  const filters =
    document.querySelectorAll(".card-filter:checked");

  return Array.from(filters).map(f => f.value);
}

function getSelectedTopCategories() {

  const categories =
    document.querySelectorAll(".top-category-filter:checked");

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


// =============================
// WELCOME BONUS
// =============================

function getWelcomeBonus(card) {

  const bonusData =
    window.welcomeBonuses || {};

  const bonus =
    bonusData[card.slug];

  if (!bonus) {
    return "Check the current welcome bonus before applying.";
  }

  let text =
    bonus.bonus ||
    "Check the current welcome bonus before applying.";

  if (bonus.spendRequirement) {
    text += `
      <br>
      <small>
        Spend Requirement:
        ${bonus.spendRequirement}
      </small>
    `;
  }

  if (bonus.estimatedValue) {
    text += `
      <br>
      <small>
        Estimated Value:
        ${bonus.estimatedValue}
      </small>
    `;
  }

  if (bonus.elevated) {
    text += `
      <br>
      <small>🔥 Elevated Offer</small>
    `;
  }

  return text;
}


// =============================
// CLEAR FILTERS
// =============================

function clearCardFilters() {

  document
    .querySelectorAll(".card-filter, .top-category-filter")
    .forEach(input => {
      input.checked = false;
    });

  const goal =
    document.getElementById("travelGoal");

  if (goal) {
    goal.value = "bestOverall";
  }

  const minSlider =
    document.getElementById("minAnnualFeeSlider");

  if (minSlider) {
    minSlider.value = 0;
  }

  const maxSlider =
    document.getElementById("maxAnnualFeeSlider");

  if (maxSlider) {
    maxSlider.value = 895;
  }

  const minFeeValue =
    document.getElementById("minFeeValue");

  if (minFeeValue) {
    minFeeValue.textContent = "$0";
  }

  const maxFeeValue =
    document.getElementById("maxFeeValue");

  if (maxFeeValue) {
    maxFeeValue.textContent = "$895";
  }

  const container =
    document.getElementById("resultsContent");

  if (container) {

    container.innerHTML = `
      <div class="results-placeholder">
        <h2>Find Your Best Cards</h2>

        <p>
          Select your categories and filters,
          then click
          <strong>"Find My Cards"</strong>
          to get personalized recommendations.
        </p>
      </div>
    `;
  }
}


// =============================
// FILTER LOGIC
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

  const selectedIssuers =
    selectedFilters.filter(f =>
      issuerFilters.includes(f)
    );

  const selectedTypes =
    selectedFilters.filter(f =>
      typeFilters.includes(f)
    );

  const selectedBrands =
    selectedFilters.filter(f =>
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

  const selectedMainTypes =
    selectedTypes.filter(f =>
      [
        "flexible",
        "cashback",
        "airline",
        "hotel"
      ].includes(f)
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


// =============================
// BUSINESS CARD LOGIC
// =============================

function shouldShowBusinessCards(
  card,
  selectedFilters
) {

  const businessSelected =
    selectedFilters.includes("business");

  if (businessSelected) {
    return true;
  }

  return card.business !== true;
}


// =============================
// CATEGORY SCORING
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

  // Rent / mortgage should ONLY reward Bilt
  if (category === "rent") {
    return card.brand === "bilt" ? 120 : -999;
  }

  const multiplier = card.rewards[category] || 0;
  const pointValue = card.pointValue || 0.01;

  // This is the real value earned per $1 spent
  // Example: 4x * 2cpp = 8% return
  const effectiveReturn = multiplier * pointValue;

  let score = effectiveReturn * 1000;

  const everydayCategories = ["dining", "groceries", "gas", "other"];
  const isEverydayCategory = everydayCategories.includes(category);

  // Flexible points deserve a small boost because they are easier to use
  if (isEverydayCategory && card.type === "flexible") {
    score += 20;
  }

  // Cash back is simple and predictable
  if (isEverydayCategory && card.type === "cashback") {
    score += 12;
  }

  // Hotel cards should NOT outrank flexible cards on everyday spend
  // unless user specifically selects hotel or that hotel brand
  if (isEverydayCategory && card.type === "hotel") {
    if (!selectedFilters.includes("hotel") && !hasHotelBrandFilter(selectedFilters)) {
      score -= 35;
    }
  }

  // Airline cards should NOT outrank flexible cards on everyday spend
  // unless user specifically selects airline or that airline brand
  if (isEverydayCategory && card.type === "airline") {
    if (!selectedFilters.includes("airline") && !hasAirlineBrandFilter(selectedFilters)) {
      score -= 35;
    }
  }

  // Bilt should only rise when rent is selected
  if (card.brand === "bilt" && category !== "rent" && !selectedFilters.includes("bilt")) {
    score -= 60;
  }

  // Travel category logic
  if (category === "flightsDirect") {
    if (card.type === "flexible") score += 20;
    if (card.type === "airline") score += 20;
  }

  if (category === "hotelsDirect") {
    if (card.type === "hotel") score += 25;
    if (card.type === "flexible") score += 15;
  }

  // Premium cards should not win everyday categories just because they are premium
  const premiumRelevant =
    goal === "luxuryTravel" ||
    selectedFilters.includes("premium") ||
    category === "flightsDirect" ||
    category === "hotelsDirect";

  if (card.premium && !premiumRelevant && isEverydayCategory) {
    score -= 30;
  }

  return score;
}


// =============================
// GOAL SCORE
// =============================

function getGoalScore(card, goal) {

  let score = 0;

  if (
    goal === "luxuryTravel" &&
    card.premium
  ) {
    score += 55;
  }

  if (
    goal === "freeFlights" &&
    card.type === "airline"
  ) {
    score += 50;
  }

  if (
    goal === "freeHotels" &&
    card.type === "hotel"
  ) {
    score += 50;
  }

  if (
    goal === "cashBack" &&
    card.type === "cashback"
  ) {
    score += 55;
  }

  if (
    goal === "simpleSetup" &&
    card.beginnerFriendly
  ) {
    score += 50;
  }

  if (
    goal === "maximizePoints" &&
    card.type === "flexible"
  ) {
    score += 55;
  }

  return score;
}


// =============================
// MAIN SCORE ENGINE
// =============================

function calculateRecommendationScore(
  card,
  selectedCategories,
  selectedFilters,
  goal
) {

  let score = 0;

  if (selectedCategories.length === 0) {

    score += 20;

    if (card.type === "flexible") {
      score += 45;
    }

    if (card.beginnerFriendly) {
      score += 20;
    }
  }

  selectedCategories.forEach(category => {

    score += getCategoryScore(
      card,
      category,
      selectedFilters,
      goal
    );

  });

  score += getGoalScore(card, goal);

  return {
    card,
    score,
    matchLabel: getMatchLabel(score)
  };
}


// =============================
// MATCH LABEL
// =============================

function getMatchLabel(score) {

  if (score >= 115) {
    return "Excellent Match";
  }

  if (score >= 80) {
    return "Strong Match";
  }

  return "Good Match";
}


// =============================
// RENDER HELPERS
// =============================

function renderList(items) {

  if (!items || !items.length) {
    return "";
  }

  return `
    <ul>
      ${items.map(item =>
        `<li>${item}</li>`
      ).join("")}
    </ul>
  `;
}

function formatBestPairing(bestPairing) {

  if (Array.isArray(bestPairing)) {
    return bestPairing.join(", ");
  }

  return (
    bestPairing ||
    "Pairs well with a strong everyday earning card."
  );
}


// =============================
// RENDER CARD
// =============================

function renderCard(cardResult) {

  const card =
    cardResult.card;

  return `

    <div class="mini-card">

      <img
        src="${card.imageUrl || 'assets/cards/default-card.png'}"
      />

      <h4>${card.name}</h4>

      <p>
        <strong>
          ${cardResult.matchLabel}
        </strong>
      </p>

      <p>
        <strong>Annual Fee:</strong>
        $${card.annualFee}
      </p>

      <p>
        <strong>Best For:</strong>
        ${card.bestFor}
      </p>

      <div class="card-detail-block">

        <strong>Top Multipliers</strong>

        ${renderList(
          card.multipliers ||
          card.benefits ||
          []
        )}

      </div>

      <div class="card-detail-block">

        <strong>Current Welcome Bonus</strong>

        <p>
          ${getWelcomeBonus(card)}
        </p>

      </div>

      <div class="card-detail-block">

        <strong>My Review</strong>

        <p>
          ${card.myReview || ""}
        </p>

      </div>

      <div class="card-detail-block">

        <strong>Good For</strong>

        ${renderList(
          card.goodFor || []
        )}

      </div>

      <div class="card-detail-block">

        <strong>Not Good For</strong>

        ${renderList(
          card.notGoodFor || []
        )}

      </div>

      <div class="card-detail-block">

        <strong>Best Pairing</strong>

        <p>
          ${formatBestPairing(card.bestPairing)}
        </p>

      </div>

      <div class="actions">

        <a
          href="${card.applyUrl || '#'}"
          target="_blank"
          class="apply-btn"
        >
          Apply Now
        </a>

        ${
          card.youtubeUrl
          ? `
            <a
              href="${card.youtubeUrl}"
              target="_blank"
              class="video-btn"
            >
              Watch My Review
            </a>
          `
          : ""
        }

      </div>

    </div>
  `;
}


// =============================
// RENDER RESULTS
// =============================

function renderResults(results) {

  const container =
    document.getElementById("resultsContent");

  if (!container) {
    return;
  }

  if (!results.length) {

    container.innerHTML = `
      <div class="results-placeholder">

        <h2>No cards found</h2>

        <p>
          No cards matched your filters.
        </p>

      </div>
    `;

    return;
  }

  container.innerHTML = `
    <div class="other-cards">

      ${results.map(renderCard).join("")}

    </div>
  `;
}


// =============================
// MAIN CALCULATOR
// =============================

function runCalculator() {

  const personalCards =
    window.creditCards || [];

  const businessCards =
    window.businessCreditCards || [];

  const selectedCategories =
    getSelectedTopCategories();

  const selectedFilters =
    getSelectedFilters();

  const goal =
    document.getElementById("travelGoal")?.value ||
    "bestOverall";

  const minFee =
    Number(
      document.getElementById("minAnnualFeeSlider")?.value
    ) || 0;

  const maxFee =
    Number(
      document.getElementById("maxAnnualFeeSlider")?.value
    ) || 895;

  const cardsData = [
    ...personalCards,
    ...businessCards
  ];

  const results =
    cardsData

      .filter(card =>
        card.annualFee >= minFee &&
        card.annualFee <= maxFee
      )

      .filter(card =>
        shouldShowBusinessCards(
          card,
          selectedFilters
        )
      )

      .filter(card =>
        passesFilter(
          card,
          selectedFilters
        )
      )

      .map(card =>
        calculateRecommendationScore(
          card,
          selectedCategories,
          selectedFilters,
          goal
        )
      )

      .sort((a, b) =>
        b.score - a.score
      );

  renderResults(results);
}


// =============================
// SLIDER EVENTS
// =============================

document.addEventListener("input", function(e) {

  const minSlider =
    document.getElementById("minAnnualFeeSlider");

  const maxSlider =
    document.getElementById("maxAnnualFeeSlider");

  const minFeeValue =
    document.getElementById("minFeeValue");

  const maxFeeValue =
    document.getElementById("maxFeeValue");

  if (!minSlider || !maxSlider) {
    return;
  }

  let minFee =
    Number(minSlider.value);

  let maxFee =
    Number(maxSlider.value);

  if (
    e.target.id === "minAnnualFeeSlider" &&
    minFee > maxFee
  ) {
    maxFee = minFee;
    maxSlider.value = maxFee;
  }

  if (
    e.target.id === "maxAnnualFeeSlider" &&
    maxFee < minFee
  ) {
    minFee = maxFee;
    minSlider.value = minFee;
  }

  if (minFeeValue) {
    minFeeValue.textContent =
      "$" + minFee;
  }

  if (maxFeeValue) {
    maxFeeValue.textContent =
      "$" + maxFee;
  }

});


// =============================
// GLOBAL EXPORTS
// =============================

window.runCalculator =
  runCalculator;

window.clearCardFilters =
  clearCardFilters;