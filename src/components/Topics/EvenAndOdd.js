import React from "react";
import { useState } from "react";

const EvenAndOdd = () => {
  const evenArray = [];
  const oddArray = [];
  const [userInput, changeUserInput] = useState("");

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        type="text"
        className="inputLine"
        value={userInput}
        onChange={(evt) => changeUserInput(evt.target.value)}
      />
      <button className=""></button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  );
};

export default EvenAndOdd;
