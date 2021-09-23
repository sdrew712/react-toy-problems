import React, { useState, useEffect } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  console.log({ evenArray });

  // useEffect(() => {
  //   if (userInput.length > 5) {
  //     console.log(userInput);
  //   }
  // }, [userInput]);

  const numberSorter = (input) => {
    const numbers = input.split(", ");
    const evenArr = [];
    const oddArr = [];

    numbers.forEach((element) => {
      const number = parseInt(element);

      if (isNaN(number)) {
        alert("idiot, that doesn't contain all numbers!");
        return;
      }
      if (number % 2 === 0) {
        evenArr.push(number);
      } else {
        oddArr.push(number);
      }
    });

    setEvenArray(evenArr);
    console.log(evenArr);
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        type="text"
        className="inputLine"
        value={userInput}
        onChange={({ target }) => {
          setUserInput(target.value);
        }}
      />
      <button className="" onClick={() => numberSorter(userInput)}>
        Split
      </button>
      <span className="resultsBox"></span>
      <span className="resultsBox"></span>
    </div>
  );
};

export default EvenAndOdd;
