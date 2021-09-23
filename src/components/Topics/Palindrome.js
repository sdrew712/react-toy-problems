import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const checkPalindrome = (input) => {
    let isPalindrome = false;

    //create array of inputted text
    const normalStringArr = input.toLowerCase().split("");

    //create reversed array of inputted text
    const reversedStringArr = [...normalStringArr].reverse();

    //make the two arrays strings to compare
    const normalString = normalStringArr.join();
    const reversedString = reversedStringArr.join();

    //if they are equal then it is a palindrome
    if (normalString === reversedString) {
      isPalindrome = true;
    }

    setPalindrome(JSON.stringify(isPalindrome));
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
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
        onClick={() => checkPalindrome(userInput)}
      >
        Check
      </button>
      <span className="resultsBox">{"Palindrome: " + palindrome}</span>
    </div>
  );
};

export default Palindrome;
