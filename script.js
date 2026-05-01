function loadPage(page) {
  fetch('pages/' + page)
    .then(res => res.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    });
}

// Load home page by default
window.onload = () => loadPage('home.html');