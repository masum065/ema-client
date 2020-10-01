import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
  const handleAddProduct = () => {
    fetch('https://nameless-ridge-66648.herokuapp.com/addProduct', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(fakeData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={handleAddProduct}>Add Products</button>
    </div>
  );
};

export default Inventory;
