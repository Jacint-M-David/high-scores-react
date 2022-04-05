import React from "react";
import ScoreRow from "./ScoreRow.js";

const CountryTable = (props) => {
  // SORT DATA IN DESCENDING ORDER
  const isDescendingOrder = props.order;
  if (isDescendingOrder) {
    props.countryData.scores.sort((scoreA, scoreB) => scoreB.s - scoreA.s);
  } else {
    props.countryData.scores.sort((scoreA, scoreB) => scoreA.s - scoreB.s);
  }
  return (
    <table className="country-table">
      <tbody>
        <tr>
          <th colSpan="2">
            <h2 className="countries-title">{`HIGH SCORES: ${props.countryData.name}`}</h2>
          </th>
        </tr>
        {props.countryData.scores.map((scores, index) => (
          <ScoreRow countryRow={scores} class="score-rows" key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
