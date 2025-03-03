import React from 'react'
import PdpLoginComp from './PdpLoginComp';
import PdpLogoutComp from './PdpLogoutComp';

export default function PdpLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var PdpLoginControl = isLoggedIn?<PdpLoginComp />: <PdpLogoutComp />;
  return (
    <div>
      {PdpLoginControl}
    </div>
  )
}
