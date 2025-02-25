import React, { Component } from 'react'

export default class PdpEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            PdpGioitinh:'Nam'
        }
    }
    //ham xu ly su kien change
    PdpHandleChange =(event)=>{
        this.setState(
            {
                PdpGioitinh:event.target.value,
            }
        )
        
    }
    //ham xu ly su kien submit form
    PdpHandlesubmit=(event)=> {
        event.preventDefault();
        alert("Gioi tinh cua ban la:"+this.state.PdpGioitinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form Input - Radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh</label>
                <input type='radio' name='PdpGioitinh' id='PdpNam' className='mx-2'
                 value='Nam' checked={this.state.PdpGioitinh === 'Nam'}/>
                <label htmlFor=''>Nam</label>
                <input type='radio' name='PdpGioitinh' id='PdpNu' className='mx-2'
                value='Nu' checked={this.state.PdpGioitinh === 'Nu'}/>
                <label htmlFor=''>Nu</label>
                <input type='radio' name='PdpGioitinh' id='PdpKhac' className='mx-2'
                value='Khac' checked={this.state.PdpGioitinh === 'Khac'}/>
                <label htmlFor=''>Khac</label>
            </div>
            <button onClick={this.PdpHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
