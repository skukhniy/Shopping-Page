import React from 'react';
import Slider from 'infinite-react-carousel';
import albumData from '../albumData';
import AlbumContainer from './AlbumContainer';

export default function NewArrivals() {
  const newArray = albumData.filter((album) => album.newArrival === true);
  const newCards = newArray.map((albums) => (
    <AlbumContainer
      imgsrc={albums.image}
      name={albums.name}
      artist={albums.artist}
      price={albums.price}
      id={albums.id}
    />
  ));
  const settings = {
    autoplay: true,
    autoplaySpeed: 2750,
    slidesToShow: 3,
    dots: true,
  };
  return (
    <div id="newArrivalContainer">
      <h1>New Arrivals</h1>
      <Slider {...settings} id="carousel">{newCards}</Slider>
    </div>
  );
}
