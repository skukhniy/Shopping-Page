import React, { useState } from 'react';
import albumData from '../albumData';

export default function AlbumDetails({
  name, artist, img, price, cartArray, setCart, id,
}) {
  const [quantity, setQuantity] = useState(1);

  // fix the current quantity under state
  function updateQuantity(e) {
    const num = parseInt(e.target.value);
    setQuantity(num);
  }
  function addToCart() {
    // grab album data
    const albumObj = albumData.find((x) => x.id === id);

    // if album isnt already in the cart array, add it
    // otherwise find the album data in the cart array and adjust the quantity.
    if (cartArray.find((x) => x.id === id) === undefined) {
      albumObj.quantity = quantity;
      setCart([...cartArray, albumObj]);
    } else {
      const oldArray = cartArray;
      const albumIndex = cartArray.findIndex((x) => x.id === id);
      oldArray[albumIndex].quantity += quantity;
    }
  }

  return (
    <div id="albumDetails">
      <div id="albumContainer">
        <img src={img} alt="album cover" />
        <h3>{name}</h3>
        <h5>{artist}</h5>
      </div>
      <div id="albumInfo">
        <h4>{`$${price}`}</h4>
        <div id="quantitySelector">
          <p>Quantity:</p>
          <input type="number" pattern="[0-9]*" min="1" max="9" defaultValue={1} onChange={updateQuantity} />
        </div>
        <div>
          <button type="button" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
