import React, { useState } from 'react';
import {memoize} from '../../cli/memoize';
import './App.css'

function App() {
  
  const [num, setNum] = useState('');
  const [output, setOutput] = useState(0);

  const fn = (num:number) => {
    let totalLoops:number = 0;

    for (let index = 0; index < num; index++) {
      for (let indexb = 0; indexb < num; indexb++) {
        for (let indexc = 0; indexc < num; indexc++) {
          totalLoops++;
        }
      }
    }
    return totalLoops;
  }

  const memoized = memoize(fn); 
  let result:number = 0;
  function handleOnclickButton(){
    
    const n = Number(num)
    setOutput(memoized(n));    
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const newInput:string = event.target.value;
    
    setNum(newInput);
  }
  
  return (
    <>
      <input type="number" onChange={handleInputChange} autoFocus placeholder='put a  number'/>
      <button onClick={handleOnclickButton}>Press here to see the result</button>
      <input type="text" value={output} readOnly/>
    </>
  )
}

export default App
