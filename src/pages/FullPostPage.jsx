import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';



function FullPostPage(props){
  const [card,setCard]=React.useState([]);
  const post=props.match.params.id;

  const getCard= async ()=>{
    console.log('start get post')
    const {data} = await axios.get(`https://5c3755177820ff0014d92711.mockapi.io/posts/${post}`);
    console.log(data);
    setCard(data);
  }
  console.log(card.title);


  React.useEffect(()=>{
    getCard();
    
    },[]);
    return(
        <Jumbotron>
          <Card.Img variant="top" src={card.image} />
        <h1>{card.title}</h1>
        <p>
          {card.text}
        </p>
        <p>
        <Link to='/' className="nav-link active">Home</Link>
        </p>
      </Jumbotron>
    )
}
export default FullPostPage;