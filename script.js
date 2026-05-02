// Load pages into the main content area
function loadPage(page) {
  fetch("pages/" + page)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // Close menu after clicking (mobile fix)
      document.getElementById("menu").classList.remove("open");

      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "instant" });
    });
}

// Toggle hamburger menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

// Load home page by default
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home.html");
});



// Credit Card Calculator

function getCalcValue(id) {
  return Number(document.getElementById(id)?.value) || 0;
}

function getCardMultiplier(card, category) {
  const baseMultiplier = card.baseMultiplier || 1;

  // If a card has rotating categories, only give 5x to the categories listed.
  if (card.rotatingCategories) {
    if (card.rotatingCategories.includes(category)) {
      return card.rotatingMultiplier || 5;
    }

    // Otherwise use the normal category reward if listed, or base.
    return card.rewards?.[category] || baseMultiplier;
  }

  return card.rewards?.[category] || baseMultiplier;
}

function runCalculator() {
  if (typeof creditCards === "undefined") {
    alert("Card data is missing. Make sure data/cards.js is loaded before script.js.");
    return;
  }

  const spend = {
    dining: getCalcValue("dining"),
    groceries: getCalcValue("groceries"),
    gas: getCalcValue("gas"),
    rent: getCalcValue("rent"),
    hotels: getCalcValue("hotels"),
    flights: getCalcValue("flights"),
    other: getCalcValue("other")
  };

  const top = Object.entries(spend).sort((a, b) => b[1] - a[1])[0];

  document.getElementById("topCategory").textContent =
    top[1] > 0 ? formatCategory(top[0]) : "-";

  const ranked = creditCards
    .map(card => {
      let monthlyPoints = 0;

      Object.keys(spend).forEach(category => {
        monthlyPoints += spend[category] * getCardMultiplier(card, category);
      });

      const yearlyPoints = monthlyPoints * 12;
      const pointValue = card.pointValue || 0.01;

      // Gross value is now the ranking value.
      const yearlyValue = yearlyPoints * pointValue;

      // Still calculate net value for display only.
      const netYearlyValue = yearlyValue - (card.annualFee || 0);

      return {
        ...card,
        yearlyPoints,
        yearlyValue,
        netYearlyValue
      };
    })
    .sort((a, b) => b.yearlyValue - a.yearlyValue);

  document.getElementById("bestValue").textContent =
    "$" + ranked[0].yearlyValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  displayCardResults(ranked.slice(0, 5));
}

function displayCardResults(cards) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  cards.forEach((card, index) => {
    results.innerHTML += `
      <div class="recommendation-card">
        <small>RECOMMENDATION #${index + 1}</small>
        <h3>${card.name}</h3>

        <p><strong>Issuer:</strong> ${card.issuer}</p>
        <p><strong>Ecosystem:</strong> ${card.ecosystem || "N/A"}</p>
        <p><strong>Annual Fee:</strong> $${card.annualFee}</p>
        <p><strong>Point Value Used:</strong> ${((card.pointValue || 0.01) * 100).toFixed(1)}¢ per point</p>
        <p><strong>Best For:</strong> ${card.bestFor}</p>
        <p><strong>Why:</strong> ${card.why}</p>

        <span class="score-pill">
          Gross Estimated Value: $${card.yearlyValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} / year
        </span>

        <p>
          <strong>Net Value After Annual Fee:</strong>
          $${card.netYearlyValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} / year
        </p>

        <p>
          <strong>Estimated Points Earned:</strong>
          ${Math.round(card.yearlyPoints).toLocaleString()} points / year
        </p>

        <ul class="benefits">
          ${card.benefits.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  });
}

function formatCategory(category) {
  const names = {
    dining: "Dining",
    groceries: "Groceries",
    gas: "Gas",
    rent: "Rent / Mortgage",
    hotels: "Hotels",
    flights: "Flights",
    other: "Other"
  };

  return names[category] || category;
}