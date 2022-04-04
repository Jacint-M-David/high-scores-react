import React from "react";

const ScoreRow = (props) => {
  return (
    <tr class="score-rows">
      <td class="td">
        <span>{props.countryRow.n}</span>
      </td>
      <td class="td">
        <span class="points">{props.countryRow.s}</span>
      </td>
    </tr>
  );
};

export default ScoreRow;
