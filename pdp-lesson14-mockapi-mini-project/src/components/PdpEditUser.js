import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Sử dụng navigate để điều hướng
import axios from 'axios';

export default function PdpEditUser() {
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const [user, setUser] = useState(null); // Để lưu trữ dữ liệu người dùng
  const navigate = useNavigate(); // Để điều hướng người dùng sau khi lưu

  // Lấy dữ liệu người dùng theo ID
  useEffect(() => {
    axios
      .get(`https://67da76bd35c87309f52ca09c.mockapi.io/K23CNT3_phamdinhphung/pdp_Users/${id}`)
      .then((response) => {
        setUser(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error("Có lỗi khi lấy dữ liệu người dùng!", error); // Xử lý lỗi
      });
  }, [id]);

  // Xử lý khi người dùng gửi form để cập nhật dữ liệu
  const pdpHandleSubmit = (e) => {
    e.preventDefault(); // Ngừng hành vi gửi form mặc định

    // Gửi dữ liệu người dùng đã cập nhật đến API
    axios
      .put(`https://67da76bd35c87309f52ca09c.mockapi.io/K23CNT3_phamdinhphung/pdp_Users/${id}`, user)
      .then(() => {
        alert("Cập nhật thành công!"); // Thông báo khi cập nhật thành công
        navigate('/list-user'); // Điều hướng về danh sách người dùng
      })
      .catch((error) => {
        console.error("Lỗi khi lưu thay đổi", error); // Xử lý lỗi
      });
  };

  // Render form để chỉnh sửa dữ liệu người dùng
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit User</h2>
      {user ? (
        <form onSubmit={pdpHandleSubmit} className="p-5 border rounded-3 shadow-lg">
          <div className="mb-3">
            <label htmlFor="pdp_Name" className="form-label">Name</label>
            <input
              type="text"
              id="pdp_Name"
              className="form-control"
              value={user.pdp_Name}
              onChange={(e) => setUser({ ...user, pdp_Name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pdp_Email" className="form-label">Email</label>
            <input
              type="email"
              id="pdp_Email"
              className="form-control"
              value={user.pdp_Email}
              onChange={(e) => setUser({ ...user, pdp_Email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pdp_Phone" className="form-label">Phone</label>
            <input
              type="text"
              id="pdp_Phone"
              className="form-control"
              value={user.pdp_Phone}
              onChange={(e) => setUser({ ...user, pdp_Phone: e.target.value })}
            />
          </div>

          {/* Radio buttons for Active */}
          <div className="mb-3">
            <label className="form-label">Active</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pdp_Active"
                id="pdp_Active_hd"
                value="true"
                checked={user.pdp_Active === true}
                onChange={() => setUser({ ...user, pdp_Active: true })}
              />
              <label className="form-check-label" htmlFor="pdp_Active_hd">
                Hoạt Động
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="pdp_Active"
                id="pdp_Active_kh"
                value="false"
                checked={user.pdp_Active === false}
                onChange={() => setUser({ ...user, pdp_Active: false })}
              />
              <label className="form-check-label" htmlFor="pdp_Active_kh">
                Khóa
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">Save Changes</button>
          </div>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}

      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-secondary">
          Back to List
        </button>
      </div>
    </div>
  );
}
