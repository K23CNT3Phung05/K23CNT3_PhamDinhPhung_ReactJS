import React from "react";

export default function PdpFuncComp1(props) {
  return (
    <div>
      <h2>Props is Object</h2>
      <p><b>Info:</b></p>
      <p>fullname: {props.renderInfo.fullname}</p>
      <p>age: {props.renderInfo.age}</p>
      <p>phone: {props.renderInfo.phone}</p>
    </div>
  );
}
