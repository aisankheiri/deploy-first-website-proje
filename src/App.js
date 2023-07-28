import "./App.css";
import { BrowserRouter as Router, json } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Web from "./Components/Web";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart/Cart";
import { useEffect, useState } from 'react';

function App({addToCart,handleRemoveProduct}) {
  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    const cartItems = localStorage.getItem("cartItems")
    setCartItems(JSON.parse(cartItems))
  },[])//ilk render da calismasi icin ,[] koyuldu

  useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
  })
  
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
