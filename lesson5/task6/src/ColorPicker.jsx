import React, { Component } from "react";

class ColorPicker extends Component {
  constructor() {
    super();

    this.state = {
      color: "",
    };
  }

  renderColor = color => {
    this.setState({
      color,
    });
  };

  removeColor = () => {
    this.setState({
      color: "",
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseEnter={() => this.renderColor("Coral")}
            onMouseLeave={() => this.removeColor()}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.renderColor("Aqua")}
            onMouseLeave={() => this.removeColor()}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.renderColor("Bisque")}
            onMouseLeave={() => this.removeColor()}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
