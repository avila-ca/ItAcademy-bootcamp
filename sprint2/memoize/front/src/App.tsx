import React, { useState } from "react";
import { memoize } from "../../cli/memoize";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [output, setOutput] = useState(0);
  const [executionFirstTime, setExecutionFirstTime] = useState(0);
  const [executionSecondTime, setExecutionSecondTime] = useState(0);

  const fn = (num: number) => {
    let totalLoops: number = 0;

    for (let index = 0; index < num; index++) {
      for (let indexb = 0; indexb < num; indexb++) {
        for (let indexc = 0; indexc < num; indexc++) {
          totalLoops++;
        }
      }
    }
    return totalLoops;
  };

  const memoized = memoize(fn);
  function handleOnclickButton() {
    const n = Number(num);

    for (let index = 0; index < 2; index++) {
      const start = performance.now();
      
      console.time('loop')
      setOutput(memoized(n));
      console.timeEnd('loop');
      const end = performance.now();
      
      const elapsed = end - start;
      if (index == 0) {
        setExecutionFirstTime(elapsed);
      } else {
        setExecutionSecondTime(elapsed);
      }
    }
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInput: string = event.target.value;

    setNum(newInput);
  };

  return (
    <>
      <input
        type="number"
        onChange={handleInputChange}
        autoFocus
        placeholder="put a  number"
      />
      <button onClick={handleOnclickButton}>
        Press here to see the result
      </button>
      <input type="text" value={output} readOnly />
      <br />
      <br />
      <label htmlFor="">
        Execution first time
        <input
          type="text"
          readOnly
          placeholder="Time"
          value={executionFirstTime}
        />ms
      </label>
      <br />
      <br />
      <label htmlFor="">
        Execution Second time
        <input
          type="text"
          readOnly
          placeholder="Time"
          value={executionSecondTime}
        />ms
      </label>
    </>
  );
}

export default App;
