function loadPage(page) {
  fetch("pages/" + page + "?v=" + Date.now())
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      window.scrollTo(0, 0);
      closeMenu();
    });
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("open");
}

/* LOAD HOME BY DEFAULT */
loadPage("home.html");