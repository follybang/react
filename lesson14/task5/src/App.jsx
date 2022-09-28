import React, { useState } from "react";
import Clock from "./Clock.jsx";

const Page = () => {
  const [status, setStatus] = useState(true);

  return (
    <>
      {status && (
        <>
          <Clock location="New York" offset={-5} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="London" offset={0} />
        </>
      )}
      <button className="button" onClick={() => setStatus(!status)}>
        Toggle
      </button>
    </>
  );
};

export default Page;
