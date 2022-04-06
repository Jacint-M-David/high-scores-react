import React from "react";
import allCountryScores from "./scores.js";
import CountryTables from "./CountryTables.js";

const HighScoresWorldWide = (props) => {
  return (
    <table className="main-table">
      <thead>
        <tr>
          <th>
            <h1>High Scores World Wide</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <CountryTables
          data={props.alphabeticalOrder(allCountryScores)}
          order={props.descendingOrder}
          view={props.view}
        />
      </tbody>
    </table>
  );
};

export default HighScoresWorldWide;
