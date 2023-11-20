// Fetch weather data and update the UI
async function fetchWeatherData() {
    const SicaPeopleGotTHEKEY = 'de27e7549c5e257114ec8baef704d72f';
    const city = 'Indore';
    const apiUrl = `http://api.weatherstack.com/current?access_key=${SicaPeopleGotTHEKEY}&query=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Error fetching weather data.');
        }

        const chancesOfFlood = (Math.random() * 100).toFixed(2);
        const rainData = "Abhi nahi mil rha , pta nahi kyu! 😭";
        const temperature = data.current.temperature;
        const waterLoggingChances = Math.random() < 0.5 ? "Low" : "High";
        const windSpeed = data.current.wind_speed;
        const visibility = data.current.visibility; // Adding visibility
        const aqi = calculateAQI(); // Placeholder for AQI

        // Update UI elements
        document.getElementById('flood-chances').textContent = `${chancesOfFlood}%`;
        document.getElementById('rain-data').textContent = rainData;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('water-logging').textContent = waterLoggingChances;
        document.getElementById('wind-speed').textContent = windSpeed;
        document.getElementById('visibility').textContent = visibility;
        document.getElementById('aqi').textContent = aqi;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle errors and update UI accordingly
    }
}

// Placeholder function to calculate AQI (Air Quality Index)
function calculateAQI() {
    // Placeholder value for AQI
    return Math.floor(Math.random() * 200);
}

// Leaflet map initialization with high-quality images

// Fetch weather data and update the UI
fetchWeatherData();
