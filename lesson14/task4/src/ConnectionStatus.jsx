import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const handleOffline = () => {
      setStatus("offline");
    };

    const handleOnline = () => {
      setStatus("online");
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [status]);

  return <div className={status === "online" ? "status" : "status status_offline"}>{status}</div>;
};

export default ConnectionStatus;
