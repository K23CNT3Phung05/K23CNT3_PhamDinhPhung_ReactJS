import React, { Component } from "react";

class PdpClassCompEventPostData extends Component {
    // Hàm xử lý sự kiện
    PdpEventHandleClick = () => {
        // Kiểm tra prop trước khi gọi để tránh lỗi
        if (this.props.onPdpDataToApp) {
            this.props.onPdpDataToApp("Dữ liệu từ component con - PdpClassCompEventPostData");
        } else {
            console.error("LỖI: onPdpDataToApp không được truyền từ component cha.");
        }
    };

    render() {
        return (
            <div className="alert alert-success p-3">
                <h3>Class Component - Post Data to App</h3>
                <button className="btn btn-primary" onClick={this.PdpEventHandleClick}>
                    Gửi dữ liệu lên App
                </button>
            </div>
        );
    }
}

export default PdpClassCompEventPostData;
