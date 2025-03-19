import React from 'react';
import { Link } from 'react-router-dom';

export default function PdpNavBar() {
  return (
    <div className="bg-primary text-white p-3 shadow-sm">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <Link
            to={'/'}
            className="text-white mx-3 text-decoration-none fs-5 fw-semibold hover-effect"
          >
            Home
          </Link>
          <Link
            to={'/list-user'}
            className="text-white mx-3 text-decoration-none fs-5 fw-semibold hover-effect"
          >
            Danh sách User
          </Link>
          <Link
            to={'/create-user'}
            className="text-white mx-3 text-decoration-none fs-5 fw-semibold hover-effect"
          >
            Thêm Mới User
          </Link>
        </nav>
      </div>
    </div>
  );
}
