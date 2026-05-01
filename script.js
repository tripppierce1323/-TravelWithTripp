function toggleMenu() {
  document.getElementById("menu").classList.toggle("open");
}

function loadPage(page) {
  fetch("pages/" + page + "?v=" + Date.now())
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      document.getElementById("menu").classList.remove("open");
      window.scrollTo(0, 0);
    });
}

window.onload = () => {
  loadPage("home.html");
};