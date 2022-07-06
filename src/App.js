import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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
      <HashRouter>
        <Navbar cartArray={cartArray} />
        <Routes>
          <Route exact path="/shopping-page/" element={<Home />} />
          <Route path="/shopping-page/shop" element={<Shop />} />
          {albumRoutes}
          <Route path="/shopping-page/cart" element={<Cart cartArray={cartArray} setCart={setCart} subtotalState={subtotalState} setSubtotal={setSubtotal} />} />
          <Route path="/shopping-page/checkout" element={<FakeStore />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
