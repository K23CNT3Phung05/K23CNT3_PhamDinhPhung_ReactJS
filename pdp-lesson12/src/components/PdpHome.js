import React from "react";

export default function PdpHome() {
  return (
    <div className="container text-center mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-success text-white">
          <h2>🌿 Chào mừng đến với PDP Trà!</h2>
        </div>
        <div className="card-body">
          <img 
            src="http://acatea.vn/Content/uploads/product/backBanner.png" 
            alt="Trà PDP" 
            className="img-fluid rounded mb-3"
          />
          <p className="lead">
            Thưởng thức hương vị trà truyền thống và hiện đại.  
            Khám phá ngay các sản phẩm đặc biệt của chúng tôi!
          </p>
          <a href="/list-user" className="btn btn-success">Xem danh sách người dùng</a>
        </div>
      </div>
    </div>
  );
}

