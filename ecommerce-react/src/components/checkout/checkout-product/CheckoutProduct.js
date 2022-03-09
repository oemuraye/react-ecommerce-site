import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const removeFromBasket = () => {
        // remove the item from the basket
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt='product_image' />
    
        <div className='checkoutProduct__info'>
              <p className='checkoutProduct__title'>{title}</p>
              <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="checkoutProduct__rating">
                  {Array(rating).fill().map(() => {
                      return <p>🌟</p>
                  })}
              </div>
              <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct