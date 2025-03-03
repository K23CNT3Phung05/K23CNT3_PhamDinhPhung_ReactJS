import React, { Component } from 'react';
import PdpEventForm1 from './components/PdpEventForm1';
import PdpEventForm2 from './components/PdpEventForm2';
import PdpEventForm3 from './components/PdpEventForm3';
import PdpEventForm4 from './components/PdpEventForm4';
import PdpEventForm5 from './components/PdpEventForm5';
import PdpRenderCondition from './components/PdpRenderCondition';
import PdpRenderArray from './components/PdpRenderArray';
import PdpRenderListObject from './components/PdpRenderListObject';

class PdpApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  PdpHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <PdpEventForm1 />
          <PdpEventForm2 />
          <PdpEventForm3 />
          <PdpEventForm4 />
          <PdpEventForm5 onPdpHandleSubmit={this.PdpHandleSubmitForm}/>

          <PdpRenderCondition />
          <PdpRenderArray />

          <PdpRenderListObject />
      </div>
    );
  }
}
export default PdpApp;

