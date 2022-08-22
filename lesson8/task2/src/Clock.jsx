import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: this.getTimeWithOffset(props.offset),
      location: this.props.location,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        localTime: this.getTimeWithOffset(this.props.offset),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{moment(this.state.localTime).format("h:mm:ss A")}</div>
      </div>
    );
  }
}

export default Clock;
