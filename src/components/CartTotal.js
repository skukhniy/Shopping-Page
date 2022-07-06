import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({ cartArray }) {
  // add prices together, returns array with subtotal/tax/total
  function fetchSummary() {
    let subtotal = 0;
    cartArray.forEach((item) => {
      subtotal += (item.quantity * item.price);
    });
    subtotal = Math.round(subtotal * 100) / 100;
    const taxrate = 0.09;
    const tax = Math.round((subtotal * taxrate) * 100) / 100;
    const total = Math.round((subtotal + tax) * 100) / 100;

    return [subtotal.toFixed(2), tax.toFixed(2), total.toFixed(2)];
  }
  // asign variables that need to be printed onto the screen
  const summary = fetchSummary();
  const subtotal = summary[0];
  const tax = summary[1];
  const total = summary[2];

  return (
    <div id="cartTotalContainer">
      <h3>Order Summary</h3>
      <div id="totalCalc">
        <p>
          Subtotal:
          <span>{`$${subtotal}`}</span>
        </p>
        <p>
          Tax:
          <span>{`$${tax}`}</span>
        </p>
        <p>
          Shipping:
          <span>Free</span>
        </p>
        <h4 id="total">
          Total:
          <span>{`$${total}`}</span>
        </h4>
      </div>
      <Link to="/shopping-page/checkout"><button id="checkoutButton" type="button">Check Out</button></Link>
      <Link to="/shopping-page/checkout">
        <button type="button" id="paypalCheckout">
          <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" />
        </button>
      </Link>
      <img id="acceptedPayment" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppmcvdam.png" alt="Buy now with PayPal" />
    </div>
  );
}
