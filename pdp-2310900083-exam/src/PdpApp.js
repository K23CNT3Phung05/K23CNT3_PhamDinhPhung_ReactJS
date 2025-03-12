import React, { useState } from "react";
import PdpMemberList from "./components/PdpMemberList";
import PdpMemberAdd from "./components/PdpMemberAdd";
import "bootstrap/dist/css/bootstrap.min.css";

const PdpApp = () => {
  // Danh sách thành viên
  const [members, setMembers] = useState([
    { id: "230001", fullname: "Phạm Đình Phùng", username: "Phùng", password: "7979" },
    { id: "230002", fullname: "Vũ Thị Hồng Hạnh", username: "Hạnh", password: "abcdef" },
    { id: "230003", fullname: "Lê Văn Nam", username: "Nam", password: "6789" },
  ]);

  // Thêm thành viên
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Xóa thành viên
  const removeMember = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa thành viên này?")) {
      setMembers(members.filter((member) => member.id !== id));
    }
  };

  // Cập nhật thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map((member) => (member.id === updatedMember.id ? updatedMember : member)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center">📋 Quản lý Thành viên</h1>
      <PdpMemberAdd addMember={addMember} />
      <PdpMemberList members={members} removeMember={removeMember} updateMember={updateMember} />
    </div>
  );
};

export default PdpApp;
