import React from "react";

const NumbersList = ({ numbers }) => (
  <ul>
    {numbers.map(num => (
      <li>{num}</li>
    ))}
  </ul>
);

export default NumbersList;
