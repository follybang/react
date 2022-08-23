import React from "react";
import UserForm from "./UserForm.jsx";

const App = () => {
  const createUser = obj => {
    console.log(obj);
  };

  return <UserForm onSubmit={createUser} />;
};

export default App;
