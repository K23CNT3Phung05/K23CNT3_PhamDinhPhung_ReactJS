import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PdpHome from './components/PdpHome';
import PdpNavBar from './components/PdpNavBar';
import PdpListUser from './components/PdpListUser';
import PdpCreateUser from './components/PdpCreateUser';
import PdpEditUser from './components/PdpEditUser';

export default function PdpApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MiniProject - [Phạm Đình Phụng - K23CNT3]</h1>
        <hr />
        <Router>
          <PdpNavBar />
          <Routes>
            <Route path="/" element={<PdpHome />} />
            <Route path="/list-user" element={<PdpListUser />} />
            <Route path="/create-user" element={<PdpCreateUser />} />
            <Route path="/edit-user/:id" element={<PdpEditUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
