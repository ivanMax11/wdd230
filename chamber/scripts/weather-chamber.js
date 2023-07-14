// To get the weather 
const api_key = "b59d5ba40f77389b41fa233cc0b66dc1";
const city = "Santiago del Estero";

const getWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const renderWeather = (data) => {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const windChill = data.main.windchill;

  const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.querySelector(".weather h2").textContent = "Weather in Santiago del Estero";
  document.querySelector(".weather").innerHTML += `
    <p><img src="${icon}" alt="${description}"> ${temperature}°C</p>
    <p style="text-align: left; margin-left: 55px;">${description}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind chill: ${windChill}°C</p>
  `;
};
getWeather().then(renderWeather);
