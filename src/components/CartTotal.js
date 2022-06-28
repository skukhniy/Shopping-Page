import React from 'react';

export default function CartTotal({ cartArray }) {
  // add prices together
  function fetchSubtotal() {
    let subtotal = 0;
    cartArray.forEach((item) => {
      subtotal += (item.quantity * item.price);
    });
    subtotal = Math.round(subtotal * 100) / 100;
    return subtotal;
  }
  return (
    <div id="cartTotalContainer">
      <h3>Order Summary</h3>
      <div id="totalCalc">
        <p>
          Subtotal:
          <span>{`$${fetchSubtotal()}`}</span>
        </p>
        <p>
          Shipping:
          <span>Free</span>
        </p>
        <h4 id="total">
          Total:
          <span>{`$${fetchSubtotal()}`}</span>
        </h4>
      </div>
      <button type="button">Check Out</button>
    </div>
  );
}
