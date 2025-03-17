import React, { Suspense, lazy } from 'react';
import { Link, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import PdpHome from './components/PdpHome';
import PdpAbout from './components/PdpAbout';
import PdpContact from './components/PdpContact';

const PdpDashboard = lazy(() => import('./components/PdpDashboard'));
const isAuthenticated = false; // Giả sử người dùng chưa đăng nhập

const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/about" />;
};

export default function PdpApp() {
  return (
    <div className="container border my-3">
      <h1>React Router Demo</h1>
      <hr />
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="alert alert-danger">
              <Routes>
                <Route path="/" element={<PdpHome />} />
                <Route path="/about" element={<PdpAbout />} />
                <Route path="/contact" element={<PdpContact />} />
                <Route path="/dashboard" element={<ProtectedRoute element={<PdpDashboard />} />} />
              </Routes>
            </div>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}
