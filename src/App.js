import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          Created with love by Nokuthaba Siphambili and is
          <a
            href="https://github.com/Mola26/react-weather-app"
            target="_blank"
            rel=" noopener noreferrer"
          >
            {" "}
            open soured on Github.
          </a>
          <a
            href="https://unique-liger-acc4ec.netlify.app/"
            target="_blank"
            rel=" noopener noreferrer"
          >
            and hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
