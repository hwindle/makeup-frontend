import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return(
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Brand>Eyeshadows</Navbar.Brand>
      <Link to="/">All Products</Link>
      <Link to="/favourites">Favourites</Link>
      {/* <Link to="/about">About</Link> */}
    </Navbar>
  );
};

export default Header;