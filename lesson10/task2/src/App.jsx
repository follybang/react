import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Profile from "./Profile.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        firstName: "John",
        lastName: "Doe",
      },
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const data = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">
          Hello, {data.firstName} {data.lastName}
        </h1>
        <main className="content">
          <ShoppingCart userName={data.firstName} />
          <Profile userData={data} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
