/* alert!!!!
its will not work 
think its a react app and this file path is src/app.js  */



import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <ShowData></ShowData>
    </div>
  );
}
function ShowData() {
  const [infos, setInfo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [])


  return (
    <div>
      {infos.map(info => <li>{info.name}</li>)}
    </div>
  );
}


export default App;