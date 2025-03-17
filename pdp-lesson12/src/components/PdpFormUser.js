import React, { useState } from "react";

export default function PdpFormUser({ onPdpAddNew }) {
  const [newUser, setNewUser] = useState({ id: "", PdpFullName: "", PdpUserName: "" });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.id && newUser.PdpFullName && newUser.PdpUserName) {
      onPdpAddNew(newUser);
      setNewUser({ id: "", PdpFullName: "", PdpUserName: "" });
    }
  };

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h4>Thêm người dùng mới</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input type="text" className="form-control" name="id" value={newUser.id} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Họ và Tên</label>
            <input type="text" className="form-control" name="PdpFullName" value={newUser.PdpFullName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Tên Đăng Nhập</label>
            <input type="text" className="form-control" name="PdpUserName" value={newUser.PdpUserName} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Thêm mới</button>
        </form>
      </div>
    </div>
  );
}
