import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Item from '../components/Item';

const allProductsWrapper = {
  display: 'flex',
  flexFlow: 'row wrap',
  padding: '5rem'
};

const APIProducts = () => {
  // state
  const [serverURL, setServerURL] = useState('http://localhost:3000');
  // all makeups: makeupArray
  const [results, setResults] = useState([]);
  // show items on completed data fetch
  const [showItems, setShowItems] = useState(false);

  // Get data once on first render
  useEffect(() => {
    // Immediately invoked function expression
    (async () => {
      const products = await axios.get(`${serverURL}/productsapi`);
      setResults(products.data);
      console.dir(results);
      setShowItems(true);
    })();
  }, []);

  return (
    <main>
      <h1>All Eyeshadow Products</h1>
      <p>A collection of eyeshadows from the free https://makeup-api.herokuapp.com/ makeup API. You can also search by brand, or by tags. <a href='https://makeup-api.herokuapp.com/' target='_blank'>More Info on the API</a>.</p>
      <div style={allProductsWrapper}>
        { showItems && 
          results.map((item, index) => (
          <Item index={index} item={item} />
          ))
        }
      </div>
    </main>
  );
};

export default APIProducts;