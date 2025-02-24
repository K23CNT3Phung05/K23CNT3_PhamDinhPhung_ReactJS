import React, { Component } from 'react';

class pdpClassCompEventState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pdpFullName: "Pham Dinh Phung",
            pdpAge: 45,
        };
    }

    // Hàm xử lý sự kiện
    pdpEventHandleClick1 = () => {
        // Lấy dữ liệu trong state
        alert("FullName: " + this.state.pdpFullName + "\nAge: " + this.state.pdpAge);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.pdpEventHandleClick1}>
                    Button 1 - Dữ liệu trong state
                </button>
            </div>
        );
    }
}

export default pdpClassCompEventState;
