import React from "react";

class AnimatedWindows extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="windows-inside">
        {this.state.visible ? <div className="left-window"></div> : null}
        {this.state.visible ? <div className="right-window"></div> : null}
        <button
          onClick={() => {
            this.setState({ visible: false });
          }}
          hide
        ></button>
        {/* if (input.value < state.value) {
        blueWindow()
      } else if (input.value > state.value) {
        redWindow() 
        }*/}
      </div>
    );
  }
}

export default AnimatedWindows;

// Something for .show
// Still working on this
