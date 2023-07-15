import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App" >  
      <Card style={{ width: '18rem', padding: '1rem' }}>
        <Card.Img variant="top" src={Product.image} alt="myimage" />
        <Card.Body>
          <Card.Title>{Product.name}</Card.Title>
          <Price/>
          <Card.Text>
           <Description/>
          </Card.Text>
          <Button variant="primary">Add to the Cart</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
