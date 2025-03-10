import React, { Component } from 'react';
import PdpStudent from './PdpStudent';

export default class PdpStudentList extends Component {
  render() {
    let { renderPdpStudents, onPdpHandleView, onPdpHandleEdit, onPdpHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderPdpStudents.map((student, index) => (
            <PdpStudent 
              key={student.PdpID} 
              PdpIndex={index + 1} 
              renderPdpStudent={student} 
              onPdpHandleView={onPdpHandleView} 
              onPdpHandleEdit={onPdpHandleEdit}
              onPdpHandleDelete={onPdpHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
