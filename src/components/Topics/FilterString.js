import React, { useState } from "react";

let namesArr = [
  "James",
  "Jessica",
  "Melody",
  "Tyler",
  "Blake",
  "Jennifer",
  "Mark",
  "Maddy",
];

const FilterString = () => {
  const [unFilteredArray] = useState(namesArr);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText"></span>
      <input
        type="text"
        className="inputLine"
        value={userInput}
        onChange={({ target }) => {
          setUserInput(target.value);
        }}
      />
      <button className="confirmationButton"></button>
      <span className="resultsBox filterStringRB"></span>
    </div>
  );
};

export default FilterString;
