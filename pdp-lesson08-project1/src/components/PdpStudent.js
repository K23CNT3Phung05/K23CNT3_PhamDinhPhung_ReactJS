import React, { Component } from 'react';

export default class PdpStudent extends Component {
  render() {
    let { renderPdpStudent, PdpIndex, onPdpHandleView, onPdpHandleEdit, onPdpHandleDelete } = this.props;

    return (
      <tr>
        <td>{PdpIndex}</td>
        <td>{renderPdpStudent.PdpID}</td>
        <td>{renderPdpStudent.PdpStudentName}</td>
        <td>{renderPdpStudent.PdpAge}</td>
        <td>{renderPdpStudent.PdpGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onPdpHandleView(renderPdpStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onPdpHandleEdit(renderPdpStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onPdpHandleDelete(renderPdpStudent.PdpID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}
