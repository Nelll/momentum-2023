const API_KEY = "54403af34a8cc79b1c18ce4cb3a2fcaa";
const weather_column = document.getElementById("weather");
const loginFormWeather = document.querySelector("#Login-form");

const HIDDEN_CLASSNAME_WEATHER = "hidden";
const USERNAME_KEY_WEATHER = "username";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:nth-child(2)");
    const temp = document.querySelector("#weather span:nth-child(3)");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = `${data.main.temp.toFixed(1)}°`;
  });
}
function onGeoError(error) {
  alert("Error occurred. Error code: " + error.code);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


function onWeatherSubmit(event) {
  weather_column.classList.remove(HIDDEN_CLASSNAME_WEATHER);
}

const savedUsernameWeather = localStorage.getItem(USERNAME_KEY_WEATHER);

if(savedUsernameWeather === null){
  weather_column.classList.add(HIDDEN_CLASSNAME_WEATHER);
  loginFormWeather.addEventListener("submit", onWeatherSubmit);
}else {
weather_column.classList.remove(HIDDEN_CLASSNAME_WEATHER);
}