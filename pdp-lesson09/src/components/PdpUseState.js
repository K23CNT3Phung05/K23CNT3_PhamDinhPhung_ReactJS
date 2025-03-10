import React, { useState } from "react";

const PdpUseState = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([100, 120, 150, 200]);

  const addRandomNumber = () => {
    setList([...list, Math.floor(Math.random() * 1000)]);
  };

  return (
    <div style={{ background: "#cceeff", padding: "10px", borderRadius: "5px" }}>
      <h3>Sử dụng useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Đặt lại</button>
      <p>List: {list.join(",")}</p>
      <button onClick={addRandomNumber}>Add new (random)</button>
    </div>
  );
};
export default PdpUseState;

