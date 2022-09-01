import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UsersList from "./UsersList.jsx";

const rootElement = document.querySelector("#root");

const users = [
  {
    name: "Genji",
    age: 18,
    id: "id-1",
  },
  {
    name: "Tom",
    age: 16,
    id: "id-2",
  },
  {
    name: "Bob",
    age: 21,
    id: "id-3",
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
