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
// CALCULATOR HELPERS
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

function passesFilter(card, selectedFilters) {
  if (selectedFilters.length === 0) return true;

  return selectedFilters.some(f =>
    (card.tags && card.tags.includes(f)) ||
    card.issuerTag === f ||
    card.brand === f ||
    card.type === f
  );
}

function passesGoalFilter(card, goal) {
  if (goal === "bestOverall") return true;

  if (goal === "luxuryTravel") {
    return card.tags?.includes("luxuryTravel") || card.premium === true;
  }

  if (goal === "freeFlights") {
    return card.type === "airline" ||
      card.tags?.includes("flights") ||
      card.tags?.includes("travel");
  }

  if (goal === "freeHotels") {
    return card.type === "hotel" ||
      card.tags?.includes("hotel");
  }

  if (goal === "cashBack") {
    return card.type === "cashback" ||
      card.tags?.includes("cashback");
  }

  if (goal === "simpleSetup") {
    return card.beginnerFriendly === true ||
      card.tags?.includes("everyday");
  }

  if (goal === "maximizePoints") {
    return card.type === "flexible" ||
      card.tags?.includes("flexible");
  }

  return true;
}


// =============================
// CALCULATOR ENGINE
// =============================

function calculateCardValue(card, spend, topCategory) {
  let total = 0;

  for (let category in spend) {
    let multiplier = card.rewards[category] || 1;

    // Rent / mortgage should only earn on Bilt cards
    if (category === "rent" && card.issuerTag !== "bilt") {
      multiplier = 0;
    }

    total += spend[category] * multiplier * card.pointValue;
  }

  let bonus = 0;

  // Boost cards that match the user’s highest spend category
  if (card.tags && card.tags.includes(topCategory)) {
    bonus += 150;
  }

  // Small boost for beginner-friendly cards
  if (card.beginnerFriendly) {
    bonus += 50;
  }

  // Penalty for very high annual fees
  let penalty = 0;
  if (card.annualFee > 500) {
    penalty += 150;
  }

  const net = total + bonus - card.annualFee - penalty;

  return {
    card: card,
    total: total,
    net: net
  };
}

function renderResults(results) {
  const container = document.getElementById("resultsContent");
  if (!container) return;

  if (!results.length) {
    document.querySelector(".results-placeholder")?.remove();
    container.innerHTML = "<p>No cards matched your filters.</p>";
    return;
  }

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

      ${results.slice(1, 6).map(r => `
        <div class="mini-card">
          <img src="${r.card.imageUrl || 'images/default-card.jpg'}" />
          <h4>${r.card.name}</h4>
          <p>$${Math.round(r.net)} / year</p>
        </div>
      `).join("")}
    </div>
  `;
}

function runCalculator() {
  const cardsData = window.creditCards || creditCards;

  if (!cardsData) {
    alert("Card data is missing. Make sure data/cards.js is loaded.");
    return;
  }

  // User enters monthly spend. Calculator converts it to yearly value.
  const spend = {
    dining: getValue("dining") * 12,
    groceries: getValue("groceries") * 12,
    gas: getValue("gas") * 12,
    flightsDirect: getValue("flightsDirect") * 12,
    hotelsDirect: getValue("hotelsDirect") * 12,
    travelPortal: getValue("travelPortal") * 12,
    rent: getValue("rent") * 12,
    other: getValue("other") * 12
  };

  const maxFee = Number(document.getElementById("annualFeeSlider")?.value) || 895;
  const filters = getSelectedFilters();
  const goal = document.getElementById("travelGoal")?.value || "bestOverall";
  const topCategory = getTopCategory(spend);

  const results = cardsData
    .filter(card => card.annualFee <= maxFee)
    .filter(card => passesFilter(card, filters))
    .filter(card => passesGoalFilter(card, goal))
    .map(card => calculateCardValue(card, spend, topCategory))
    .sort((a, b) => b.net - a.net);

  renderResults(results);
}


// =============================
// EVENT LISTENERS
// =============================

document.addEventListener("input", function(e) {
  if (e.target.id === "annualFeeSlider") {
    document.getElementById("feeValue").textContent = "$" + e.target.value;
  }
});

// Expose functions for inline HTML onclick
window.runCalculator = runCalculator;
window.loadPage = loadPage;
window.toggleMenu = toggleMenu;