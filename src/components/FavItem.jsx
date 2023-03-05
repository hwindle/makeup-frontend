import { Button } from 'react-bootstrap';

const FavItem = ({ index, item, showUpdateModal, deleteItem }) => {
  return (
    <tr key={index}>
      <td>
        <img className='table-image' src={item?.imageUrl} alt={item?.name} />
      </td>
      <td className='name-bold'>
        {item?.name}
      </td>
      <td>
        £{item?.price}
      </td>
      <td>
        {item?.description}
      </td>
      <td className='update-col'>
        <Button variant='success' onClick={() => showUpdateModal(item._id)}>Update</Button>
      </td>
      <td className='delete-col'>
        <Button variant='warning' onClick={() => deleteItem(item._id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default FavItem;