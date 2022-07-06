import React from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';

export default function Cart({
  cartArray, setCart, subtotalState, setSubtotal,
}) {
  window.scrollTo(0, 0);
  let cartCards = cartArray.map((albums) => (
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
  if (cartCards.length === 0) {
    cartCards = <p id="cartEmpty">Cart is Empty</p>;
  }

  return (
    <div id="cartContainer">
      <div id="cartList">
        <h3>My Cart</h3>
        {cartCards}
      </div>
      <div id="checkoutTotal">
        <CartTotal cartArray={cartArray} subtotalState={subtotalState} setSubtotal={setSubtotal} />
      </div>
    </div>
  );
}
