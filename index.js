const apiKey = "lggfV8VXJWHnAYcHZKDEr1H1ivLx2DZy";
const btnSearch = $("#search");
const input = $("#input");
const city = $("#city");
const temperature = $("#celsius");

const ShowData = async (data) => {
  console.log(data);
  city.text(data.location.name);
  const temp = Math.round(data.data.values.temperature);
  temperature.text(temp + "ºC");
};

const weatherData = async (typedCity) => {
  const apiURL = `https://api.tomorrow.io/v4/weather/realtime?location=${typedCity}&apikey=${apiKey}&units=metric&lang=pt_br`;
  const res = await fetch(apiURL);
  const data = await res.json();
  ShowData(data);
};

btnSearch.on("click", () => {
  const typedCity = input.val();
  console.log(typedCity);
  weatherData(typedCity);
});
