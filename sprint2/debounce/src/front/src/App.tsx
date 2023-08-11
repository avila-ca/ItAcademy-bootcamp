import debounce from '../../debounce';
import React, { useState } from 'react'
import './App.css'

function App() {
  const arr:string[] = [];
  const [input, setInput] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = event.target.value;
    setInput(newInput);
    debounced(newInput, arr);
  }
const str:string = '';
  const doSomething = (str:string) => {
    
     str = arr.join('');
     console.log(str);
     
     return str;
  }

  const debounced = debounce(doSomething, input, arr);

  return (
    <>
     <input type='text' value={input} onChange={handleInputChange} placeholder='Write something' />
     {doSomething}
    </>
  )
}

export default App
