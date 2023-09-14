import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <button>Hello</button>
        <footer>
          Created with love by Nokuthaba Siphambili and is
          <a
            href="https://github.com/Mola26/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open soured on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
