import React from 'react';

export default function AlbumDetails({
  name, artist, img, price,
}) {
  return (
    <div id="albumDetails">
      <div id="albumContainer">
        <img src={img} alt="album cover" />
        <h3>{name}</h3>
        <h5>{artist}</h5>
      </div>
      <div id="albumInfo">
        <h4>{`$${price}`}</h4>
      </div>
    </div>
  );
}
