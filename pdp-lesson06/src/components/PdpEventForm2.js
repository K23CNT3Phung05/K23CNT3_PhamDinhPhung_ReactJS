import React, { Component } from 'react'

class PdpEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Pdpcourse:'css'
                    };
    }
    //ham xu ly su kien khi thay doi khoa hoc
    PdpHandleChange = (event) =>{
        this.setState(
            {
                Pdpcourse: event.target.value
            }
        );
    }
    PdpHandleSubmit =(event)=>{
        alert('khoa hoc da chon khi submit:'+ this.state.Pdpcourse);
        event.preventDefault();
    }
  render() {
    return (
    <form onSubmit={this.PdpHandleSubmit}>
        <label>
            chon khoa hoc:
            <select name='Pdpcourse' id='Pdpcourse' 
                    value={this.state.Pdpcourse} 
                    onChange={this.PdpHandleChange}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">Javascript</option>
                <option value="reactjs">ReactJS</option>
            </select>
        </label>
        <input type="submit" value="submit" />
    </form>
    )
  }
}
export default PdpEventForm2;
