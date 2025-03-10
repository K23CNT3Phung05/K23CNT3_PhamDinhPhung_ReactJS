import React, { Component } from 'react';

export default class PdpControl extends Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: '' };
  }

  // Xử lý thay đổi trong ô tìm kiếm
  handleSearchChange = (event) => {
    const keyword = event.target.value;
    this.setState({ searchKeyword: keyword });
    this.props.onPdpHandleSearch(keyword); // Gửi từ khóa về component cha
  };

  render() {
    return (
      <div className="d-flex justify-content-between mb-3">
        <input 
          type="text" 
          className="form-control w-50" 
          placeholder="🔍 Tìm kiếm sinh viên..." 
          value={this.state.searchKeyword} 
          onChange={this.handleSearchChange}
        />
        <button className="btn btn-primary" onClick={this.props.onPdpHandleAddNew}>
          ➕ Thêm mới
        </button>
      </div>
    );
  }
}
