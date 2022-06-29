import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './styles/App.scss';
import AlbumDetails from './components/AlbumDetails';
import albumData from './albumData';
import FakeStore from './components/FakeStore';

function App() {
  const [cartArray, setCart] = useState([]);

  // generates webpages for every album
  const albumRoutes = albumData.map((albums) => (
    <Route
      path={`/shop/${albums.id}`}
      element={(
        <AlbumDetails
          name={albums.name}
          artist={albums.artist}
          price={albums.price}
          img={albums.image}
          id={albums.id}
          backgroundColor={albums.backgroundColor}
          cartArray={cartArray}
          setCart={setCart}
        />
)}
    />
  ));
  return (
    <div>
      <BrowserRouter>
        <Navbar cartArray={cartArray} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {albumRoutes}
          <Route path="/cart" element={<Cart cartArray={cartArray} setCart={setCart} />} />
          <Route path="/checkout" element={<FakeStore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
