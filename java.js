function infoSearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchCity.value;
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", infoSearch);

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={citi.name}&key={bc0c992ff01fe3156bt9ead9dob31418}";
