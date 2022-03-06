import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
    const addToBasket = () => {
      // dispatch the item into the data layer
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        return <p>🌟</p>
                    })}
                </div>
            </div>
            <img src={image} alt='product_img' />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product