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
        <h3 style={{ margin: 10 }}>A Random Number has been Generated</h3>
        <h3>Take A Guess Above!</h3>
      </div>
    );
  }
}

export default DirectionBox;
