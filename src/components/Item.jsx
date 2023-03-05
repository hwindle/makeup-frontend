import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

const Item = (props) => {
  const [serverURL, setServerURL] = useState('http://localhost:3000');

  const addItem = async (obj) => {
    try {
      await axios.post(`${serverURL}/product`, obj);
      console.log(`${obj?.name} added to favourites`);
    } catch (err) {
      console.error(`Makeup product not added to DB: ${err}`);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item?.image_link} />
      <Card.Body>
        <Card.Title>{props.item?.name}</Card.Title>
        <Card.Title>{props.item?.brand}</Card.Title>
        <Card.Title>{props.item?.price}</Card.Title>
        <Card.Text>{props.item?.description}</Card.Text>
        <Button variant='primary' 
          onClick={() => addItem(props.item)}>
            Add
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;