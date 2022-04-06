import React from "react";

const ScoreRow = (props) => {
  return (
    <tr className="score-rows">
      <td className="td td-name">
        <span>{props.countryRow.n}</span>
      </td>
      <td className="td">
        <span className="points">{props.countryRow.s}</span>
      </td>
    </tr>
  );
};

export default ScoreRow;
