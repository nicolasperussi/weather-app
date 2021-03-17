import React from "react";

const Main = ({ dateSetter, city, country, weather, temp }) => {
  let temperature = Math.round(temp).toString();
  temperature = temperature.substring(0, 2);

  return (
    <div className="content">
      <h3 className="city">
        {city}, {country}
      </h3>
      <h4 className="date">{dateSetter(new Date())}</h4>
      <h1 className="temperature">{temperature} °C</h1>
      <h3 className="weather">{weather}</h3>
    </div>
  );
};

export default Main;
