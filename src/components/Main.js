import React from "react";

const Main = ({
  dateSetter,
  city,
  region,
  country,
  weather,
  weatherIcon,
  temp,
}) => {
  temp = temp.toFixed(0);
  return (
    <div className="mainContent">
      <div className="location">
        <h3 className="city">{city}</h3>
        <h3 className="region">{region}</h3>
        <h3 className="country">{country}</h3>
        <h4 className="date">{dateSetter().date}</h4>
        <h4 className="time">{dateSetter().time}</h4>
      </div>
      <div className="separator" />
      <div className="tempWrapper">
        <div className="temperature">{temp} °C</div>
        <div className="weatherWrapper">
          <img className="weatherIcon" src={weatherIcon} alt={weather} />
          <h3 className="weather">{weather}</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
