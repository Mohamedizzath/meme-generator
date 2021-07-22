import { CardGroup, Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const listOfMemes = [
    {name: 'Sachin', url: '/images/meme1.jpg', comment: ""}, 
    {name: 'Malindu', url: '/images/meme2.jpg', comment: ""}, 
    {name: 'Nipun', url: '/images/meme3.jpg', comment: ""}, 
    {name: 'Sandul', url: '/images/meme4.jpg', comment: ""}, 
    {name: 'Izzath', url: '/images/meme5.jpg', comment: ""}];

  const listMeme = listOfMemes.map(meme => 
    <Card style={{ width: '18rem', margin: '10px', marginTop: '15px'}} className="fonts card-background">
      <Card.Img variant="top" src={meme.url} thumbnail/>
      <Card.Body>
        <Card.Title><h3>{meme.name}</h3></Card.Title>
        <Card.Text>
        
        </Card.Text>
      </Card.Body>
      
    </Card>
  );

  return (
    <Container style={{height: "100%"}} className="align-middle">
      <CardGroup>
        {listMeme}
      </CardGroup>
    </Container>
    );
}

export default App;
