/* alert!!!!
its will not work 
think its a react app and this file path is src/app.js  */






import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  const addToCart = () => addToDb(id);

  const removeFromCart = id => {
    removeFromDb(id);
  }

  return (
    <div className='product'>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;