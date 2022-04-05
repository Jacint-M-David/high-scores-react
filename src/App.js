import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./scores.js";
import CountryTables from "./CountryTables.js";
import SortButton from "./SortButton.js";

function App() {
  const [descendingOrder, setDescendingOrder] = useState(true);
  const alphabeticalOrder = (data) => {
    return data.sort((countryA, countryB) => {
      return countryA.name > countryB.name ? 1 : -1;
    });
  };

  return (
    <div className="App">
      <SortButton order={descendingOrder} setOrder={setDescendingOrder} />
      <table className="main-table">
        <thead>
          <tr>
            <th>
              <h1>High Scores per Country</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <CountryTables
            data={alphabeticalOrder(allCountryScores)}
            order={descendingOrder}
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
