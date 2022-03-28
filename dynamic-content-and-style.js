/* alert!!!!
its will not work 
think its a react app and this file path is src/app.js  */



import logo from './logo.svg';
import './App.css';


const mySelf = {
  name: 'Siam Sheikh',
  profession: 'web developer'
}

const nameField = {
  color: 'red',
  fontSize: '50px',
}

function App() {
  return (
    <div style={nameField} className="App">
      <h1>
        <div style={nameField}>Name:  {mySelf.name}</div>
        <div>Profession:  {mySelf.profession}</div>
      </h1>
    </div>
  );
}

export default App;