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

  const pointValue = getCalcValue("pointValue") || 0.02;

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
      const yearlyValue = yearlyPoints * pointValue;

      return {
        ...card,
        yearlyPoints,
        yearlyValue
      };
    })
    .sort((a, b) => b.yearlyValue - a.yearlyValue);

  document.getElementById("bestValue").textContent =
    "$" + ranked[0].yearlyValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  displayCardResults(ranked.slice(0, 3));
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
        <p><strong>Annual Fee:</strong> $${card.annualFee}</p>
        <p><strong>Best For:</strong> ${card.bestFor}</p>
        <p><strong>Why:</strong> ${card.why}</p>

        <span class="score-pill">
          Estimated Value: $${card.yearlyValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} / year
        </span>

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