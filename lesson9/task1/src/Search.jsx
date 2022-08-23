import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  submitHandler = e => {
    alert(`Search text: ${this.state.value}`);
  };

  changeHandler = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.submitHandler}>
        <input
          value={this.state.value}
          type="text"
          className="search__input"
          onChange={this.changeHandler}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
