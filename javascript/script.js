const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBoxWrapper");

searchIcon.addEventListener("click", function (e) {
  e.preventDefault();
  searchBox.classList.toggle("d-none");
});

