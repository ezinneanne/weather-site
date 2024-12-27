document.getElementById("get-weather").addEventListener("click", () => {
    const state = document.getElementById("state-input").value.trim();
  
    if (!state) {
      alert("Please enter a state name.");
      return;
    }
  
    const apiKey = "your_api_key"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Unable to fetch weather data. Please check the state name.");
        }
        return response.json();
      })
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const city = data.name;
        const country = data.sys.country;
  
        document.getElementById("weather-result").innerHTML = `
          <p><strong>Location:</strong> ${city}, ${country}</p>
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Weather:</strong> ${weatherDescription}</p>
        `;
      })
      .catch(error => {
        document.getElementById("weather-result").innerHTML = `
          <p style="color: red;">${error.message}</p>
        `;
      });
  });
  