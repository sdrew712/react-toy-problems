import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

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
      <button
        className="confirmationButton"
        onClick={() => numberSorter(userInput)}
      >
        Split
      </button>
      <span className="resultsBox">
        {"Evens: " + JSON.stringify(evenArray, null, 10)}
      </span>
      <span className="resultsBox">
        {"Odds: " + JSON.stringify(oddArray, null, 10)}
      </span>
    </div>
  );
};

export default EvenAndOdd;
