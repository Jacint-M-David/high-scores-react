import React from "react";
const SortButton = (props) => {
  const handleClick = () => {
    props.setOrder(!props.order);
  };
  return (
    <button className="SortButton" onClick={handleClick}>
      Sort Scores
    </button>
  );
};

export default SortButton;
