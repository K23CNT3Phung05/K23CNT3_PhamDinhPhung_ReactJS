import React, { Component } from 'react';

class PdpClasscomp extends Component {
  constructor() {
    super(); // Không cần truyền Props vào constructor
    // Khởi tạo state
    this.state = {
      fullName: "Phung Hanh",
      age: 25,
      phone: "0373866467"
    };
  }

  // Hàm thay đổi state khi nhấn nút
  handleChange = () => {
    this.setState({
      fullName: "Nguyen Van A",
      age: 30,
      phone: "0123456789"
    });
  }

  render() {
    return (
      <div className='alert alert-success'>
        <h1>Trình bày dữ liệu state</h1>
        <p>info state (fullName): {this.state.fullName}</p>
        <p>info state (age): {this.state.age}</p>
        <p>info state (phone): {this.state.phone}</p>
        <hr />
        {/* Thêm sự kiện xử lý thay đổi khi nhấn nút */}
        <button className='pdp pdp-primary' onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}

export default PdpClasscomp;
