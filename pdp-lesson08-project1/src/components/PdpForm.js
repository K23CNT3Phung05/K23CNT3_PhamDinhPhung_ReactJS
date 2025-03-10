import React, { Component } from 'react';

export default class PdpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PdpID: '',
      PdpStudentName: '',
      PdpAge: '',
      PdpGender: 'Nam',
      PdpBirthday: '',
      PdpBirthPlace: 'HN',
      PdpAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderPdpStudent !== this.props.renderPdpStudent) {
      if (this.props.renderPdpStudent) {
        this.setState({ ...this.props.renderPdpStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          PdpID: '',
          PdpStudentName: '',
          PdpAge: '',
          PdpGender: 'Nam',
          PdpBirthday: '',
          PdpBirthPlace: 'HN',
          PdpAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { PdpID, ...otherState } = this.state;

    if (!PdpID || PdpID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (PdpID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onPdpHandleSaveNew({ PdpID, ...otherState });
    } else {
        this.props.onPdpHandleUpdate({ PdpID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            
            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="PdpID" value={this.state.PdpID} onChange={this.handleChange} required />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="PdpStudentName" value={this.state.PdpStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="PdpAge" value={this.state.PdpAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="PdpGender" value={this.state.PdpGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="PdpBirthday" value={this.state.PdpBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="PdpBirthPlace" value={this.state.PdpBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="PdpAddress" value={this.state.PdpAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}
