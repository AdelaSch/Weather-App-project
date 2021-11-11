let now = new Date();
let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let dateTime = document.querySelector("#current-date");
dateTime.innerHTML = `${day}, ${month} ${date} </br> ${hour}:${minute}`;

function displayForecast(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temp");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "82aab33db8911af682203374eb6fbc22";
let city = "bangkok";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayForecast);

// Changing today's icon according to the description
function showIcon(response) {
  let icon = document.querySelector("#main-icon");
  icon.setAttribute("src", `icons/${response.data.weather[0].icon}.png`);
}
