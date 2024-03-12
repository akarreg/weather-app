function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let timeElement = document.querySelector("#dayDate");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = `${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
  console.log(response.data);

  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
}

function searchCity(city) {
  let apiKey = "bc0c992ff01fe3156bt9ead9dob31418";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function citySubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySubmit);
searchCity("Bilbao");
