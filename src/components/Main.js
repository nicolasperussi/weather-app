import React from "react";

const Main = ({ dateSetter, city, country, weather, weatherIcon, temp }) => {
  let temperature = Math.round(temp).toString();
  temperature = temperature.substring(0, 2);

  return (
    <div className="mainContent">
      <div className="location">
        <h3 className="city">{city}</h3>
        <h3 className="country">{country}</h3>
        <h4 className="date">{dateSetter(new Date())}</h4>
      </div>
      <div className="separator" />
      <div className="tempWrapper">
        <div className="temperature">{temperature} °C</div>
        <div className="weatherWrapper">
          <img className="weatherIcon" src={weatherIcon} alt={weather} />
          <h3 className="weather">{weather}</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
