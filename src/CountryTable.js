import React from "react";
import ScoreRow from "./ScoreRow.js";
import allCountryScores from "./scores.js";

const CountryTable = (props) => {
  // EXTRACT DATA FOR WORLD WIDE SCORE RENDERING
  // OUTPUT: ARRAY OF OBJECT WITH .S AND .N PROPERTIES
  console.log("allCountryScores: ", allCountryScores);
  const allScoresArrays = allCountryScores.map((countryObject) => [
    ...countryObject.scores,
  ]);
  console.log("allScoresArrays: ", allScoresArrays);
  const scoresArray = [];
  allScoresArrays.forEach((countryArrays) =>
    countryArrays.forEach((score) => scoresArray.push(score))
  );
  console.log("scoresArray: ", scoresArray);

  // SORT DATA IN DESCENDING ORDER
  const isDescendingOrder = props.order;
  const isWorldWideTable = props.view;
  if (isDescendingOrder) {
    props.countryData.scores.sort((scoreA, scoreB) => scoreB.s - scoreA.s);
    scoresArray.sort((scoreA, scoreB) => scoreB.s - scoreA.s);
  } else {
    props.countryData.scores.sort((scoreA, scoreB) => scoreA.s - scoreB.s);
    scoresArray.sort((scoreA, scoreB) => scoreA.s - scoreB.s);
  }
  console.log("props.countryData: ", props.countryData);
  return (
    <table className="country-table">
      <tbody>
        {isWorldWideTable ? null : (
          <tr>
            <th colSpan="2">
              <h2 className="countries-title">
                {`HIGH SCORES: ${props.countryData.name}`}
              </h2>
            </th>
          </tr>
        )}
        {isWorldWideTable
          ? scoresArray.map((scores, index) => (
              <ScoreRow
                countryRow={scores}
                class="score-rows"
                key={index}
                isWorldWideTable={isWorldWideTable}
              />
            ))
          : props.countryData.scores.map((scores, index) => (
              <ScoreRow
                countryRow={scores}
                class="score-rows"
                key={index}
                isWorldWideTable={isWorldWideTable}
              />
            ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
