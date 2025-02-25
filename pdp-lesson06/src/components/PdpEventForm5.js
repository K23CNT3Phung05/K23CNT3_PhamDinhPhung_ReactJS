import React, { Component } from 'react';

class PdpEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            PdpName:'Phung',
            PdpAge:45,
            PdpGender:'Female',
            PdpCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    PdpHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    PdpHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.PdpName + "\n" + this.state.PdpAge);

        // Chuyển dữ liệu trên form lên App component (PdpApp);
        this.props.onPdpHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='PdpName'>Student Name:</label>
                        <input type='text' name='PdpName' id='PdpName'
                            value={this.state.PdpName}
                            onChange={this.PdpHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='PdpAge'>Student Age:</label>
                        <input type='text' name='PdpAge' id='PdpAge'
                            value={this.state.PdpAge}
                            onChange={this.PdpHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='PdpGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='PdpGender' id='PdpMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.PdpGender === 'Male'}
                                onChange={this.PdpHandleChange} />
                            <label htmlFor='PdpMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='PdpGender' id='PdpFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.PdpGender === 'Female'}
                                onChange={this.PdpHandleChange} />
                            <label htmlFor='PdpFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='PdpGender' id='PdpNone' className='mx-2'
                                value={'None'}
                                checked={this.state.PdpGender === 'None'}
                                onChange={this.PdpHandleChange} />
                            <label htmlFor='PdpNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='PdpCourse'>
                            <select name='PdpCourse' id='PdpCourse'
                                    value={this.state.PdpCourse}
                                    onChange={this.PdpHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.PdpHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default PdpEventForm5;
