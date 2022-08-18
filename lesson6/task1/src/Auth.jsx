import React, { Component } from "react";
import Greeting from "./Greeting.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />

        {button}
      </div>
    );
  }
}

export default Auth;
