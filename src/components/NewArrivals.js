import React from 'react';
import Slider from 'infinite-react-carousel';
import albumData from '../albumData';
import AlbumContainer from './AlbumContainer';

export default function NewArrivals({ windowSize }) {
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
  let slideNum;
  if (windowSize.innerWidth > 600) {
    slideNum = 3;
  } else {
    slideNum = 1;
  }
  const settings = {
    autoplay: true,
    autoplaySpeed: 2750,
    slidesToShow: slideNum,
    dots: true,
  };
  return (
    <div id="newArrivalContainer">
      <h1>New Arrivals</h1>
      <Slider {...settings} id="carousel">
        {newCards}
      </Slider>
    </div>
  );
}
