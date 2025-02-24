import React, { Component } from 'react';
import PdpFuncEvent1 from './components/PdpFuncEvent1';
import PdpClassCompEvent1 from './components/PdpClassCompEvent1';
import PdpFuncCompEventProps from './components/PdpFunctionCompoEventProps';
import PdpClassCompEventProps from './components/PdpClassCompEventProps'; // Sửa đường dẫn
import PdpClassCompEventState from './components/PdpClassCompEventState';
import PdpClassCompEventPostDaTa from './components/pdpClasscompEventPostDaTa';
class PdpApp extends Component {
  constructor (props){
    super(props);
    this.state={
      pdpNoiDung:"chua co gi",
    }
  }
  //ham xu ly ki hieu
  PdpHandleDataToApp=(content)=>{
    alert(content);
  }
  render() {
    return (
      <div className="container border mt-3">
        <h1 className="text-center alert alert-info my-3">
          k23CNT3 - Pham Dinh Phung - Event and Form
        </h1>

        <div>
          <h2>Function Component - Event</h2>
          <PdpFuncEvent1 />
        </div>

        <hr />

        <div>
          <h2>Class Component - Event</h2>
          <PdpClassCompEvent1 />
        </div>

        <div>
          <h2>Function Component - Event; props</h2>
          <PdpFuncCompEventProps />
        </div>

        <hr />

        <div>
          <h2>Class Component - Event; props</h2>
          <PdpClassCompEventProps />
        </div>
        <div>
          <h2>Class Component - Event; State</h2>
          <PdpClassCompEventState/>
        </div>
        <div>
         <h1>{this.state.pdpNoiDung}</h1>
          <h2>Class Component - Event;post data to ap</h2>
          <PdpClassCompEventPostDaTa/>
        </div>
      </div>
    );
  }
}

export default PdpApp;
