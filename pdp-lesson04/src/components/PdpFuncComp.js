import React from "react";

function PdpFuncComp(Props) {
  return (
    <div>
      <h1>
        Demo: Function Component Props
      </h1>
      <p>lay du lieu tu props de hien thi</p>
      <p>Name: {Props.name}</p>
      <p>Address: {Props.address}</p>
      <p>Company: {Props.company}</p>
      <p>Note: {Props.note || 'Không có ghi chú'}</p>
    </div>
  );
}

export default PdpFuncComp;
