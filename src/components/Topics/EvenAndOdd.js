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
    let evenArr = [];
    const oddArr = [];

    numbers.forEach((element) => {
      const number = parseInt(element);

      if (isNaN(number)) {
        alert("idiot, that doesn't contain all numbers!");
        return;
      }
      if (number % 2 === 0) {
        evenArr.push(number + " ");
      } else {
        oddArr.push(number + " ");
      }
    });

    setEvenArray(evenArr);
    setOddArray(oddArr);
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
      <span className="resultsBox">{evenArray}</span>
      <span className="resultsBox">{oddArray}</span>
    </div>
  );
};

export default EvenAndOdd;
