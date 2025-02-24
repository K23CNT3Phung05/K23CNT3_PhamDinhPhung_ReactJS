import React, { Component } from "react";

class PdpClassCompEventProps extends Component {
    // Hàm xử lý sự kiện
    PdpEventHandleClick1 = () => {
        alert("Hello K.");
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary mx-1" onClick={this.PdpEventHandleClick1}>
                    Button 1
                </button>
            </div>
        );
    }
}

export default PdpClassCompEventProps;
