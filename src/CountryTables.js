import React from "react";
import CountryTable from "./CountryTable.js";
// import allCountryScores from "./scores.js";

let CountryTables = (props) => {
  return (
    <tr className="country-tables">
      <td>
        {props.data.map((country, index) => (
          <CountryTable countryData={country} key={index} order={props.order} />
        ))}
      </td>
    </tr>
  );
};

export default CountryTables;
