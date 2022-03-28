/* alert!!!!
its will not work 
think its a react app and this file path is src/app.js  */



import logo from './logo.svg';
import './App.css';

const players = [{ name: 'mukul majhi', dis: 'ami mridda bari er raja adik kaw aibi to bhoira dimu sabdhan' },
{ name: 'mukul majhi', dis: 'ami mridda bari er raja adik kaw aibi to bhoira dimu sabdhan' },
{ name: 'mukul majhi', dis: 'ami mridda bari er raja adik kaw aibi to bhoira dimu sabdhan' } ,
{ name: 'mukul majhi', dis: 'ami mridda bari er raja adik kaw aibi to bhoira dimu sabdhan' } 
]

function App() {
  return (
    <div className="App">
      {players.map(player => <Card tit={player.name} dis={player.dis}></Card>)};
    {/*   <Card tit="mukul majhi" dis=""></Card>
      <Card tit="siam kazi" dis="ami ki bhaisa aisi naki hondir pola tui cinos amre cutia"></Card>
      <Card tit="billu kande" dis="tora jodi togo genjam amr bait er smne korsot sala tder "></Card>  */}
    </div>
  );
}


//creat component 
//*componnet er somoy function er name boro hater dite hobe*/
function Card(props) {
  return <div style={card}>
    <h1>{props.tit}</h1>
    <h2>{props.dis}</h2>
  </div>
}


//style part 
const card = {
  display: 'inline-block',
  width: '30%',
  border: '2px solid khaki',
  backgroundColor: 'goldenrod',
  borderRadius: '5px',
  margin: '5px'
}

export default App;
