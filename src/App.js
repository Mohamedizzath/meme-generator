import { CardGroup, Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const listOfMemes = [{name: 'izzath', likes : 0}, {name: 'kamal', likes : 0}, {name: 'nimal', likes : 0}, {name: 'sunil', likes : 0}, {name: 'perera', likes : 0}];

  const listMeme = listOfMemes.map(meme => 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{meme.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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
