import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import axios from "axios";


function App() {

 const [cards,setCards]=React.useState([]);

  const getCards= async ()=>{
    console.log('start')
    const {data} = await axios.get('https://5c3755177820ff0014d92711.mockapi.io/posts');
    setCards(data);
   
  }
  console.log(cards);

  React.useEffect(()=>{
  getCards();
 
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card cards={cards}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
