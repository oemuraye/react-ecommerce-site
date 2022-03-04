import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>29.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' alt='product_img' />

            <button>Add to Basket</button>
        </div>
    );
}

export default Product