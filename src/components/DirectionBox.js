import React from "react";

class DirectionBox extends React.Component {
  // startGame = function() {
  //   // compGuess = Math.floor(Math.random() * 100 + 1);
  // };

  render() {
    return (
      <div className="dbox">
        {/* <button style={{ width: 100, height: 30 }} onClick={this.state}>
          Start
        </button> */}
        <h3 style={{ margin: 10 }}>Click Start to generate a random number</h3>
        <h3> Then try typing in a number above..</h3>
      </div>
    );
  }
}

export default DirectionBox;
