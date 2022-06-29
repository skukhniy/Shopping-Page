import React from 'react';
import albumData from '../albumData';
import AlbumContainer from './AlbumContainer';

export default function Shop() {
  const renderItems = albumData.map((albums) => (
    <AlbumContainer
      imgsrc={albums.image}
      name={albums.name}
      artist={albums.artist}
      price={albums.price}
      id={albums.id}
      backgroundColor={albums.backgroundColor}
    />
  ));
  return (
    <div id="shopContainer">
      {renderItems}
    </div>
  );
}
