import React from 'react';
import './App.css';
import PdpFuncComp from './components/PdpFuncComp';
import PdpFuncComp1 from './components/PdpFuncComp1'; // Đảm bảo import đúng
import PdpClasscomp from './components/PdpClassComp';

// Định nghĩa object users
const users = {
  fullname: 'Nguyen van Be',
  age: 20,
  phone: "0373866467"
};

function PdpApp() {
  return (
    <div className="component borde mt-3">
      <h1>Demo component - Props - State</h1>

      <div className='alert alert-danger'>
        <PdpFuncComp name="Pham Phung" address="63 phan dinh giot" company="Devmaster" />
        <hr />
        <PdpFuncComp name="Hong hanh" address="Nghe an" company="Fit-QL1" />
        <hr />
      </div>

      <div className='alert alert-info'>
        {/* Truyền props renderInfo */}
        <PdpFuncComp1 renderInfo={users} />
      </div>
      <PdpClasscomp/>
    </div>
  );
}

export default PdpApp;

