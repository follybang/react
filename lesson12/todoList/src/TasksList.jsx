import React from "react";
import CreateTaskInput from "./CreateTaskInput.jsx";
import { fetchTasksList, createNewTask, deleteTask, updateTask } from "./tasksGateway.js";
import Task from "./Task.jsx";

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.getTasksList();
  }

  getTasksList = () => {
    fetchTasksList().then(tasks => this.setState({ tasks }));
  };

  onDelete = id => {
    deleteTask(id).then(() => this.getTasksList());
  };

  createTask = text => {
    createNewTask({
      text,
      done: false,
    }).then(() => this.getTasksList());
  };

  onCheckboxChange = id => {
    const task = this.state.tasks.find(task => task.id === id);
    const { done, text } = task;
    updateTask(id, {
      done: !done,
      text,
    }).then(() => this.getTasksList());
  };

  render() {
    const sortedTaskList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput addTask={this.createTask} />
        <ul className="list">
          {sortedTaskList.map(task => (
            <Task
              onCheckboxChange={this.onCheckboxChange}
              onDelete={this.onDelete}
              key={task.id}
              {...task}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
