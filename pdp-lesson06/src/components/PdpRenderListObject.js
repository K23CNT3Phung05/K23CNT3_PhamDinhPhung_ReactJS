import React, { Component } from 'react';

class PdpRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            PdpStudents :[
                {PdpId:1,PdpName:"Pham Dinh Phung ", PdpAge:46},
                {PdpId:2,PdpName:"Nguyễn Quang A", PdpAge:20},
                {PdpId:3,PdpName:"Nguyễn Quang B", PdpAge:22},
                {PdpId:4,PdpName:"Nguyễn Quang C", PdpAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {PdpStudents} = this.state;
        let PdpElement = PdpStudents.map((PdpItem)=>{
            return (
                <li>{PdpItem.PdpId} - {PdpItem.PdpName}</li>
            );
        })

        let PdpRenderElement = PdpStudents.map((PdpItem,index)=>{
            return (
                <tr key={index}>
                    <td>{PdpItem.PdpId}</td>
                    <td>{PdpItem.PdpName}</td>
                    <td>{PdpItem.PdpAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {PdpElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>PdpID</th>
                            <th>PdpName</th>
                            <th>PdpAge</th>
                            <th>PdpAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {PdpRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PdpRenderListObject;
