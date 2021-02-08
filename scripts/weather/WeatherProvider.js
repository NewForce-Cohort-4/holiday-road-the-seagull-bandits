import { settings } from "../Settings.js";
`api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={API key}`;

let weather = {};

// transforms unix UTC to EST
const buildDate = (unix) => {
  let millisecs = unix * 1000;
  let dateObject = new Date(millisecs)
  return dateObject.toLocaleString("en-US", {weekday: "long"})
}

// Fetches weather data
export const getWeather = (lat, long) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&appid=${settings.weatherKey}&units=imperial`
  )
    .then((response) => response.json())
    .then((parsedWeather) => {
      weather = parsedWeather;
    });
};

const weatherContainer = document.querySelector("#weather-container");

// Prints weather to DOM
export const weatherList = (lat,long) => {;
  getWeather(lat, long).then(()=> {
    let weatherHTMLString = "";
    weatherHTMLString = buildWeatherString(weather);
    weatherContainer.innerHTML = weatherHTMLString;
  })
};


const buildWeatherString = (weatherObject) => {
  return `
  
    <div class="card">
    <h3 class="card-title weather-day">${buildDate(weatherObject.daily[1].dt)}</h3>
    <img src="http://openweathermap.org/img/wn/${
      weatherObject.daily[1].weather[0].icon
    }@2x.png" class="card-img-top">
    <p class="card-text"><strong>Forecast: </strong>${
      weatherObject.daily[1].weather[0].description
    }</p>
    <p class="card-text"><strong>High:</strong> ${weatherObject.daily[1].temp.max}&deg;</p>
    <p class="card-text"><strong>Low:</strong> ${weatherObject.daily[1].temp.min}&deg;</p>
    </div>
  

  
    <div class="card">
    <h3 class="card-title weather-day">${buildDate(weatherObject.daily[2].dt)}</h3>
    <img src="http://openweathermap.org/img/wn/${
      weatherObject.daily[2].weather[0].icon
    }@2x.png" class="card-img-top">
    <p class="card-text"><strong>Forecast: </strong>${
      weatherObject.daily[2].weather[0].description
    }</p>
    <p class="card-text"><strong>High:</strong> ${weatherObject.daily[2].temp.max}&deg;</p>
    <p class="card-text"><strong>Low:</strong> ${weatherObject.daily[2].temp.min}&deg;</p>
    </div>
  

  
    <div class="card">
    <h3 class="card-title weather-day">${buildDate(weatherObject.daily[3].dt)}</h3>
    <img src="http://openweathermap.org/img/wn/${
      weatherObject.daily[3].weather[0].icon
    }@2x.png" class="card-img-top">
    <p class="card-text"><strong>Forecast: </strong>${
      weatherObject.daily[3].weather[0].description
    }</p>
    <p class="card-text"><strong>High:</strong> ${weatherObject.daily[3].temp.max}&deg;</p>
    <p class="card-text"><strong>Low:</strong> ${weatherObject.daily[3].temp.min}&deg;</p>
    </div>
  

  
    <div class="card">
    <h3 class="card-title weather-day">${buildDate(weatherObject.daily[4].dt)}</h3>
    <img src="http://openweathermap.org/img/wn/${
      weatherObject.daily[4].weather[0].icon
    }@2x.png" class="card-img-top">
    <p class="card-text"><strong>Forecast: </strong>${
      weatherObject.daily[4].weather[0].description
    }</p>
    <p class="card-text"><strong>High:</strong> ${weatherObject.daily[4].temp.max}&deg;</p>
    <p class="card-text"><strong>Low:</strong> ${weatherObject.daily[4].temp.min}&deg;</p>
    </div>
  

  
    <div class="card">
    <h3 class="card-title weather-day">${buildDate(weatherObject.daily[5].dt)}</h3>
    <img src="http://openweathermap.org/img/wn/${
      weatherObject.daily[5].weather[0].icon
    }@2x.png" class="card-img-top">
    <p class="card-text"><strong>Forecast: </strong>${
      weatherObject.daily[5].weather[0].description
    }</p>
    <p class="card-text"><strong>High:</strong> ${weatherObject.daily[5].temp.max}&deg;</p>
    <p class="card-text"><strong>Low:</strong> ${weatherObject.daily[5].temp.min}&deg;</p>
    </div>
  
  `;
};
// "";