import React from "react";

const onClick = () => {
  alert("Good job!");
};

const GoodButton = () => (
  <button onClick={onClick} className="fancy-button">
    Good Button
  </button>
);

export default GoodButton;
