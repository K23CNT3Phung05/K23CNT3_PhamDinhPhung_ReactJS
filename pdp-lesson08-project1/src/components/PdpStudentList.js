import React, { Component } from "react";
import PdpStudent from "./PdpStudent";

class PdpStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    PdpHandleView = (PdpStudent)=>{
        // Chuyển dữ liệu lên PdpApp
        this.props.onPdpHandleView(PdpStudent);
    }


  render() {
    // lấy dữ liệu trong props từ PdpApp chuyển xuống
    let {renderPdpStudents} = this.props;
    console.log("List:",renderPdpStudents);
    
    // chuyển dữ liệu vào PdpStudent để hiển thị
    let PdpElementStudent = renderPdpStudents.map((PdpItem,index)=>{
        return <PdpStudent key={index} renderPdpStudent={PdpItem} onPdpHandleView={this.PdpHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {PdpElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PdpStudentList;
