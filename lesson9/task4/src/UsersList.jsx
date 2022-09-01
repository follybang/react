import React, { Component } from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends Component {
  state = {
    filterText: "",
    count: this.props.users.length,
    usersList: this.props.users,
  };

  onChange = e => {
    const filteredUsersList = this.props.users.filter(user =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    this.setState({
      filterText: e.target.value,
      count: filteredUsersList.length,
      usersList: filteredUsersList,
    });
  };

  render() {
    return (
      <>
        <Filter
          filterText={this.state.filterText}
          count={this.state.count}
          onChange={this.onChange}
        />
        <ul className="users">
          {this.state.usersList.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
