import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          Created with love by Nokuthaba Siphambili {""}
          <a
            href="https://unique-liger-acc4ec.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Mola26/react-weather-app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            open soured on Github. {""}
          </a>
        </footer>
      </div>
    </div>
  );
}
