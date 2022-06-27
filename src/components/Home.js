import React from 'react';
import vinylShop from '../assets/vinyl-shop-1.jpeg';
import NewArrivals from './NewArrivals';

export default function Home() {
  return (
    <div>
      <img src={vinylShop} alt="vinyl shop" id="vinyl-shop-1" />
      <NewArrivals />
    </div>
  );
}
