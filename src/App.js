import React from "react";
import TopicBrowser from "./components/TopicBrowser/TopicBrowser";
import EvenAndOdd from "./components/Topics/EvenAndOdd";
import FilterObject from "./components/Topics/FilterObject";
import FilterString from "./components/Topics/FilterString";
import Palindrome from "./components/Topics/Palindrome";
import Sum from "./components/Topics/Sum";

const App = () => {
  return (
    <div>
      <TopicBrowser />
      <EvenAndOdd />
      <FilterObject />
      <FilterString />
      <Palindrome />
      <Sum />
    </div>
  );
};

export default App;
