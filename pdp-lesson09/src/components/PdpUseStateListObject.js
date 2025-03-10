import React, { useState } from "react";

const PdpUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Lâm Đức Tài", age: 21, class: "K23CNT3" },
    { id: "SV002", name: "Nguyễn Quang A", age: 23, class: "K23CNT1" },
    { id: "SV003", name: "Nguyễn Quang B", age: 21, class: "K23CNT1" },
    { id: "SV004", name: "Nguyễn Quang C", age: 20, class: "K23CNT1" }
  ]);

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>PdpID</th>
            <th>PdpName</th>
            <th>PdpAge</th>
            <th>PdpClass</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PdpUseStateListObject;
