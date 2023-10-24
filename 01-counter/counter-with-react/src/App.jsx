import "./App.css";
import {useState} from "react";

function App(){
  let [count, setCount] = useState(0);

const addToCount = () =>{
  if(count < 10){
    setCount(count + 1);
  }
}

const subToCount = ()=>{
  if(count > 0){
    setCount(count -1);
  }
}

  return (
    <div>
      <h4>The Current Count is....</h4>
      <h1>{count}</h1>
      <button onClick={subToCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  )
}

export default App