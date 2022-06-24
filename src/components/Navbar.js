import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaCompactDisc } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div id="Navbar">
      <h1>
        <FaCompactDisc id="vinyl" size="1.5em" />
        Stanley&#39;s Records
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart" id="shopping-cart-a">
              <FaShoppingCart id="shopping-cart" size="1.5em" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
