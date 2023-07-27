import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Web from "./Components/Web";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart/Cart";
import { useState } from 'react';

function App({addToCart,handleRemoveProduct}) {
  const [cartItems,setCartItems] = useState([]);
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Web cartItems={cartItems}/>} />
          <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} handleRemoveProduct={handleRemoveProduct}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
