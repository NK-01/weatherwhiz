import { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weatherReport, setWeatherReport] = useState({});
  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeatherReport(response) {
    setWeatherReport({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed * 3.6,
      humidity: response.data.main.humidity,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
    let apiKey = "b20ecfd3dab44a1228a1285e56521d52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherReport);
  }

  let showForm = (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {showForm}
        <ul>
          <li>Temperature: {Math.round(weatherReport.temperature)}°C</li>
          <li>Description: {weatherReport.description}</li>
          <li>Humidity: {weatherReport.humidity}%</li>
          <li>Wind: {Math.round(weatherReport.wind)}km/h</li>
          <li>
            <img src={weatherReport.iconURL} alt={weatherReport.description} />
          </li>
        </ul>
      </div>
    );
  } else return showForm;
}
