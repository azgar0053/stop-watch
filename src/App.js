import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [timeControl, setTimeControl]= useState(false)
  const [count, setCount] = useState(0);


  const countStart=()=>{ 
    setTimeControl(()=>
    !timeControl)
  }

 

  const timer=(count)=>{
    const mins = Math.floor(count/60);
    count %=60;
    return `${mins}:${count<10?"0":""}${count}`
  }

  useEffect(()=>{
    let timerId = setInterval(() => {
      if(timeControl){
      setCount((prev)=> prev+1)
      }
    }, 1000);
    return ()=>{
      clearInterval(timerId)
    }
  },[timeControl, count])
  
  const resetTimer=()=>{
    setTimeControl(false);
    setCount(0)
  }


  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {timer(count)}</p>
      <button onClick={countStart}>{timeControl?'Stop':'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
