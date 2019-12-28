import React from "react";
import DirectionBox from "./DirectionBox";
import AnimatedWindows from "./AnimatedWindows";

class GuessApp extends React.Component {
  constructor() {
    super();
    this.state = {
      compGuess: Math.floor(Math.random() * 100 + 1)
    };

    console.log(this.state);
  }

  keyPressed = e => {
    if (e.key === "Enter") {
      console.log(e.target.value);

      let redWindow = document.getElementById("red-window");
      let blueWindow = document.getElementById("blue-window");

      if (
        e.target.value === this.state.value
        // e.target.value >= this.state.value - 10 ||
        // e.target.value <= this.state.value + 10
      ) {
        // add FULL points of opacity to blue window
        // red LESS points of opacity

        blueWindow.style.opacity = 0.2; //really .8
        redWindow.style.opacity = 1;

        console.log("Yes");
      } else {
        console.log("Try again");
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <h1>App</h1>
        <div>
          <h2>Guess A Number!</h2>
        </div>
        {/* Start Game Function and THEN create Form Component*/}
        <div className="input">
          <input
            type="number"
            name="input"
            onKeyPress={this.keyPressed}
          ></input>
        </div>
        <div>
          <DirectionBox />
        </div>
        <div className="windows">
          <div className="blue-window" id="blue-window"></div>
          <div className="red-window" id="red-window"></div>
          {/* <AnimatedWindows /> */}
        </div>
      </div>
    );
  }
}

export default GuessApp;

// somehow use setstate on input like I used onClick

// hitting enter is a key event

// set state based on logic
