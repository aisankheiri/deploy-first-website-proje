import React from 'react'
import Products from './Products/Products'
import data from "./Back/Data";
import { Link } from "react-router-dom";
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from "react-icons/bs";
import '../Components/Cart/Cart.css'


const Menu = ({ cartItems, setCartItems, addToCart, handleRemoveProduct }) => {
  const { productItems } = data;
  // Sepetteki toplam ürün miktarını hesapla
  let totalQuantity = 0;
  cartItems.forEach(item => {
    totalQuantity += item.quantity;
  });

  return (
    <div>
      <div className="cart-navbar">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Ana Sayfa
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <BsCart2/>{cartItems.length >= 1 && <span className="cart-ikon" >{totalQuantity}</span>}
        </Link>
      </div>
      <Products productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} handleRemoveProduct={handleRemoveProduct} />

    </div>
  )
}

export default Menu
