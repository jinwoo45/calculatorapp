import './App.css';
import Button from './Button';
import History from './History';
import {useState} from "react";

function App() {

  const [caculatorOn, setCalculatorOn] = useState(true);

  const switchCal = ()=>{setCalculatorOn(false)};
  const switchCal1 = ()=>{setCalculatorOn(true)};

  return (
    <div className="App">
      <div className='header'>
      { caculatorOn == true ? <h1>Calculator</h1>:<h1>Result</h1>}
        
      </div>
      <div className='underLine'></div>
      { caculatorOn == true ?
      <div className='calculatorBox'>
      <div className='resultBox'>
        <p className='sik'>34 * 74</p>
        <p className='result'>2,516</p>
      </div>
     <Button/> 
    </div>
    :    
    <div>
    <div className='resultBoxHistory'>
        <History/>
        <History/>
        <History/>
        <History/>
        <History/>
    </div>
  </div>
  }
    <div className='underLine'></div>
    <div className = "imageButtonBox">
      <div onClick={switchCal1}>
      { caculatorOn == true ? <img src='inuse/calculator_active.png'/>: <img src='inuse/calculator_inactive.png'/>}
       
      </div>
      <div onClick={switchCal}>
      { caculatorOn == true ?<img src='inuse/result_inactive.png'/>:<img src='inuse/result_active.png'/>}
      </div>
    </div>
    </div>
  );
}

export default App;
