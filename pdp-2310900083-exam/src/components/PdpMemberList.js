import React, { useState } from "react";

const PdpMemberList = ({ members, removeMember, updateMember }) => {
  const [editMemberId, setEditMemberId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ fullname: "", username: "", password: "" });

  const handleEdit = (member) => {
    setEditMemberId(member.id);
    setUpdatedInfo({ fullname: member.fullname, username: member.username, password: member.password });
  };

  const handleUpdate = () => {
    if (!updatedInfo.fullname || !updatedInfo.username || !updatedInfo.password) {
      alert("⚠ Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    updateMember({ id: editMemberId, ...updatedInfo });
    setEditMemberId(null);
  };

  const handleCancel = () => {
    setEditMemberId(null);
    setUpdatedInfo({ fullname: "", username: "", password: "" });
  };

  return (
    <div className="card p-3 mt-3 shadow-sm">
      <h2 className="text-secondary text-center">📋 Danh sách tài khoản</h2>
      <ul className="list-group">
        {members.map((member) => (
          <li key={member.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editMemberId === member.id ? (
              <div className="d-flex gap-2 w-100">
                <input type="text" className="form-control" value={updatedInfo.fullname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, fullname: e.target.value })} />
                <input type="text" className="form-control" value={updatedInfo.username} onChange={(e) => setUpdatedInfo({ ...updatedInfo, username: e.target.value })} />
                <input type="password" className="form-control" value={updatedInfo.password} onChange={(e) => setUpdatedInfo({ ...updatedInfo, password: e.target.value })} />
                <button className="btn btn-success" onClick={handleUpdate}>💾 Lưu</button>
                <button className="btn btn-secondary" onClick={handleCancel}>❌ Hủy</button>
              </div>
            ) : (
              <div className="d-flex justify-content-between w-100">
                <span><strong>{member.fullname}</strong> ({member.username})</span>
                <div className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(member)}>✏ Sửa</button>
                  <button className="btn btn-danger btn-sm" onClick={() => removeMember(member.id)}>🗑 Xóa</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdpMemberList;
