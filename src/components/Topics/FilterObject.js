import React, { useState, useEffect } from "react";

const objArr = [
  { name: "Jimmy Joe", title: "Hack0r", age: 12 },
  { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
  { name: "Carly Armstrong", title: "CEO" },
];

const FilterObject = () => {
  const [unFilteredArray, setUnFilteredArray] = useState(objArr);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>FilterObject</h4>
      <span className="puzzleText"></span>
      <input type="text" className="inputLine" />
      <button className="confirmationButton">Filter</button>
      <span className="resultsBox filterObjectRB"></span>
    </div>
  );
};

export default FilterObject;
