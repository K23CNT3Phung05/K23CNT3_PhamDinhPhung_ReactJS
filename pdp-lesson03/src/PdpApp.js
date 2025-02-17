import logo from './logo.svg';
import './App.css';
import PdpJsxExpression from './components/PdpJsxExpression';
import PdpFuncComp from './components/PdpFuncComp';
import PdpClasscomp from './components/PdpClassComp';

function PdpApp() {
  return (
    <div className="container border mt-3 bg-while  {
      
    }">
      <h1>
        React JS lesson03-Pham Dinh Phung
        <PdpJsxExpression/>
      </h1>
      <hr/>
      {
        /* su dung function component*/
        <PdpFuncComp/>
      }
   { /*su dung class component*/}
   <PdpClasscomp></PdpClasscomp>
     
    </div>
  );
}

export default PdpApp;
