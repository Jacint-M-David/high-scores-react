import React from "react";
import ScoreRow from "./ScoreRow.js";

const CountryTable = (props) => {
  return (
    <table class="country-table">
      <tr>
        <th colspan="2">
          <h2 class="countries-title">{`HIGH SCORES: ${props.countryData.name}`}</h2>
        </th>
      </tr>
      {props.countryData.scores.map((scores) => (
        <ScoreRow countryRow={scores} class="score-rows" />
      ))}
    </table>
  );
};

export default CountryTable;
