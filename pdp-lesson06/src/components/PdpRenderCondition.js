import React, { Component } from 'react';
import TvcLoginControl from './PdpLoginControl';

class TvcRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        tvcHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        tvcHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <TvcLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.tvcHandleLogout}>Logout</button>
                        :<button onClick=
                        {this.tvcHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default TvcRenderCondition;
