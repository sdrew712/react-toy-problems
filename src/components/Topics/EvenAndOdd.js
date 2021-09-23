import React from "react";

const EvenAndOdd = () => {
  const evenArray = [];
  const oddArray = [];
  let userInput = "";

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input type="text" className="inputLine" />
      <button className=""></button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  );
};

export default EvenAndOdd;
