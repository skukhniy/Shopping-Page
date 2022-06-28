import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function CartCard({
  name, artist, price, img, quantity, id, cartArray, setCart,
}) {
  const [albumQuantity, setQuantity] = useState(quantity);
  // fix the current quantity under state
  function updateQuantity(e) {
    const num = parseInt(e.target.value);
    setQuantity(num); // update quantity
    // update cart array
    const oldArray = cartArray;
    const albumIndex = cartArray.findIndex((x) => x.id === id);
    oldArray[albumIndex].quantity = num;
  }

  function removeItem() {
    const oldArray = [...cartArray];
    const newArray = oldArray.filter((x) => x.id !== id);
    setCart(newArray);
  }

  return (
    <div id="cartCardContainer">
      <img src={img} alt="album cover" />
      <p className="albumName">{`${artist} - ${name} `}</p>
      <input type="number" pattern="[0-9]*" min="0" max="9" defaultValue={albumQuantity} onChange={updateQuantity} />
      <p className="price">{`$${price}`}</p>
      <FaTimes id="deleteItem" onClick={removeItem} />

    </div>
  );
}
