import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PdpCreateUser() {
    // Khởi tạo state
    const [pdp_Name, setPdp_Name] = useState("");
    const [pdp_Email, setPdp_Email] = useState("");
    const [pdp_Phone, setPdp_Phone] = useState("");
    const [pdp_Active, setPdp_Active] = useState(true);

    // API POST
    const pdpCreateUser = 'https://67da76bd35c87309f52ca09c.mockapi.io/K23CNT3_phamdinhphung/pdp_Users';
    // Submit form
    const pdpHandleSubmit = (ev) => {
        ev.preventDefault(); // Ngăn form gửi tự động

        let pdpNewUser = { pdp_Name, pdp_Email, pdp_Phone, pdp_Active };

        // Gửi dữ liệu lên API
        axios
            .post(pdpCreateUser, pdpNewUser)
            .then((pdp_response) => {
                console.log(pdp_response.data);
                alert("Thêm mới thành công!");
            })
            .catch((error) => {
                console.error("Lỗi:", error);
            });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={pdpHandleSubmit}>
                <h2>Thêm Mới User</h2>

                {/* Nhập Name */}
                <div className="mb-3">
                    <label htmlFor="pdp_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="pdp_Name"
                        id="pdp_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setPdp_Name(ev.target.value)}
                        value={pdp_Name}
                        required
                    />
                </div>

                {/* Nhập Email */}
                <div className="mb-3">
                    <label htmlFor="pdp_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="pdp_Email"
                        id="pdp_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setPdp_Email(ev.target.value)}
                        value={pdp_Email}
                        required
                    />
                </div>

                {/* Nhập Phone */}
                <div className="mb-3">
                    <label htmlFor="pdp_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="pdp_Phone"
                        id="pdp_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setPdp_Phone(ev.target.value)}
                        value={pdp_Phone}
                        required
                    />
                </div>

                {/* Trạng thái Active */}
                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="pdp_Active"
                            id="pdp_active_hd"
                            value="true"
                            checked={pdp_Active === true}
                            onChange={() => setPdp_Active(true)}
                        />
                        <label className="form-check-label" htmlFor="pdp_active_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="pdp_Active"
                            id="pdp_active_kh"
                            value="false"
                            checked={pdp_Active === false}
                            onChange={() => setPdp_Active(false)}
                        />
                        <label className="form-check-label" htmlFor="pdp_active_kh">Khóa</label>
                    </div>
                </div>

                {/* Nút Submit */}
                <button type="submit" className="btn btn-primary">Create</button>

                {/* Nút quay lại danh sách */}
                <Link to="/list-user" className="btn btn-info ms-2">
                    Back
                </Link>
            </form>
        </div>
    );
}
