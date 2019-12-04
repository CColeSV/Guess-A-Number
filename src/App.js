import React from "react";
import GuessApp from "./components/GuessApp";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <GuessApp />
      </div>
    );
  }
}

export default App;
