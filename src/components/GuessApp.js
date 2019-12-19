import React from "react";
import DirectionBox from "./DirectionBox";
import AnimatedWindows from "./AnimatedWindows";

class GuessApp extends React.Component {
  constructor() {
    super();
    this.state = { compGuess: Math.floor(Math.random() * 100 + 1) };
    console.log(this.state);
  }
  render() {
    return (
      <div className="main-container">
        <h1>App</h1>
        <div>
          <h2>Guess A Number!</h2>
        </div>
        {/* Start Game Function and THEN create Form Component*/}
        <div className="input">
          <input type="number" name="input"></input>
        </div>
        <div>
          <DirectionBox />
        </div>
        <div className="windows">
          <AnimatedWindows />
        </div>
      </div>
    );
  }
}

export default GuessApp;

// somehow use setstate on input like I used onClick

// hitting enter is a key event

// set state based on logic
