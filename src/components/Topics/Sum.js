import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input type="text" className="inputLine" />
      <input type="text" className="inputLine" />
      <button className="confirmationButton"></button>
      <span className="resultsBox"></span>
    </div>
  );
};

export default Sum;
