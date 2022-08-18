import React from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.isOnline,
    };
  }

  onClick = () => {
    this.setState({
      status: true,
    });
  };

  render() {
    return (
      <div class="status">
        {this.state.status ? <Online /> : <Offline onClick={this.onClick} />}
      </div>
    );
  }
}

export default Status;
