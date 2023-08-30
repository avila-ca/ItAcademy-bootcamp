import './App.css'
import throttle from '../../throttle';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [countThrottle, setCountThrottle] = useState(0);
  const [countOutput, setCountOutput] = useState(0)
  const handleClickNormal = () => {
    setCount(count + 1);
  }

  const handleClickThrottle = () => {
    setCountThrottle(countThrottle + 1);
    throttled(countThrottle.toString());
  }

  const doSomething = () => {
    setCountOutput(countOutput + 1);
  }
  const throttled = throttle(doSomething, countThrottle.toString());

  return (
    <>
      <button onClick={handleClickNormal}> Press normal Button ({count}) </button>
      <button onClick={handleClickThrottle}> Press throttle Button ({countThrottle})</button>
      <br />
      <label htmlFor="normal">Normal Output
      <textarea placeholder=' Normal calls' name='normal' value={count} cols={40} rows={5}/>
      </label>
        <label htmlFor="throttle">Throttle Output
        <textarea placeholder=' Throttled calls' name='throttle' value={countOutput} cols={40} rows={5}/>
        </label>
    </>
  )
}

export default App
