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

// Credit Card Calculator

function getCalcValue(id) {
  return Number(document.getElementById(id)?.value) || 0;
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
      const monthlyPoints =
        spend.dining * card.rewards.dining +
        spend.groceries * card.rewards.groceries +
        spend.gas * card.rewards.gas +
        spend.rent * card.rewards.rent +
        spend.hotels * card.rewards.hotels +
        spend.flights * card.rewards.flights +
        spend.other * card.rewards.other;

      const yearlyPoints = monthlyPoints * 12;

      // Uses each card's own ecosystem point value
      const pointValue = card.pointValue || 0.01;
      const yearlyValue = yearlyPoints * pointValue;

      // Optional: subtract annual fee for net value
      const netYearlyValue = yearlyValue - card.annualFee;

      return {
        ...card,
        yearlyPoints,
        yearlyValue,
        netYearlyValue
      };
    })
    .sort((a, b) => b.netYearlyValue - a.netYearlyValue);

  document.getElementById("bestValue").textContent =
    "$" + ranked[0].netYearlyValue.toLocaleString(undefined, {
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
        <p><strong>Point Value Used:</strong> ${(card.pointValue * 100).toFixed(1)}¢ per point</p>
        <p><strong>Best For:</strong> ${card.bestFor}</p>
        <p><strong>Why:</strong> ${card.why}</p>

        <span class="score-pill">
          Net Estimated Value: $${card.netYearlyValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} / year
        </span>

        <p>
          <strong>Gross Rewards Value:</strong>
          $${card.yearlyValue.toLocaleString(undefined, {
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