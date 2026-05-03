// =============================
// PAGE LOADING (SPA STYLE)
// =============================

function loadPage(page) {
  fetch("pages/" + page)
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      document.getElementById("content").innerHTML = data;

      // Close menu on mobile
      var menu = document.getElementById("menu");
      if (menu) {
        menu.classList.remove("open");
      }

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "auto" });
    });
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("open");
  }
}

// Load home page first
document.addEventListener("DOMContentLoaded", function() {
  loadPage("home.html");
});


// =============================
// CALCULATOR ENGINE
// =============================

function getValue(id) {
  return Number(document.getElementById(id)?.value) || 0;
}

function getSelectedFilters() {
  const filters = document.querySelectorAll(".card-filter:checked");
  return Array.from(filters).map(f => f.value);
}

function getTopCategory(spend) {
  let max = 0;
  let top = "other";

  for (let key in spend) {
    if (spend[key] > max) {
      max = spend[key];
      top = key;
    }
  }

  return top;
}

function adjustCredits(credits, style) {
  if (!credits || credits.length === 0) return 0;

  let multiplier = 0.7;
  if (style === "conservative") multiplier = 0.5;
  if (style === "aggressive") multiplier = 0.9;

  return credits.reduce((sum, c) => sum + (c.value * multiplier), 0);
}

function passesFilter(card, selectedFilters) {
  if (selectedFilters.length === 0) return true;

  return selectedFilters.some(f =>
    (card.tags && card.tags.includes(f)) ||
    card.issuerTag === f ||
    card.brand === f ||
    card.type === f
  );
}

function calculateCardValue(card, spend, creditStyle, topCategory) {

  let total = 0;

  for (let category in spend) {

    let multiplier = card.rewards[category] || 1;

    // RENT RULE → ONLY BILT EARNS
    if (category === "rent" && card.issuerTag !== "bilt") {
      multiplier = 0;
    }

    total += spend[category] * multiplier * card.pointValue;
  }

  let creditValue = adjustCredits(card.credits || [], creditStyle);

  let bonus = 0;

  // TOP CATEGORY BOOST
  if (card.tags && card.tags.includes(topCategory)) {
    bonus += 150;
  }

  // GOAL BOOST
  const goal = document.getElementById("travelGoal")?.value;

  if (goal === "luxuryTravel" && card.tags?.includes("luxuryTravel")) {
    bonus += 200;
  }

  if (goal === "cashBack" && card.type === "cashback") {
    bonus += 150;
  }

  if (goal === "simpleSetup" && card.beginnerFriendly) {
    bonus += 100;
  }

  // PENALTY FOR HIGH FEES
  let penalty = 0;
  if (card.annualFee > 500) penalty += 150;

  let net = total + creditValue + bonus - card.annualFee - penalty;

  return {
    card,
    total,
    creditValue,
    net
  };
}

function renderResults(results) {

  const container = document.getElementById("resultsContent");

  if (!container) return;

  if (!results.length) {
    container.innerHTML = "<p>No cards matched your filters.</p>";
    return;
  }

  // Remove placeholder
  document.querySelector(".results-placeholder")?.remove();

  const best = results[0];

  container.innerHTML = `
    <div class="result-hero">
      <h2>Best Overall Card</h2>

      <div class="result-card">
        <img src="${best.card.imageUrl || 'images/default-card.jpg'}" />

        <h3>${best.card.name}</h3>
        <p class="value">$${Math.round(best.net)} / year</p>

        <p><strong>Best For:</strong> ${best.card.bestFor}</p>

        <div class="why">
          <strong>Why this card:</strong>
          <p>${best.card.why}</p>
        </div>

        <div class="bad">
          <strong>Keep in mind:</strong>
          <p>${(best.card.weaknesses || []).join(", ")}</p>
        </div>

        <div class="actions">
          <a href="${best.card.applyUrl}" target="_blank" class="apply-btn">Apply Now</a>
          ${best.card.youtubeUrl ? `<a href="${best.card.youtubeUrl}" target="_blank" class="video-btn">Watch Video</a>` : ""}
        </div>
      </div>
    </div>

    <div class="other-cards">
      <h2>Top Matches</h2>

      ${results.slice(1,6).map(r => `
        <div class="mini-card">
          <img src="${r.card.imageUrl || 'images/default-card.jpg'}" />
          <h4>${r.card.name}</h4>
          <p>$${Math.round(r.net)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function runCalculator() {

  if (typeof creditCards === "undefined") {
    alert("Card data is missing. Make sure data/cards.js is loaded.");
    return;
  }

  const spend = {
    dining: getValue("dining"),
    groceries: getValue("groceries"),
    gas: getValue("gas"),
    flightsDirect: getValue("flightsDirect"),
    hotelsDirect: getValue("hotelsDirect"),
    travelPortal: getValue("travelPortal"),
    rent: getValue("rent"),
    other: getValue("other")
  };

  const creditStyle = document.getElementById("creditStyle")?.value || "balanced";
  const maxFee = Number(document.getElementById("annualFeeSlider")?.value) || 895;
  const filters = getSelectedFilters();

  const topCategory = getTopCategory(spend);

  let results = creditCards
    .filter(card => card.annualFee <= maxFee)
    .filter(card => passesFilter(card, filters))
    .map(card => calculateCardValue(card, spend, creditStyle, topCategory))
    .sort((a, b) => b.net - a.net);

  renderResults(results);
}


// =============================
// EVENT LISTENERS
// =============================

// Button click (fix for dynamic page load)
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "runCalculatorBtn") {
    runCalculator();
  }
});

// Slider UI update
document.addEventListener("input", function (e) {
  if (e.target.id === "annualFeeSlider") {
    document.getElementById("feeValue").textContent = "$" + e.target.value;
  }
});