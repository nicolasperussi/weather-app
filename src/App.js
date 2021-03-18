import "./App.css";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
const api = {
  key: "9e9248777c9e4cc3b1123729211703",
  base: "https://api.weatherapi.com/v1/forecast.json?",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      console.log(query);
      fetch(`${api.base}key=${api.key}&q=${query}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateSetter = () => {
    let date = new Date().toLocaleString("en-US", {
      timeZone: `${weather.location.tz_id}`,
    });

    date = Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));

    date = date.charAt(0).toUpperCase() + date.slice(1);

    let time = new Date(weather.location.localtime).toLocaleTimeString();

    return {
      date: date,
      hora: time,
    };
  };

  return (
    <div
      className={
        typeof weather.current != "undefined"
          ? weather.current.temp_c > 16
            ? "App warm"
            : "App cold"
          : "App"
      }
    >
      <main className="main">
        <SearchBox setQuery={setQuery} value={query} onKeyPress={search} />
        {typeof weather.current != "undefined" ? (
          <Main
            dateSetter={dateSetter}
            city={weather.location.name}
            region={weather.location.region}
            country={weather.location.country}
            weather={weather.current.condition.text}
            temp={weather.current.temp_c}
            weatherIcon={weather.current.condition.icon}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
