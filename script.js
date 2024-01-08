function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;
    const apiKey = '4e855887cdc0c41509588f9a5ef5de57';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '';
  
    const location = data.name;
    const currentTemp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].main;
  
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
  
    const locationElement = document.createElement('p');
    locationElement.className = 'weather-card__title';
    locationElement.textContent = `Location: ${location}`;
  
    const tempElement = document.createElement('p');
    tempElement.className = 'weather-card__content';
    tempElement.textContent = `Temperature: ${currentTemp}°C`;
  
    const humidityElement = document.createElement('p');
    humidityElement.className = 'weather-card__content';
    humidityElement.textContent = `Humidity: ${humidity}%`;
  
    const conditionElement = document.createElement('p');
    conditionElement.className = 'weather-card__content';
    conditionElement.textContent = `Condition: ${condition}`;
  
    weatherCard.appendChild(locationElement);
    weatherCard.appendChild(tempElement);
    weatherCard.appendChild(humidityElement);
    weatherCard.appendChild(conditionElement);
  
    weatherInfo.appendChild(weatherCard);
  }
  