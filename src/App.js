import { CardGroup, Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const listOfMemes = [
    {name: 'Naresh', url: '/images/meme1.jpg', comment: "Gym boy"}, 
    {name: 'Ashfak', url: '/images/meme2.jpg', comment: "Linux fan"}, 
    {name: 'Nipun', url: '/images/meme3.jpg', comment: "Music for life"}, 
    {name: 'Sandul', url: '/images/meme4.jpg', comment: "Positive thinking"}, 
    {name: 'Pubudu', url: '/images/meme5.jpg', comment: "Linux go brr"}];

  const listMeme = listOfMemes.map(meme => 
    <Card style={{ width: '18rem', margin: '10px', marginTop: '30px'}} className="fonts card-background">
      <Card.Img variant="top" src={meme.url} thumbnail/>
      <Card.Body>
        <Card.Title><h3>{meme.name}</h3></Card.Title>
        <Card.Text>
          <Button type="submit" className="button button-rework">
                    {meme.comment}
          </Button>
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
