import React, { useState } from "react";
import "../styles/Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (city === "") return;

    const apiKey = "115f36e6f70d60b68ccc3f8624793acd";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    setWeather(data);
  };

  return (
    <div className="weather-container">

      {/* Snowfall */}
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>

      {/* Weather Box */}
      <div className="weather-box">

        <h1>Weather App</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={getWeather}>
            Search
          </button>

        </div>

        {weather && weather.main && (
          <div className="weather-info">

            <h2>{weather.name}</h2>

            <h3>
              {weather.main.temp}°C
            </h3>

            <p>
              {weather.weather[0].main}
            </p>

            <p>
              Humidity: {weather.main.humidity}%
            </p>

            <p>
              Wind Speed: {weather.wind.speed} km/h
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default Weather;