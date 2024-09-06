function displayTemperature(response) {
  let temperatureValue = document.querySelector("#temperature-value");
  let temp = Math.round(response.data.temperature.current);
  temperatureValue.innerHTML = temp;
  let cityNameShow = document.querySelector("h1");
  cityNameShow.innerHTML = response.data.city;
}

function searchCityWeather(city) {
  let apiKey = "56aadbfcfa63b7ofa0333tf649578e7b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name-form");

  searchCityWeather(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
