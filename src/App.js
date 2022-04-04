import React from "react";
import "./App.css";
import allCountryScores from "./scores.js";
import CountryTables from "./CountryTables.js";

function App() {
  return (
    <div className="App">
      <table class="main-table">
        <tr>
          <th>
            <h1>High Scores per Country</h1>
          </th>
        </tr>
        <tr>
          <CountryTables data={allCountryScores} />
        </tr>
      </table>
    </div>
  );
}

export default App;
