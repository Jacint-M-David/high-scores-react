import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable.js";
// import allCountryScores from "./scores.js";

let CountryTables = (props) => {
  return (
    <table class="country-tables">
      {props.data.map((country) => (
        <CountryTable countryData={country} />
      ))}
    </table>
  );
};

export default CountryTables;
