import { settings } from "../Settings.js";
`api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={API key}`;

let weather = {};

export const getWeather = (lat, long) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${settings.weatherKey}&units=imperial`
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather;
      console.log(weather)
    });
};



const weatherContainer = document.querySelector("#weather-container");
export const weatherList = (lat,long) => {;
  getWeather(lat, long).then(()=> {
    let weatherHTMLString = "";
    weatherHTMLString = buildWeatherString(weather);
    weatherContainer.innerHTML = weatherHTMLString;


  })
};

const buildWeatherString = (weatherObject) => {
  return `
  <p>${weatherObject.daily[0].dt.toLocaleString()}</p>
  `;
};