import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  render() {
    return (
      <div>
        <div class="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseEnter={() => this.setState({ color: "Coral" })}
            onMouseLeave={() => this.setState({ color: "" })}
            class="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.setState({ color: "Aqua" })}
            onMouseLeave={() => this.setState({ color: "" })}
            class="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.setState({ color: "Bisque" })}
            onMouseLeave={() => this.setState({ color: "" })}
            class="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
