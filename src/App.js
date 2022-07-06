import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/App.scss';
import AlbumDetails from './components/AlbumDetails';
import albumData from './albumData';
import FakeStore from './components/FakeStore';

function App() {
  const [cartArray, setCart] = useState([]);
  const [subtotalState, setSubtotal] = useState(0);
  const [items, setItems] = useState(0);

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
          subtotalState={subtotalState}
          setSubtotal={setSubtotal}
          items={items}
          setItems={setItems}
        />
)}
    />
  ));
  return (
    <div>
      <BrowserRouter>
        <Navbar cartArray={cartArray} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {albumRoutes}
          <Route path="/cart" element={<Cart cartArray={cartArray} setCart={setCart} subtotalState={subtotalState} setSubtotal={setSubtotal} />} />
          <Route path="/checkout" element={<FakeStore />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
