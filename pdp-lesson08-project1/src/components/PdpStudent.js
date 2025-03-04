import React, { Component } from "react";

class PdpStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    PdpHandleView = (PdpStudent)=>{
        // Chuyển lên PdpStudentList
        this.props.onPdpHandleView(PdpStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ PdpStudentList
    let {renderPdpStudent, key} = this.props;
    console.log("Student:",renderPdpStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderPdpStudent.PdpId}</td>
          <td>{renderPdpStudent.PdpStudentName}</td>
          <td>{renderPdpStudent.PdpAge}</td>
          <td>{renderPdpStudent.PdpGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.PdpHandleView(renderPdpStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default PdpStudent;
