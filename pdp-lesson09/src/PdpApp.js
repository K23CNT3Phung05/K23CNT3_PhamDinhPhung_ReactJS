import React from 'react';
import PdpUseState from './components/PdpUseState';
import PdpEffect1 from './components/PdpEffect1';
import PdpUseStateListObject from './components/PdpUseStateListObject';

export default function PdpApp() {
  return (
    <div className='container border my=t-3'>
      <h1> React Hook</h1>
      <hr/>
      <PdpUseState/>
      <PdpEffect1/>
      <PdpUseStateListObject/>
    </div>
  );
}
