function displayTemperature(response) {
  let temperatureValue = document.querySelector("#temperature-value");
  let temp = Math.round(response.data.temperature.current);
  temperatureValue.innerHTML = temp;
  let cityNameShow = document.querySelector("h1");
  cityNameShow.innerHTML = response.data.city;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = response.data.condition.description;
  let weatherHumidity = document.querySelector("#humidity");
  weatherHumidity.innerHTML = `Humidity:${response.data.temperature.humidity}%`;
  let weatherWind = document.querySelector("#wind");
  weatherWind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  time.innerHTML = formatDate(date);
  let weatherIcon = document.querySelector("#icon");
  weatherIcon.innerHTML = ` <img src="${response.data.condition.icon_url}"></img>`;
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
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

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];

  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHtml +
      `
      <div class="forecast">
          <div class="weather-forecast-day">${day}</div>
      <div class="weather-forecast-icon"> ⛅</div>
      <div class="weather-forecast-temperatures">
         <div class="max-temperature">15℃</div>  
         <div class="min-temperature">9℃</div>
        </div>
      </div>
      `;
  });

  forecastElement.innerHTML = forecastHtml;
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];

  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="forecast">
          <div class="weather-forecast-day">${day}</div>
      <div class="weather-forecast-icon"> ⛅</div>
      <div class="weather-forecast-temperatures">
         <div class="max-temperature">15℃</div>  
         <div class="min-temperature">9℃</div>
        </div>
      </div>
      `;
  });

  forecastElement.innerHTML = forecastHtml;
}
displayForecast();
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
