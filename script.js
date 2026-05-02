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
function calculateRewards() {
  const dining = Number(document.getElementById("dining")?.value) || 0;
  const groceries = Number(document.getElementById("groceries")?.value) || 0;
  const gas = Number(document.getElementById("gas")?.value) || 0;
  const travel = Number(document.getElementById("travel")?.value) || 0;
  const other = Number(document.getElementById("other")?.value) || 0;
  const cpp = Number(document.getElementById("cpp")?.value) || 0.02;

  const monthlyPoints =
    dining * 4 +
    groceries * 4 +
    gas * 3 +
    travel * 3 +
    other * 1;

  const yearlyPoints = monthlyPoints * 12;
  const yearlyValue = yearlyPoints * cpp;

  document.getElementById("monthlyPoints").textContent =
    monthlyPoints.toLocaleString();

  document.getElementById("yearlyPoints").textContent =
    yearlyPoints.toLocaleString();

  document.getElementById("yearlyValue").textContent =
    "$" + yearlyValue.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
}