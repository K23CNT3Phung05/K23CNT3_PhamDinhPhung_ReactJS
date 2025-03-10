import React, { Component } from 'react';
import PdpControl from './components/PdpControl';
import PdpStudentList from './components/PdpStudentList';
import PdpForm from './components/PdpForm';
import PdpStudentDetail from './components/PdpStudentDetail'; 

class PdpApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PdpStudents: [ 
        { PdpID: "SV001", PdpStudentName: "Phạm Đình PhùngPhùng", PdpAge: 19, PdpGender: "Nam", PdpBirthday: "05/11/2005", PdpBirthPlace: "QN", PdpAddress: "Yên Xá" },
        { PdpID: "SV002", PdpStudentName: "Nguyễn Trọng Hưng", PdpAge: 19, PdpGender: "Nam", PdpBirthday: "04/09/2005", PdpBirthPlace: "HN", PdpAddress: "Hai Bà Trưng" },
        { PdpID: "SV003", PdpStudentName: "Nguyễn Hữu Tuấn", PdpAge: 19, PdpGender: "Nam", PdpBirthday: "04/09/2005", PdpBirthPlace: "HD", PdpAddress: "Hải Dương" },
        { PdpID: "SV004", PdpStudentName: "Nguyễn Gia Duy", PdpAge: 20, PdpGender: "Nam", PdpBirthday: "13/01/2005", PdpBirthPlace: "HD", PdpAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.PdpStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onPdpHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { PdpStudents, searchKeyword } = this.state;
    const filtered = PdpStudents.filter(student =>
      student.PdpStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onPdpHandleView = (PdpStudent) => {
    this.setState({
      selectedStudent: PdpStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onPdpHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onPdpHandleEdit = (PdpStudent) => {
    this.setState({ selectedStudent: PdpStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onPdpHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.PdpStudents.filter(student => student.PdpID !== studentID);
      return { PdpStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onPdpHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.PdpStudents.map(student => 
        student.PdpID === updatedStudent.PdpID ? updatedStudent : student
      );
      return { PdpStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onPdpHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onPdpHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      PdpStudents: [...prevState.PdpStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Phạm Đình PhùngPhùng - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <PdpControl 
                  onPdpHandleAddNew={this.onPdpHandleAddNew} 
                  onPdpHandleSearch={this.onPdpHandleSearch} 
                />
                <PdpStudentList
                  renderPdpStudents={this.state.filteredStudents} 
                  onPdpHandleView={this.onPdpHandleView} 
                  onPdpHandleEdit={this.onPdpHandleEdit}
                  onPdpHandleDelete={this.onPdpHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <PdpStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onPdpHandleCloseDetail} 
                />
              ) : (
                <PdpForm 
                  renderPdpStudent={this.state.selectedStudent} 
                  onPdpHandleUpdate={this.onPdpHandleUpdate} 
                  onPdpHandleSaveNew={this.onPdpHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PdpApp;
