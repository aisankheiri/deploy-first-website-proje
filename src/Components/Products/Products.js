import React from "react";
import "./Products.css";
import alertify from "alertifyjs";
import ProductItem from "../ProductItem";

const Products = ({ productItems, cartItems, setCartItems }) => {

  const addToCart = (product) => {
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
    alertify.success(`${product.name} sepete eklendi.`, 4);
    //saniye belirlemek ,4
  };

  
  
  return (
    <div className="work-section-bottom">
      {productItems.map((productItem) => (
        <ProductItem
          productItem={productItem}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
