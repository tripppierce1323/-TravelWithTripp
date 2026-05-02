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
  const el = document.getElementById(id);
  return el ? Number(el.value) || 0 : 0;
}

function getCardMultiplier(card, category) {
  if (!card || !card.rewards) return 1;
  return card.rewards[category] || 1;
}

function runCalculator() {
  if (typeof creditCards === "undefined" || !Array.isArray(creditCards)) {
    alert("Card data is missing. Make sure data/cards.js is loaded before script.js.");
    return;
  }

  const results = document.getElementById("results");
  const topCategoryEl = document.getElementById("topCategory");
  const bestValueEl = document.getElementById("bestValue");

  if (!results) return;

  const spend = {
    dining: getCalcValue("dining"),
    groceries: getCalcValue("groceries"),
    gas: getCalcValue("gas"),
    rent: getCalcValue("rent"),
    hotels: getCalcValue("hotels"),
    flights: getCalcValue("flights"),
    other: getCalcValue("other")
  };

  const totalSpend =
    spend.dining +
    spend.groceries +
    spend.gas +
    spend.rent +
    spend.hotels +
    spend.flights +
    spend.other;

  if (totalSpend <= 0) {
    results.innerHTML = "<p class='empty-results'>Enter your monthly spending to see recommendations.</p>";
    if (topCategoryEl) topCategoryEl.textContent = "-";
    if (bestValueEl) bestValueEl.textContent = "$0.00";
    return;
  }

  const topCategories = Object.keys(spend)
    .filter(function(category) {
      return spend[category] > 0;
    })
    .sort(function(a, b) {
      return spend[b] - spend[a];
    })
    .slice(0, 5);

  if (topCategoryEl) {
    topCategoryEl.textContent = formatCategory(topCategories[0]);
  }

  let recommendations = [];
  let usedCards = [];

  topCategories.forEach(function(category) {
    const monthlySpend = spend[category];

    const rankedCards = creditCards
      .filter(function(card) {
        return usedCards.indexOf(card.name) === -1;
      })
      .map(function(card) {
        const multiplier = getCardMultiplier(card, category);
        const pointValue = card.pointValue || 0.01;
        const effectiveRate = multiplier * pointValue;

        const yearlyPoints = monthlySpend * multiplier * 12;
        const grossValue = yearlyPoints * pointValue;
        const netValue = grossValue - (card.annualFee || 0);

        return Object.assign({}, card, {
          category: category,
          categoryName: formatCategory(category),
          multiplier: multiplier,
          pointValue: pointValue,
          effectiveRate: effectiveRate,
          yearlyPoints: yearlyPoints,
          grossValue: grossValue,
          netValue: netValue
        });
      })
      .sort(function(a, b) {
        if (b.effectiveRate !== a.effectiveRate) {
          return b.effectiveRate - a.effectiveRate;
        }

        return b.grossValue - a.grossValue;
      })
      .slice(0, 3);

    rankedCards.forEach(function(card) {
      usedCards.push(card.name);
    });

    recommendations = recommendations.concat(rankedCards);
  });

  if (bestValueEl && recommendations.length > 0) {
    bestValueEl.textContent =
      "$" +
      recommendations[0].grossValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
  }

  displayCardResults(recommendations);
}

function displayCardResults(cards) {
  const results = document.getElementById("results");
  if (!results) return;

  results.innerHTML = "";

  cards.forEach(function(card, index) {
    results.innerHTML +=
      "<div class='recommendation-card'>" +
        "<small>" + card.categoryName.toUpperCase() + " RECOMMENDATION #" + ((index % 3) + 1) + "</small>" +
        "<h3>" + card.name + "</h3>" +

        "<p><strong>Issuer:</strong> " + (card.issuer || "N/A") + "</p>" +
        "<p><strong>Annual Fee:</strong> $" + (card.annualFee || 0) + "</p>" +
        "<p><strong>Points Value:</strong> " + ((card.pointValue || 0.01) * 100).toFixed(1) + "¢ per point</p>" +
        "<p><strong>Why:</strong> " + (card.why || "Update manually") + "</p>" +
        "<p><strong>Current Welcome Bonus:</strong> " + (card.welcomeBonus || "Update manually") + "</p>" +

        "<span class='score-pill'>" +
          card.multiplier + "x on " + card.categoryName + " • " +
          (card.effectiveRate * 100).toFixed(1) + "¢ per $1" +
        "</span>" +

        "<p><strong>Net Value After Fee:</strong> $" +
          card.netValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }) +
        " / year</p>" +

        "<p><strong>Estimated Yearly Points Earned:</strong> " +
          Math.round(card.yearlyPoints).toLocaleString() +
        " points / year</p>" +
      "</div>";
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
}  return names[category] || category;
}