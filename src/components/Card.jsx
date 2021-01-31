import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
function Navigation (props){
    
  return(

    <Navbar bg="light" expand="lg">
  <Navbar.Brand >Blog Sanya</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to='/' className="nav-link active">Home</Link>
      <Link to='/test' className="nav-link ">about me</Link>
   
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Поиск</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

);
        
        
  
}

export default Navigation;