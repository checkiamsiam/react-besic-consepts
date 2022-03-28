/* alert!!!!
its will not work 
think its a react app and this file path is src/app.js  */



import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1)
  const decrease = () => {
    if (count >= 1) {
      setCount(count - 1)
    } else {
      setCount(0)
    };
  }

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </div>
  );
}


export default App;
