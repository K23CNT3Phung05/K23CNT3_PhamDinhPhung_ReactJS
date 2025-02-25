import React, { Component } from 'react';

export default class PdpEventForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PdpStudentName: 'Pham Dinh Phung',
        };
    }

    // Xử lý sự kiện khi nhập dữ liệu vào ô input
    PdpHandleChange = (event) => {
        this.setState({
            PdpStudentName: event.target.value,
        });
    };

    // Xử lý khi submit form
    PdpHandleSubmit = (ev) => {
        ev.preventDefault(); // Ngăn chặn reload trang
        alert('Xin chào: ' + this.state.PdpStudentName);
    };

    render() {
        return (
            <div className="alert alert-info">
                <h2>Form Input</h2>
                <form onSubmit={this.PdpHandleSubmit}>
                    <label htmlFor="PdpStudentName">
                        <input
                            type="text"
                            name="PdpStudentName"
                            id="PdpStudentName"
                            value={this.state.PdpStudentName}
                            onChange={this.PdpHandleChange}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary">Click Here</button>
                </form>
            </div>
        );
    }
}
