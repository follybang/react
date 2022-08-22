import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    console.log("constructor: good place to create state");

    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    console.log("componentDidMount: API calls, subscriptions");
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("shouldComponentUpdate(netxProps, nextState): decide to render or not to render");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate(prevProps, prevState): some updates to render or not to render",
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount(): cleanup before DOM related to component will be removed");
  }

  showText = text => {
    this.setState({
      text,
    });
  };

  render() {
    console.log("return React element to build DOM");
    return (
      <>
        <button className="button" onClick={() => this.showText("Welcome to the club, buddy!")}>
          ShowText
        </button>
        {this.state.text && <div className="text">{this.state.text}</div>}
      </>
    );
  }
}

export default Life;
