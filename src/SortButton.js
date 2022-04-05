import React from "react";
const SortButton = (props) => {
  const handleClick = () => {
    props.setOrder(!props.order);
  };
  return <button onClick={handleClick}>Sort Scores</button>;
};

export default SortButton;
