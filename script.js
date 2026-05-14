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

      // =============================
      // LOAD PAGE-SPECIFIC SCRIPTS
      // =============================

      if (page === "calculator.html") {

        const oldScript =
          document.getElementById("calculatorScript");

        if (oldScript) {
          oldScript.remove();
        }

        const script =
          document.createElement("script");

        script.src =
          "pages/calculator-script.js?v=" + Date.now();

        script.id = "calculatorScript";

        document.body.appendChild(script);
      }

      if (page === "bonuses.html") {

        const oldScript =
          document.getElementById("bonusesScript");

        if (oldScript) {
          oldScript.remove();
        }

        const script =
          document.createElement("script");

        script.src =
          "pages/bonuses-script.js?v=" + Date.now();

        script.id = "bonusesScript";

        document.body.appendChild(script);
      }

      var menu =
        document.getElementById("menu");

      if (menu) {
        menu.classList.remove("open");
      }

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

    });
}


// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

  var menu =
    document.getElementById("menu");

  if (menu) {
    menu.classList.toggle("open");
  }
}


// =============================
// LOAD HOME PAGE
// =============================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadPage("home.html");

  }
);


// =============================
// GLOBAL EXPORTS
// =============================

window.loadPage =
  loadPage;

window.toggleMenu =
  toggleMenu;