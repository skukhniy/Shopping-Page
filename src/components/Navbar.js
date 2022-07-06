import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCompactDisc } from 'react-icons/fa';

export default function Navbar({ cartArray }) {
  let cartNumber;
  if (cartArray.length !== 0) {
    let cartAmt = 0;
    cartArray.forEach((album) => {
      cartAmt += album.quantity;
    });
    cartNumber = (
      <div id="cartNumber">
        <p>{String(cartAmt)}</p>
      </div>
    );
  }
  return (
    <div id="Navbar">
      <h1>
        <FaCompactDisc id="vinyl" size="1.5em" />
        Stanley&#39;s Records
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/shopping-page/">Home</Link>
          </li>
          <li>
            <Link to="/shopping-page/shop">Shop</Link>
          </li>
          <li>
            <Link to="/shopping-page/cart" id="shopping-cart-a">
              <FaShoppingCart id="shopping-cart" size="1.5em" />
              {cartNumber}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
