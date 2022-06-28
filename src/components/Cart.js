import React from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';

export default function Cart({ cartArray, setCart }) {
  const cartCards = cartArray.map((albums) => (
    <CartCard
      name={albums.name}
      artist={albums.artist}
      price={albums.price}
      img={albums.image}
      id={albums.id}
      quantity={albums.quantity}
      cartArray={cartArray}
      setCart={setCart}
    />
  ));
  return (
    <div id="cartContainer">
      <div id="cartList">
        <h3>My Cart</h3>
        {cartCards}
      </div>
      <div id="checkoutTotal">
        <CartTotal cartArray={cartArray} />
      </div>
    </div>
  );
}
