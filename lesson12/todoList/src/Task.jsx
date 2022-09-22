import React from "react";
import classNames from "classnames";

const Task = ({ id, done, text, onDelete, onCheckboxChange }) => {
  return (
    <li className={classNames("list-item", { "list-item_done": done })}>
      <input
        onChange={() => onCheckboxChange(id)}
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
      />
      <span className="list-item__text">{text}</span>
      <button onClick={() => onDelete(id)} className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
