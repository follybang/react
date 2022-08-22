import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.onlineEvent);
    window.addEventListener("offline", this.offlineEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onlineEvent);
    window.removeEventListener("offline", this.offlineEvent);
  }

  onlineEvent = () => {
    this.setState({ status: "online" });
  };

  offlineEvent = () => {
    this.setState({ status: "offline" });
  };

  render() {
    return this.state.status === "online" ? (
      <div className="status">{this.state.status}</div>
    ) : (
      <div className="status status_offline">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
