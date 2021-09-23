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

  const nameFilter = (input) => {
    const namesFiltered = unFilteredArray.filter((name) =>
      name.includes(input)
    );
    console.log(namesFiltered);
    //alert if nothing is in namesFiltered array
    if (namesFiltered.length === 0) {
      alert("Nothing matches!");
    }
    //if array contains results, set state
    else {
      setFilteredArray(namesFiltered);
    }
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        {JSON.stringify(unFilteredArray, null, 10)}
      </span>
      <input
        type="text"
        className="inputLine"
        value={userInput}
        onChange={({ target }) => {
          setUserInput(target.value);
        }}
      />
      <button
        className="confirmationButton"
        onClick={() => nameFilter(userInput)}
      >
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        {"Filtered Names: " + JSON.stringify(filteredArray, null, 10)}
      </span>
    </div>
  );
};

export default FilterString;
