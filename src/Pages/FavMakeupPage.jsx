import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import FavItem from '../components/FavItem';
import UpdateItemFormModal from '../components/UpdateItemFormModal';

const FavMakeupPage = () => {
  // many pieces of state, because this container is
  // controlling the stateless components.
  const [serverURL, setServerURL] = useState(
    'http://localhost:3000'
  );
  // all makeup products from db
  const [results, setResults] = useState([]);
  // when to show items
  const [showItems, setShowItems] = useState(false);
  // when the database collection is empty...
  const [showEmpty, setShowEmpty] = useState(false);
  // showing/hiding the update modal
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);
  // for the update modal - the item to modify
  const [itemInfo, setItemInfo] = useState({});
  // the index for  update/delete
  const [index, setIndex] = useState(0);

  // initial fetch of db content for table rows/cards
  useEffect(() => {
    (async () => {
      const resultsDB = await axios.get(`${serverURL}/product`);
      if (resultsDB.data.length !== 0) {
        setResults(resultsDB.data);
        setShowItems(true);
        setShowEmpty(false);
      } else {
        setShowItems(false);
        setShowEmpty(true);
      }
    })();
  }, []);

  // delete one makeup item from DB.
  const deleteItem = async (index) => {
    try {
      const deleted = await axios.delete(`${serverURL}/product/${index}`);
      console.dir('Item deleted: ', deleted);
    } catch (err) {
      console.error('Delete failed: ', err);
    }
    // console.log(results);
    // if (resultsDB.data.length > 0) {
    //   setResults(resultsDB.data);
    //   setShowItems(true);
    //   setShowEmpty(false);
    // } else {
    //   setShowItems(false);
    //   setShowEmpty(true);
    // }
  }

  // display the update modal and check the index value
  const showUpdateModal = async (idx) => {
    const chosenItem = results.find((val) => {
      return val._id === idx;
    });
    setItemInfo(chosenItem);
    setShowUpdateModalStatus(true);
    setIndex(idx);
  };

  const handleCloseUpdate = () => (setShowUpdateModalStatus(false));
  // refresh after an update, all makeup items
  const updateItemsArray = (results) => (setResults(results));


  return (
    <main>
      <h2>Favourite Items</h2>
      {showEmpty && (<p>There is nowt here... add some makeup</p>)}
      <Table striped bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showItems &&
            results.map((item, idx) => (
              <FavItem
                index={idx}
                item={item}
                deleteItem={deleteItem}
                showUpdateModalProps={showUpdateModal}
              />
            ))}
        </tbody>
      </Table>

      <UpdateItemFormModal
          show={showUpdateModalStatus}
          close={handleCloseUpdate}
          itemInfo={itemInfo}
          itemIndex={index}
          updateItemsArray={updateItemsArray}
        />
    </main>
  );
};

export default FavMakeupPage;
