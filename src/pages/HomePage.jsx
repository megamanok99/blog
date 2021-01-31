import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import '../App.css';
function HomePage (props){
    
  return(

    <Row className="cards justify-content-md-center " >
    {
        props.cards.map((obj)=>(
            <Col md="auto" key={obj.id}>
          <Card  >
          <Card.Img variant="top" src={obj.image} />
          <Card.Body>
            <Card.Title>{obj.title}</Card.Title>
            <Card.Text>
              {obj.text}
            </Card.Text>
            <Link variant="primary" 
            to={`post/${obj.id}`}
            onClick={()=>props.getOneCard(obj.id)}
            >{obj.name}</Link>
          </Card.Body>
        </Card>
        </Col>
        ))}
    
    
  </Row>

);
        
        
  
}

export default HomePage;