import React, { useState } from 'react';
import CartModal from './CartModal';
import albumData from '../albumData';

export default function AlbumDetails({
  name, artist, img, price, cartArray, setCart, id, backgroundColor,
}) {
  const [displayModal, setDisplayModal] = useState(false);

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
      const oldArray = [...cartArray];
      const albumIndex = cartArray.findIndex((x) => x.id === id);
      oldArray[albumIndex].quantity += quantity;
      setCart(oldArray);
    }
  }

  return (
    <div id="albumDetails" style={{ backgroundColor: `${backgroundColor}` }}>
      {displayModal && (
      <div className={`Modal ${displayModal ? 'Show' : ''}`}>
        <CartModal
          name={name}
          artist={artist}
          img={img}
          price={price}
          cartArray={cartArray}
        />
      </div>
      )}
      <div id="albumContainer">
        <img src={img} alt="album cover" />
      </div>
      <div id="albumInfo">
        <h1>{name}</h1>
        <h3>{artist}</h3>
        <h4>{`$${price}`}</h4>
        <div id="quantitySelector">
          <p>Quantity:</p>
          <input type="number" pattern="[0-9]*" min="1" max="9" defaultValue={1} onChange={updateQuantity} />
        </div>
        <div>
          <button type="button" onClick={() => { addToCart(); setDisplayModal(true); }}>Add to Cart</button>
        </div>
      </div>
      {displayModal && (
      <div
        className={`Overlay ${displayModal ? 'Show' : ''}`}
        onClick={() => setDisplayModal(!displayModal)}
      />
      )}
    </div>
  );
}
