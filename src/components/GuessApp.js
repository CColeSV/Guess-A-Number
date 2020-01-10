import React from "react";
import DirectionBox from "./DirectionBox";
import swal from "sweetalert";

class GuessApp extends React.Component {
  constructor() {
    super();
    this.state = {
      compGuess: Math.floor(Math.random() * 100 + 1),
      redWindowText: "",
      blueWindowText: ""
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

      if (absGuess === 0) {
        console.log("Winner!!");

        blueWindow.style.opacity = 1;
        redWindow.style.opacity = 1;

        this.setState({ redWindowText: "" });
        this.setState({ blueWindowText: "" });

        // this.setState({
        //   redWindowText: "",
        //   blueWindowText: ""
        // });

        swal("YOU WON!", "Good Job!", "success");

        // swal({
        //   title: "YOU WON!",
        //   text: "Good Job!",
        //   icon: "success",
        //   button: "Aww yiss!"
        // });

        // Animate Popup --> WINNER!!
      } else if (
        // e.target.value >= this.state.compGuess - 10 &&
        // e.target.value <= this.state.compGuess + 10
        absGuess <= 5
      ) {
        // add FULL points of opacity to blue window
        // red LESS points of opacity

        blueWindow.style.opacity = 0; //really .8
        redWindow.style.opacity = 1;

        this.setState({ redWindowText: "VERY HOT" });
        this.setState({ blueWindowText: "" });

        console.log(this.state);
        console.log("EXTREMELY HOT");
      } else if (absGuess >= 6 && absGuess <= 10) {
        blueWindow.style.opacity = 0;
        redWindow.style.opacity = 0.8;
        document.getElementById("red-text").innerHTML = "HOT";
        document.getElementById("blue-text").innerHTML = "";

        console.log("Hot");
      } else if (absGuess >= 11 && absGuess <= 29) {
        blueWindow.style.opacity = 0.8;
        redWindow.style.opacity = 0;
        document.getElementById("blue-text").innerHTML = "COLD";
        document.getElementById("red-text").innerHTML = "";

        console.log("Cold");
      } else if (
        // (e.target.value >= this.state.compGuess - 30 &&
        //   e.target.value <= this.state.compGuess - 10) ||
        // (e.target.value <= this.state.compGuess + 30 &&
        //   e.target.value >= this.state.compGuess + 10)

        absGuess >= 30
      ) {
        blueWindow.style.opacity = 1; //really .8
        redWindow.style.opacity = 0;
        console.log("Extremely Cold");

        document.getElementById("blue-text").innerHTML = "VERY COLD";
        document.getElementById("red-text").innerHTML = " ";
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="h2">
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
            <p id="blue-text">{this.state.blueWindowText}</p>
          </div>
          <div className="red-window" id="red-window">
            <p id="red-text">{this.state.redWindowText}</p>
          </div>
          {/* <AnimatedWindows /> */}
          <div className="winner-box"></div>
        </div>
      </div>
    );
  }
}

export default GuessApp;
