import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

// ## Goal 1: Render the answer choices from sample_data.json on the screen.

// - [x] In App.jsx, create an Answer component.
// - [x] Add props to `<Answer />` with the text "Answer goes here".
// - [x] Render `<Answer />` inside of `<Question />`.
//  - [ ] Pass props for the answer choices into `<Question />`.
//  - [ ] Use those props to render the Answer components inside `<Question />` to display the answer choices.
// - [ ] Refactor to use map to map over all answer choices.
function Question(props) {
  return (
    <div>
      <p> {props.text} </p>
      <Answer text={"answer A"} />
      <Answer text={"answer B"} />
      <Answer text={"answer C"} />
    </div>
  );
}

function App() {
  let currentquestion = 0;
  return (
    <div className="app">
      <Question
        text={data[currentquestion].question.choices}
        choices={data[currentquestion].question.choices}
      />
      <NextQuestion />
    </div>
  );
}

function NextQuestion() {
  return (
    <div className="app">
      <button>A BUTTON! (next question)</button>
    </div>
  );
}
function Answer(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}
export default App;

// import React from "react";

// function GreetByName(props) { <- Accepting and using props

// return <div>Hello {props.name}!</div>;
// }

// function App() {
// return (
// <div className="App">
// 		<GreetByName name="Jared" /> <- Passing a prop "name" with value "Jared"
// </div>
// );
// }

// export default App;
