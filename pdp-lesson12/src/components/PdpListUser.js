import React from 'react'

export default function PdpListUser({renderPdpUsers}) {

    const PdpElements = renderPdpUsers.map((PdpItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{PdpItem.id}</td>
                    <td>{PdpItem.PdpFullName}</td>
                    <td>{PdpItem.PdpUserName}</td>
                    <td>{PdpItem.PdpPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {PdpElements}
            </tbody>
        </table>
    </div>
  )
}
