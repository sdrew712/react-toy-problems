import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState("");

  const sumNumbers = (num1, num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    const numSum = num1 + num2;
    setSum(numSum);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        type="number"
        className="inputLine"
        value={number1}
        onChange={({ target }) => {
          setNumber1(target.value);
        }}
      />
      <input
        type="number"
        className="inputLine"
        value={number2}
        onChange={({ target }) => {
          setNumber2(target.value);
        }}
      />
      <button
        className="confirmationButton"
        onClick={() => sumNumbers(number1, number2)}
      >
        Add
      </button>
      <span className="resultsBox">{"Sum: " + sum}</span>
    </div>
  );
};

export default Sum;
