import React from "react";

class CreateTaskInput extends React.Component {
  state = {
    value: "",
  };

  handleClick = e => {
    this.setState({ value: e.target.value });
  };

  onClick = () => {
    this.props.addTask(this.state.value);

    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="create-task">
        <input
          onChange={this.handleClick}
          className="create-task__input"
          type="text"
          value={this.state.value}
        />
        <button onClick={this.onClick} className="btn create-task__btn">
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;
