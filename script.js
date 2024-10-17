const apiKey = 'ccd0af738ca3c1cbd35a366c56130660';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submit');
const cityNameElement = document.getElementById('city-name');
const weatherDescElement = document.getElementById('weather-desc');
const tempElement = document.getElementById('temp');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

submitButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
            const data = await response.json();
            const weatherData = data.weather[0];
            cityNameElement.textContent = data.name;
            weatherDescElement.textContent = weatherData.description;
            tempElement.textContent = `${data.main.temp}°C`;
            humidityElement.textContent = `${data.main.humidity}%`;
            windSpeedElement.textContent = `${data.wind.speed} m/s`;
        } catch (error) {
            console.error(error);
        }
    }
});