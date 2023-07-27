import React from "react";
import "./Cart.css";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import Logo from "../Back/Logo.svg";

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handleAddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alertify.success(`${product.name} 1 arttırıldı.`, 4);
    //saniye belirlemek ,4
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
    alertify.success(`${product.name} 1 azaldı.`, 4);
    //saniye belirlemek ,4
  };
  const handleCartClearest = () => {
    setCartItems([]);
  };

  return (
    <div className="cart-items">
      <div className="cart-navbar">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Ana Sayfa
        </Link>
        <Link to="/menu" style={{ textDecoration: "none", color: "black" }}>
          Menüler
        </Link>
      </div>
      <div className="cart-header">Sepete Hoş Geldiniz</div>

      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearest}>
            Sepeti Temizle
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">
          Sepetiniz Boş Lütfen Sipariş Oluşturunuz
        </div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddToCart(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-item-price">
              {item.quantity} x {item.price}TL
            </div>
          </div>
        ))}
      </div>
      <div className="cart-order">
          {cartItems.length >= 1 && (
            <button className="cart-order-button">Siparişi Tamamla</button>
          )}
        </div>

      <div className="cart-items-total-price-name">
        {cartItems.length >= 1 && (
          <div className="cart-items-total-price">
            Toplam Fiyat ={totalPrice} TL
          </div>
        )}

       

      </div>

    </div>
  );
};

export default Cart;
