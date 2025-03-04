import React, { Component } from "react";
import PdpControl from "./components/PdpControl";
import PdpStudentList from "./components/PdpStudentList";
import PdpForm from "./components/PdpForm";

class PdpApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      PdpStudents:[
        {PdpId:"SV001",PdpStudentName:"Trịnh Văn Chung",PdpAge:46,PdpGender:"Nam",PdpBirthday:"25/05/1979",PdpBirthPlace:"HN", PdpAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {PdpId:"SV002",PdpStudentName:"Chu Nguyên Chương",PdpAge:188,PdpGender:"Nữ",PdpBirthday:"25/05/1179",PdpBirthPlace:"HP", PdpAddress:"Trung quốc"},
        {PdpId:"SV003",PdpStudentName:"Tần Thủy Hoàng",PdpAge:55,PdpGender:"Nam",PdpBirthday:"25/05/1079",PdpBirthPlace:"TpHCM", PdpAddress:"Trung Quốc"},
        {PdpId:"SV004",PdpStudentName:"Hoàng Thùy Linh",PdpAge:55,PdpGender:"Nam",PdpBirthday:"25/05/1079",PdpBirthPlace:"TpHCM", PdpAddress:"Hồ chí minh"},
      ],
      PdpStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  PdpHandleView = (PdpStudent)=>{
    this.setState({
      PdpStudent:PdpStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.PdpStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trịnh Văn Chung - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <PdpControl  />
                {/* danh sách sinh vien  */}
                <PdpStudentList  renderPdpStudents={this.state.PdpStudents} onPdpHandleView={this.PdpHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <PdpForm  renderPdpStudent = {this.state.PdpStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PdpApp;
