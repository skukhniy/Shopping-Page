import React from 'react';
import vinylShop from '../assets/vinyl-shop-1.jpeg';
import NewArrivals from './NewArrivals';

export default function Home() {
  return (
    <div>
      <div id="AboutDiv">
        <h1>Welcome to Stanley&#39;s Records</h1>
        <p>
          {`If you’re a passionate music fan, Stanley's Records is the place for you.
          Our goal is to change the way you buy records. `}
        </p>
        <p>
          {`It's not just about the sale.
          It is about finding what excites you in music.
          We have an amazing selection to pick from and it changes every week.`}
        </p>
        <p>
          {`Not finding what you want? We will do the best we can to locate it for you.
          Just ask :)`}
        </p>
      </div>
      <img src={vinylShop} alt="vinyl shop" id="vinyl-shop-1" />
      <NewArrivals />
    </div>
  );
}
