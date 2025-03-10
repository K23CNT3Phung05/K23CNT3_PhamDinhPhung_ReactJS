import React, { useEffect, useState } from "react";

const PdpEffect1 = () => {
  const [message, setMessage] = useState("useEffect");

  useEffect(() => {
    console.log("Component PdpEffect1 mounted!");
    return () => console.log("Component PdpEffect1 unmounted!");
  }, []);

  return (
    <div style={{ background: "#f8d7da", padding: "10px", borderRadius: "5px" }}>
      <h3>{message}</h3>
      <button onClick={() => setMessage("useEffect updated!")}>Click</button>
    </div>
  );
};

export default PdpEffect1;

