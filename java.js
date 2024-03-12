function searchCity(city) {
  let apiKey = "bc0c992ff01fe3156bt9ead9dob31418";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}

function citySubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySubmit);
