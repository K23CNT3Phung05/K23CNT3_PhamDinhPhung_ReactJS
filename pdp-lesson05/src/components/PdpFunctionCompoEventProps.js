import React from "react";

export default function PdpFuncCompEventProps(props) {
    // Hàm xử lý sự kiện
    const PdpHandleButtonClick1 = () => {
        alert("Dữ liệu từ props: " + props.PdpRenderName);
        console.log("Xin chào: ", props.PdpRenderName);
    };

    const PdpHandleButtonClick2 = (param) => {
        // Lấy dữ liệu từ props (Button 2 click)
        alert("Dữ liệu từ props (button 2 click): " + props.PdpRenderName);

        // Nếu dữ liệu > 65
        console.log("param: ", param);
        console.log("--------");
    };

    return (
        <div className="alert alert-danger">
            <button className="btn btn-primary mx-1" onClick={PdpHandleButtonClick1}>
                Button 1
            </button>

            <button className="btn btn-success mx-1" onClick={() => PdpHandleButtonClick2("button 2")}>
                Button 2
            </button>
        </div>
    );
}
