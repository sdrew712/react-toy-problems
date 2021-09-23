import React, { useState } from "react";

let objArr = [
  { name: "Jimmy Joe", title: "Hack0r", age: 12 },
  { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
  { name: "Carly Armstrong", title: "CEO" },
];

const FilterObject = () => {
  const [unFilteredArray] = useState(objArr);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const objectFilterer = (input) => {
    let filteredObjects = objArr.filter((objArr) =>
      objArr.hasOwnProperty(input)
    );
    setFilteredArray(filteredObjects);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>FilterObject</h4>
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
        onClick={() => objectFilterer(userInput)}
      >
        Filter
      </button>
      <span className="resultsBox filterObjectRB">
        {"Filtered: " + JSON.stringify(filteredArray, null, 10)}
      </span>
    </div>
  );
};

export default FilterObject;
