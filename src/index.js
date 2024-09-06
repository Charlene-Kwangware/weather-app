function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name-form");
  let cityNameShow = document.querySelector("h1");
  cityNameShow.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
