import React from "react";
import CountryTable from "./CountryTable.js";

let CountryTables = (props) => {
  return (
    <tr className="country-tables">
      <td>
        {props.view ? (
          <CountryTable
            order={props.order}
            view={props.view}
            countryData={props.data[0]}
          />
        ) : (
          props.data.map((country, index) => (
            <CountryTable
              countryData={country}
              key={index}
              order={props.order}
              view={props.view}
            />
          ))
        )}
      </td>
    </tr>
  );
};

export default CountryTables;
