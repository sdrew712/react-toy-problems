import React from "react";
import EvenAndOdd from "./components/Topics/EvenAndOdd";
import FilterObject from "./components/Topics/FilterObject";
import FilterString from "./components/Topics/FilterString";
import Palindrome from "./components/Topics/Palindrome";
import Sum from "./components/Topics/Sum";

const App = () => {
  return (
    <div>
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </div>
  );
};

export default App;
