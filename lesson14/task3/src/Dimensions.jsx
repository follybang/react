import React, { useState, useEffect } from "react";

const Dimensions = () => {
  const { innerWidth, innerHeight } = window;
  const [dimensions, changeDimensions] = useState({ innerWidth, innerHeight });

  useEffect(() => {
    const onWindowChange = e => {
      const { innerWidth, innerHeight } = e.target;
      changeDimensions({
        innerWidth,
        innerHeight,
      });
    };
    window.addEventListener("resize", onWindowChange);
    return () => {
      window.removeEventListener("resize", onWindowChange);
    };
  }, []);

  return (
    <div className="dimensions">
      {dimensions.innerWidth}px - {dimensions.innerHeight}px
    </div>
  );
};

export default Dimensions;
