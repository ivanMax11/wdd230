const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?";

const latitude = "49.7579";
const longitude = "6.6412";

const apiKey = "b59d5ba40f77389b41fa233cc0b66dc1"; // Reemplaza "tu_clave_de_api" con tu propia clave de API de OpenWeatherMap

const queryParams = `lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url + queryParams);

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      currentTemp.textContent = data.main.temp;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      captionDesc.textContent = data.weather[0].description;

    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();
