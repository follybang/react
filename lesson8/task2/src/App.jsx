import React, { Component } from "react";
import Clock from "./Clock.jsx";

class App extends Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>Toggle</button>
        <div>{this.state.visible && <Clock />}</div>
      </div>
    );
  }
}

export default App;
