import React from 'react'

export default function VtdHome() {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary mb-4" style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>Welcome to Home!</h2>
      
      <p className="lead text-info mb-4" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
        Explore our wide range of electronic and home appliances that suit all your needs. Stay updated with the latest trends!
      </p>

      <img 
        src="https://minhduongads.com/wp-content/uploads/2019/11/banner-minhduongads.jpg"
        alt="Điện tử - Da dụng"
        className="rounded-3 shadow-lg"
        style={{
          width: "80%",
          height: "auto",
          transition: "transform 0.3s ease-in-out",
          imageRendering: "auto", // giúp tăng độ sắc nét cho hình ảnh
        }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      />

    </div>
  );
}
