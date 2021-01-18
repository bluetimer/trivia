import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

// ### Goal 2: Render a "Next Question" button on the screen.

// - [ ] In App.jsx, create a NextQuestion component.
// - [ ] Write the JSX to display a button for the user to click for the next question. (It will not work yet.)
// - [ ] Render `<NextQuestion />` inside of App.
function Question(props) {
  return <p> {props.text} </p>;
}

function App() {
  let currentquestion = 0;
  return (
    <div className="app">
      <Question text={data[currentquestion].question.text} />
    </div>
  );
}
export default App;
