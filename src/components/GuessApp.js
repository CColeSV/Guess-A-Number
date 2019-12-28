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
      e.preventDefault();
      console.log("Guess = ", e.target.value);

      console.log("Random Number = ", this.state.compGuess);

      let redWindow = document.getElementById("red-window");
      let blueWindow = document.getElementById("blue-window");

      let absGuess = Math.abs(e.target.value - this.state.compGuess);

      console.log(
        "absolulte = ",
        Math.abs(e.target.value - this.state.compGuess)
      );

      if (
        // e.target.value >= this.state.compGuess - 10 &&
        // e.target.value <= this.state.compGuess + 10
        absGuess <= 5
      ) {
        // add FULL points of opacity to blue window
        // red LESS points of opacity

        blueWindow.style.opacity = 0.2; //really .8
        redWindow.style.opacity = 1;
        document.getElementById("red-text").innerHTML = "EXTREMELY HOT";

        console.log("EXTREMELY HOT");
      } else if (absGuess >= 6 && absGuess <= 10) {
        blueWindow.style.opacity = 0.4;
        redWindow.style.opacity = 0.8;
        document.getElementById("red-text").innerHTML = "HOT";

        console.log("Hot");
      } else if (absGuess >= 11 && absGuess <= 29) {
        blueWindow.style.opacity = 0.8;
        redWindow.style.opacity = 0.4;
        document.getElementById("blue-text").innerHTML = "Cold";

        console.log("Cold");
      } else if (
        // (e.target.value >= this.state.compGuess - 30 &&
        //   e.target.value <= this.state.compGuess - 10) ||
        // (e.target.value <= this.state.compGuess + 30 &&
        //   e.target.value >= this.state.compGuess + 10)

        absGuess >= 30
      ) {
        blueWindow.style.opacity = 1; //really .8
        redWindow.style.opacity = 0.2;
        console.log("Extremely Cold");

        document.getElementById("blue-text").innerHTML = "Extremely Cold";
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
          <div className="blue-window" id="blue-window">
            <p id="blue-text"></p>
          </div>
          <div className="red-window" id="red-window">
            <p id="red-text"></p>
          </div>
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
