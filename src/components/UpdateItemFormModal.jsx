import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const updateFormCSS = {
  padding: '1rem',
  margin: '1rem'
};


function UpdateItemFormModal(props) {
  const updateItemInfo = async (e) => {
    e.preventDefault();
    const itemData = {
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: parseFloat(e.target.price.value),
      imageUrl: e.target.img.value,
      description: e.target.description.value,
    };

    console.log('Update data: ', itemData);
    const results = await axios.put(
      `http://localhost:3000/product/${props.itemIndex}`,
      itemData
    );
    props.close();
    updateItemsArray(results.data);
  };

  const updateItemsArray = (data) => {
    props.updateItemsArray(data);
  };

  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
      </Modal.Header>
      <Form onSubmit={updateItemInfo} style={updateFormCSS}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.name}
            type='text'
            name='name'
          />
        </Form.Group>
        <Form.Group controlId='brand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.brand}
            type='text'
            name='brand'
          />
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.price}
            type='text'
            name='price'
          />
        </Form.Group>
        <Form.Group controlId='image'>
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.imageUrl}
            type='text'
            name='img'
          />
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            defaultValue={props.itemInfo.description}
            type='text'
            name='description'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update Makeup
        </Button>
      </Form>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateItemFormModal;
