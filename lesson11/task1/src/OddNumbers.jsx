import React from "react";

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextprops) {
    return nextprops.number % 2 === 1;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
