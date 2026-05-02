// Load pages into the main content area
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

// Toggle hamburger menu
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

// Load home page by default
document.addEventListener("DOMContentLoaded", function() {
  loadPage("home.html");
});



// ==============================
// Credit Card Calculator
// ==============================

function getCalcValue(id) {
  var input = document.getElementById(id);
  return input ? Number(input.value) || 0 : 0;
}

function getCardMultiplier(card, category) {
  if (!card || !card.rewards) return 1;

  // Only Bilt cards earn points on rent / mortgage
  if (category === "rent") {
    return card.name.toLowerCase().includes("bilt") ? (card.rewards.rent || 1) : 0;
  }

  // Rotating category protection
  if (card.rotatingCategories) {
    if (card.rotatingCategories.indexOf(category) !== -1) {
      return card.rotatingMultiplier || 5;
    }

    return card.rewards[category] || card.baseMultiplier || 1;
  }

  return card.rewards[category] || 1;
}

function runCalculator() {
  if (typeof creditCards === "undefined" || !Array.isArray(creditCards)) {
    alert("Card data is missing. Make sure data/cards.js is loaded before script.js.");
    return;
  }

  var spend = {
    dining: getCalcValue("dining"),
    groceries: getCalcValue("groceries"),
    gas: getCalcValue("gas"),
    rent: getCalcValue("rent"),
    hotels: getCalcValue("hotels"),
    flights: getCalcValue("flights"),
    other: getCalcValue("other")
  };

  var totalSpend =
    spend.dining +
    spend.groceries +
    spend.gas +
    spend.rent +
    spend.hotels +
    spend.flights +
    spend.other;

  var results = document.getElementById("results");
  var topCategoryEl = document.getElementById("topCategory");
  var bestValueEl = document.getElementById("bestValue");

  if (!results) return;

  if (totalSpend <= 0) {
    results.innerHTML = "<p style='text-align:center; color:#ccc; margin-top:20px;'>Enter your monthly spending to see your best card recommendations.</p>";

    if (topCategoryEl) topCategoryEl.textContent = "-";
    if (bestValueEl) bestValueEl.textContent = "$0.00";

    return;
  }

  var topCategories = Object.keys(spend)
    .sort(function(a, b) {
      return spend[b] - spend[a];
    })
    .slice(0, 5);

  if (topCategoryEl) {
    topCategoryEl.textContent = formatCategory(topCategories[0]);
  }

  var usedCards = [];
  var recommendations = [];

  topCategories.forEach(function(category) {
    var monthlySpend = spend[category];

    var categoryCards = creditCards
      .filter(function(card) {
        return usedCards.indexOf(card.name) === -1;
      })
      .map(function(card) {
        var multiplier = getCardMultiplier(card, category);
        var pointValue = card.pointValue || 0.01;

        var effectiveRate = multiplier * pointValue;
        var yearlyPoints = monthlySpend * multiplier * 12;
        var grossValue = yearlyPoints * pointValue;
        var netValue = grossValue - (card.annualFee || 0);

        return Object.assign({}, card, {
          recommendedCategory: category,
          recommendedCategoryName: formatCategory(category),
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

    categoryCards.forEach(function(card) {
      usedCards.push(card.name);
      recommendations.push(card);
    });
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
  var results = document.getElementById("results");
  if (!results) return;

  results.innerHTML = "";

  cards.forEach(function(card, index) {
    results.innerHTML += `
      <div class="recommendation-card">
        <small>${card.recommendedCategoryName.toUpperCase()} RECOMMENDATION #${(index % 3) + 1}</small>

        <h3>${card.name}</h3>

        <p><strong>Issuer:</strong> ${card.issuer || "N/A"}</p>

        <p><strong>Annual Fee:</strong> $${card.annualFee || 0}</p>

        <p><strong>Points Value:</strong> ${((card.pointValue || 0.01) * 100).toFixed(1)}¢ per point</p>

        <p><strong>Why:</strong> ${card.why || "Update manually"}</p>

        <p><strong>Current Welcome Bonus:</strong> ${card.welcomeBonus || "Update manually"}</p>

        <p>
          <strong>Net Value After Fee:</strong>
          $${card.netValue.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })} / year
        </p>

        <p>
          <strong>Estimated Yearly Points Earned:</strong>
          ${Math.round(card.yearlyPoints).toLocaleString()} points / year
        </p>
      </div>
    `;
  });
}

function formatCategory(category) {
  var names = {
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