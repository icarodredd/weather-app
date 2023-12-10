const apiKey = "lggfV8VXJWHnAYcHZKDEr1H1ivLx2DZy";
const apiKey2 = "5a15c0c07481e9e769685d8376cf6569";

const btnSearch = $("#search");
const input = $("#input");
const city = $("#city");
const temperature = $("#celsius");
const humidity = $("#humidity");
const typeOfWeather = $("#type-of-weather");
const img = $("#image");

const changeImg = async (weather) => {
  if (weather === "Clear") {
    img.attr("src", "./images/sun.svg");
  } else if (weather === "Clouds") {
    img.attr("src", "./images/cloudy.svg");
  }
};

const ShowData = async (data1, data2) => {
  console.log(data1);
  console.log(data2);
  city.text(data1.location.name);
  const temp = Math.round(data1.data.values.temperature);
  temperature.text(temp + "ºC");
  humidity.text(`Umidade: ${data1.data.values.humidity} %`);
  const weather = data2.weather[0].main;
  typeOfWeather.text(weather);
  changeImg(weather);
};

const weatherData = async (typedCity) => {
  const apiURL1 = `https://api.tomorrow.io/v4/weather/realtime?location=${typedCity}&apikey=${apiKey}&units=metric&lang=en`;
  const apiURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${typedCity}&appid=${apiKey2}&units=metric&lang=en`;
  const res1 = await fetch(apiURL1);
  const res2 = await fetch(apiURL2);
  const data1 = await res1.json();
  const data2 = await res2.json();
  ShowData(data1, data2);
};

btnSearch.on("click", () => {
  const typedCity = input.val();
  weatherData(typedCity);
});
