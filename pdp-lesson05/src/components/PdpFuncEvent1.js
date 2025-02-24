import React from "react";

export default function PdpFuncEvent() {
    // Hàm xử lý sự kiện
    const PdpEventButton1Click = () => {
        alert("Button 1 - Clicked");
    };

    const PdpEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };

    return (
        <div className="alert alert-info">
            <button className="btn btn-primary nx-1" onClick={PdpEventButton1Click}>
                Button 1
            </button>
            <button className="btn btn-success nx-1" onClick={PdpEventButton2Click}>
                Button 2
            </button>
            <button className="btn btn-success nx-1" onClick={PdpEventButton2Click('pham dinh phung')}>
                Button 2
            </button>
        </div>
    );
}
