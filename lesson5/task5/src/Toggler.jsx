import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Off",
    };
  }

  checker = () => {
    if (this.state.status === "Off") {
      this.setState({
        status: "On",
      });
    } else {
      this.setState({
        status: "Off",
      });
    }
  };

  render() {
    return (
      <div onClick={this.checker} className="toggler">
        {this.state.status}
      </div>
    );
  }
}

export default Toggler;
