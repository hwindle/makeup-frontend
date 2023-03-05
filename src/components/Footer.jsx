import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Footer extends React.Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: 'var(--pink)',
          color: 'var(--off-black)',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        <Row>&copy; Copyright 2023</Row>
      </Container>
    );
  }
}

export default Footer;
