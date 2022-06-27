import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './styles/App.scss';
import AlbumDetails from './components/AlbumDetails';
import albumData from './albumData';

function App() {
  const albumRoutes = albumData.map((albums) => (
    <Route path={`/shop/${albums.id}`} element={<AlbumDetails name={albums.name} artist={albums.artist} price={albums.price} img={albums.image} />} />
  ));
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {albumRoutes}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
