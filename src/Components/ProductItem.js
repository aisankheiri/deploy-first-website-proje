import React from 'react'

const ProductItem = ({productItem,addToCart}) => {
  
  return (
    <div className="work-section-info" >
    <div className="info-boxes-img-container">
      <img className="product-image" src={productItem.image} alt={productItem.name} />
    </div>
    <h2>{productItem.name}</h2>
    <p>{productItem.price}   TL</p>
  
    <div className='product-add-button' onClick={() => addToCart(productItem)}>
      Sepete Ekle
    </div>
  </div>
  )
}

export default ProductItem
