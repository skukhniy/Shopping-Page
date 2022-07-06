import React from 'react';
import { Link } from 'react-router-dom';

export default function AlbumContainer({
  imgsrc, name, artist, price, id,
}) {
  return (
    <Link to={`/shop/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div id="shopCard">
        <img src={imgsrc} alt="album" />
        <h3>{name}</h3>
        <h5>{artist}</h5>
        <p>{`$${price}`}</p>
      </div>
    </Link>
  );
}
