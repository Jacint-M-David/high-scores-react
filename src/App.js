import React, { useState } from "react";
import "./App.css";
import SortButton from "./SortButton.js";
import HighScoresPerCountry from "./HighScoresPerCountry.js";
import HighScoresWorldWide from "./HighScoresWorldWide";
import ChangeButton from "./ChangeButton";

function App() {
  const [descendingOrder, setDescendingOrder] = useState(true);
  const [isWorldWideTable, setIsWorldWideTable] = useState(true);
  const alphabeticalOrder = (data) => {
    return data.sort((countryA, countryB) => {
      return countryA.name > countryB.name ? 1 : -1;
    });
  };

  return (
    <div className="App">
      <nav className="nav">
        <ChangeButton
          isWorldWideTable={isWorldWideTable}
          setIsWorldWideTable={setIsWorldWideTable}
        />
        <SortButton order={descendingOrder} setOrder={setDescendingOrder} />
      </nav>
      {isWorldWideTable ? (
        <HighScoresWorldWide
          descendingOrder={descendingOrder}
          alphabeticalOrder={alphabeticalOrder}
          view={isWorldWideTable}
        />
      ) : (
        <HighScoresPerCountry
          descendingOrder={descendingOrder}
          alphabeticalOrder={alphabeticalOrder}
          view={isWorldWideTable}
        />
      )}
    </div>
  );
}

export default App;
