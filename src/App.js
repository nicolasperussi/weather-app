import "./App.css";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Main from "./components/Main";
const api = {
  key: "9e9248777c9e4cc3b1123729211703",
  base: "https://api.weatherapi.com/v1/current.json?",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      console.log(query);
      fetch(`${api.base}key=${api.key}&q=${query}&lang=pt`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateSetter = (date) => {
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    let days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feita",
      "Sexta-feira",
      "Sábado",
    ];

    let weekday = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return `${weekday}, ${day} de ${month} de ${year}`;
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
            country={weather.location.country}
            weather={weather.current.condition.text}
            temp={weather.current.temp_c}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
