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

      const menu = document.getElementById("menu");

      if (menu) {
        menu.classList.remove("open");
      }

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      loadPageScript(page);

    })

    .catch(function(error) {

      console.error("Error loading page:", error);

      document.getElementById("content").innerHTML = `
        <div style="padding:40px;color:white;">
          Failed to load page.
        </div>
      `;
    });
}


// =============================
// LOAD PAGE-SPECIFIC SCRIPTS
// =============================

function loadPageScript(page) {

  // Remove old dynamic scripts
  document.querySelectorAll(".dynamic-page-script")
    .forEach(script => script.remove());

  let scriptPath = "";

  // =============================
  // PAGE SCRIPT ROUTING
  // =============================

  if (page === "calculator.html") {
    scriptPath = "pages/calculator-script.js";
  }

  else if (page === "bonuses.html") {
    scriptPath = "pages/bonues-script.js";
  }

  else if (page === "wallet.html") {
    scriptPath = "pages/wallet-script.js";
  }

  else if (page === "tracker.html") {
    scriptPath = "pages/tracker-script.js";
  }

  else if (page === "trips.html") {
    scriptPath = "pages/trips-script.js";
  }

  else if (page === "about.html") {
    scriptPath = "pages/about-script.js";
  }

  // =============================
  // LOAD SCRIPT
  // =============================

  if (scriptPath !== "") {

    const script = document.createElement("script");

    script.src = scriptPath;

    script.className = "dynamic-page-script";

    document.body.appendChild(script);
  }
}


// =============================
// MENU
// =============================

function toggleMenu() {

  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("open");
  }
}


// =============================
// INITIAL PAGE LOAD
// =============================

document.addEventListener("DOMContentLoaded", function() {

  loadPage("home.html");

});


// =============================
// GLOBAL EXPORTS
// =============================

window.loadPage = loadPage;
window.toggleMenu = toggleMenu;