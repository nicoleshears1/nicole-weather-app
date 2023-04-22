let now = new Date();

let h2 = document.querySelector("h2");

let minutes = now.getMinutes();
let hours = now.getHours();
let day = now.getDay();
let date = now.getDate();

if (day === 1) {
  day = "Mon";
}

if (day === 2) {
  day = "Tue";
}
if (day === 3) {
  day = "Wed";
}

if (day === 4) {
  day = "Thur";
}
if (day === 5) {
  day = "Fri";
}

if (day === 6) {
  day = "Sat";
}

if (day === 0) {
  day = "Sun";
}

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "june",
  "July",
  "Aug",
  "Sept",
  "oct",
  "Nov",
  "dec",
];
let month = months[now.getMonth()];

h2.innerHTML = `${day} - ${date} ${month} - ${hours}:${minutes} `;

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#large-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current_description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#feels").innerHTML = response.data.main.feels_like;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  let apiKey = "89ffd967f0474114defc60b928437805";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

function searchLocation(position) {
  let apiKey = "89ffd967f0474114defc60b928437805";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let fahrenheitlink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayFahrenheitTemperature);

let celsiulink = document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click", displayFahrenheitTemperature);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  alert("link clicked");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#large-temp");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
