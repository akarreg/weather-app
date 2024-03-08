function infoSearch(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-city");
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = searchCity.value;
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", infoSearch);
