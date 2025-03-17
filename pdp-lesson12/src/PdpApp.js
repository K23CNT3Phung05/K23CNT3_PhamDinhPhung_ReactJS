import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PdpNavNar from './components/PdpNavNar'
import PdpHome from './components/PdpHome'
import PdpAbout from './components/PdpAbout'
import PdpContact from './components/PdpContact'
import PdpListUser from './components/PdpListUser'
import PdpFormUser from './components/PdpFormUser'
export default function PdpApp() {

  const listUsers  = [
    {id:"SV001", PdpFullName:"Phạm Đình Phùng", PdpUserName:"phung05", PdpPass:"123456a@"},
    {id:"SV002", PdpFullName:"Vũ Thị Hồng Hạnh", PdpUserName:"honghanh", PdpPass:"123456a@"},
    {id:"SV003", PdpFullName:"Nguyễn Quang A", PdpUserName:"QuangA", PdpPass:"123456a@"},
  ]

  const[PdpUsers, setPdpUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const PdpHandleAdd = (PdpParam)=>{
    console.log("PdpHandleAdd:", PdpParam);
    
    setPdpUsers(prev =>{ 
      return [
        ...prev,
        PdpParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Phạm Đình Phùng- K23CNT3]</h1>
        <hr/>
        <Router>
            <PdpNavNar />
            <Routes>
                <Route path='/' element = {<PdpHome />} />
                <Route path='/about' element = {<PdpAbout />} />
                <Route path='/contact' element = {<PdpContact />} />
                <Route path='/list-user' element = {<PdpListUser  renderPdpUsers={PdpUsers}/>} />
                <Route path='/create-user' element = {<PdpFormUser  onPdpAddNew={PdpHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}
