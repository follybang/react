import React from "react";

const Offline = ({ onClick }) => (
  <>
    <span class="status__text">Offline</span>
    <button onClick={onClick} class="status__btn">
      Reconnect
    </button>
  </>
);

export default Offline;
