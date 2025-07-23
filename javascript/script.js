const searchIcon = document.getElementById("searchIcon");
const searchBox = document.querySelector(".search-box");
const searchCloseBtn = document.getElementById("searchCloseBtn");

searchIcon.addEventListener("click", function (e) {
  e.preventDefault();
  searchBox.classList.toggle("d-none");
  setTimeout(() => {
    searchBox.classList.toggle("active");
  }, 10);
});

searchCloseBtn.addEventListener("click", function () {
  searchBox.classList.remove("active");
  setTimeout(() => {
    searchBox.classList.add("d-none");
  }, 300);
});

