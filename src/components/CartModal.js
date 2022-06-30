import React from 'react';

export default function CartModal({
  name, artist, img, price,
}) {
  return (
    <div id="CartModalContainer">
      <div id="ModalHeader">
        <p>Added to your cart</p>
      </div>
      <div id="albumModal">
        <img src={img} alt="album cover" />
        <div id="albumModalDetails">
          <h4>{`${artist} - ${name}`}</h4>
          <h5>{`$${price}`}</h5>
        </div>
      </div>
    </div>
  );
}
