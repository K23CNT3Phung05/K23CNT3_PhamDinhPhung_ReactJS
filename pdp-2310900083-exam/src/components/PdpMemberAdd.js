import React, { useState } from "react";

const PdpMemberAdd = ({ addMember }) => {
  const [newMember, setNewMember] = useState({ fullname: "", username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMember.fullname || !newMember.username || !newMember.password) {
      setError("⚠ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newId = Date.now().toString();
    addMember({ ...newMember, id: newId });

    setNewMember({ fullname: "", username: "", password: "" });
    setError("");
  };

  return (
    <div className="card p-3 mt-3 shadow-sm">
      <h2 className="text-center text-success">➕ Thêm thành viên</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-md-4">
          <input type="text" className="form-control" name="fullname" placeholder="Họ và tên" value={newMember.fullname} onChange={handleChange} />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" name="username" placeholder="Tên đăng nhập" value={newMember.username} onChange={handleChange} />
        </div>
        <div className="col-md-3">
          <input type="password" className="form-control" name="password" placeholder="Mật khẩu" value={newMember.password} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">Thêm</button>
        </div>
      </form>
    </div>
  );
};

export default PdpMemberAdd;
