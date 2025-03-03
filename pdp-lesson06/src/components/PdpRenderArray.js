import React from 'react'

export default function PdpRenderArray() {

    const PdpNumbers = [10,20,30,40,50];
    const PdpElement = PdpNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {PdpElement}
    </div>
  )
}
