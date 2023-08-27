import debounce from '../../debounce';
import React, { useState } from 'react'
import './App.css'

function App() {
  const arr:string[] = [];
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    debounced(newInput, arr);
  }

  const doSomething = () => {
    
    const str:string = arr.join('');
     setOutput(str);
  }

  const debounced = debounce(doSomething, input, arr);

  return (
    <>
     <input type='text' value={input} onChange={handleInputChange} placeholder='Write something' />
     <br/><br/>
     <textarea placeholder='Text debounced' value={output} cols={40} rows={5}/>
    </>
  )
}

export default App
