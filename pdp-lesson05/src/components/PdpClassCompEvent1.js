import React, { Component } from "react";

class PdpClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    PdpEventHandleClick1 = () => {
        alert("Button 1 clicked");
    };

    PdpEventHandleClick2 = (name) => {
        alert(`Button 2 clicked, name: ${name}`);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary mx-3" onClick={this.PdpEventHandleClick1}>
                    Button 1
                </button>
                <button className="btn btn-success mx-3" onClick={() => this.PdpEventHandleClick2("Pham Dinh Phung")}>
                    Button 2
                </button>
            </div>
        );
    }
}

export default PdpClassCompEvent1;
