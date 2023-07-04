import axios from "axios";
import React, { useState } from "react";

import "./Query.css";

const API_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = `dde669c54dbec53c562abad52d716702`;

const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = response.data;
  return data;
};

const Query = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(searchTerm);
      setWeatherData(data);
    } catch (error) {
      console.error("Error searching for weather data:", error);
      alert("No city with name " + searchTerm + ". Search something other.");
      setWeatherData(null);
    }
  };
  return (
    <div>
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter the city name here:"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <span class="box">Search</span>
        </button>
      </div>
      {weatherData && (
        <div className="WeatherCard">
          <p className="WeatherIcon">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <p className="Description">{weatherData.weather[0].description}</p>
          </p>
          <h3>{weatherData.name}</h3>
          <h6>{weatherData.sys.country}</h6>
          <p className="Temperature">Temperature: {weatherData.main.temp} °C</p>
          <p className="MinTemperature">
            Minimal temperature: {weatherData.main.temp_min} °C
          </p>
          <p className="MaxTemperature">
            Maximal temperature: {weatherData.main.temp_max} °C
          </p>
          <p className="Humidity">Humidity: {weatherData.main.humidity}%</p>

          <p className="Wind">Wind: {weatherData.wind.speed} m/s</p>
          <p className="Pressure">Pressure: {weatherData.main.pressure} mb</p>
        </div>
      )}
    </div>
  );
};

export default Query;
