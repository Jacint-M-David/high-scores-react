import React from "react";
const ChangeButton = (props) => {
  const handleClick = () => {
    props.setIsWorldWideTable(!props.isWorldWideTable);
  };
  return (
    <button className="SortButton" onClick={handleClick}>
      Change View
    </button>
  );
};

export default ChangeButton;
