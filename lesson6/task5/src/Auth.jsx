import React, { Component } from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: "spinner",
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (!this.state.isLoggedIn) {
      return <Login onLogin={this.onLogin} />;
    } else if (this.state.isLoggedIn === "spinner") {
      return <Spinner size="40px" />;
    } else if (this.state.isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
  }
}

export default Auth;
