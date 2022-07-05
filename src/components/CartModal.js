import React from 'react';
import { Link } from 'react-router-dom';

export default function CartModal({
  name, artist, img, price, subtotalState, items, setSubtotal, setItems, cartArray,
}) {
  // calculate new totals
  let subtotal = 0;
  let itemTotal = 0;
  console.log(cartArray);
  cartArray.forEach((item) => {
    subtotal += (item.quantity * item.price);
    itemTotal += item.quantity;
  });
  subtotal = Math.round(subtotal * 100) / 100;
  setSubtotal(subtotal); // adjusts the subtotal state
  setItems(itemTotal); // adjusts the item count

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
      <div id="modalSubtotal">
        {`Subtotal (${items} items):`}
        <span>{`$${subtotalState}`}</span>
      </div>
      <Link to="/cart"><button type="button">View Cart</button></Link>
    </div>
  );
}
