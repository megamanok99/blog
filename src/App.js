import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FullPostPage from './pages/FullPostPage';
import Navigation from './components/Card';
import { Spin, Space } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";


function App() {

 const [cards,setCards]=React.useState([]);
 const [loading,setLoading]=React.useState(true);
 

  const getCards= async ()=>{
    console.log('start')
    setLoading(true);
    const {data} = await axios.get('https://5c3755177820ff0014d92711.mockapi.io/posts');
    setCards(data);
    setLoading(false);
   
  }
  const getRoad=()=>{
    
    const road=window.location.pathname;
    console.log(road);
    
  }
  const getOneCard=(id)=>{

  }
  
  React.useEffect(()=>{
  getCards();
  getRoad();
  
  },[]);
  
  

  return (
    <div className="App">
     
    
     <Navigation/>
       
         <Route exact path='/'>
          { loading===false ?<HomePage cards={cards} getOneCard={getOneCard}/> :
          <Space size="middle">
          <Spin size="large" />
          </Space>
         }
        </Route>
        <Route path='/test'>
          <AboutPage getRoad={getRoad} />
        </Route>
        <Route path='/post/:id' component={FullPostPage}/>
    
 

    </div>
  );
}

export default App;
