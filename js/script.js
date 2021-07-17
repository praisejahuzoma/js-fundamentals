window.addEventListener("DOMContentLoaded", () => {
  // a function that take the name of a city and returns the current temperature in degrees for that city
  let showWeather = (city) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68b75f7873d298a846526df53aa24454`
    )
      .then((res) => res.json())
      .then((data) => {
        let weather = data;
        let city = weather.name;
        let temperatureInCelsius = weather.main.temp - 273.15;
        let icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        const finalData = { city, temperatureInCelsius, icon };
        return finalData;
      });
  };

  const button = document.querySelector(".submitButton");
  const city = document.querySelector("#city");
  const temperature = document.querySelector(".weather-temperature");
  const weatherImage = document.querySelector(".weather-image");

  button.addEventListener("click", (e) => {
    let cityWeather = showWeather(city.value);
    cityWeather.then((data) => {
      temperature.innerText = `${data.temperatureInCelsius.toFixed(
        1
      )}${"\260"}c`;
      weatherImage.setAttribute("src", `${data.icon}`);
    });
  });
});

// copy right

const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;

// end of copy right
