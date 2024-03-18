function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city-name");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let timeElemet = document.querySelector("#dayDate");
  let date = new Date(response.data.time * 1000);
  timeElemet.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = ` <img src= "${response.data.condition.icon_url}"class="emoji"/>`;

  descriptionElement.innerHTML = response.data.condition.description;

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
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
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
function getForecast(city) {
  let apiKey = "bc0c992ff01fe3156bt9ead9dob31418";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}& unit=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];

  let forecastHtml = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
  <div class="forecast-weather">
  <div class="forecast-date"> ${formatDay(day.time)}
  </div>
  <div class=" forecast-icon">
    
    <img src="${day.condition.icon_url}" alt="" width="45px"/>
</div>
   
<div class="forecast-temp">
  <span class="high-temp"> ${Math.round(day.temperature.maximum)}˚ </span>    
<span class="low-temp"> ${Math.round(day.temperature.minimum)}˚</span>
 </div>
</div>
`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySubmit);
searchCity("Bilbao");

displayForecast();
