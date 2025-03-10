import React from 'react';

const PdpStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.PdpID}</p>
        <p><strong>Họ tên:</strong> {student.PdpStudentName}</p>
        <p><strong>Tuổi:</strong> {student.PdpAge}</p>
        <p><strong>Giới tính:</strong> {student.PdpGender}</p>
        <p><strong>Ngày sinh:</strong> {student.PdpBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.PdpBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.PdpAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default PdpStudentDetail;
