import React from 'react'
import './Payment.css'
import Header from '../../header/Header'
import { useStateValue } from '../../../StateProvider'
import CheckoutProduct from '../checkout-product/CheckoutProduct'
import { Link } from 'react-router-dom'


const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue()
  return (
    <>
        <Header />
          <div className='payment'>
              <div className='payment__container'>
                  <h1>
                      Checkout {<Link to="/checkout">{basket?.length} items
                       </Link> }
                  </h1>
                  <div className="payment__section">
                      <div className="payment__title">
                          <h3>Delivery Address</h3>
                      </div>
                      <div className="payment__address">
                          <p>{user?.email}</p>
                          <p>123 React Lane</p>
                          <p>Warri, Delta State</p>
                      </div>
                  </div>

                  <div className="payment__section">
                      <div className="payment__title">
                          <h3>Review items and delivery</h3>
                      </div>
                      <div className="payment__items">
                          {basket.map(item => (
                              <CheckoutProduct
                                  id={item.id}
                                  title={item.title}
                                  image={item.image}
                                  price={item.price}
                                  rating={item.rating}
                              />
                          ))}
                      </div>
                  </div>

                  <div className="payment__section">
                      <div className="payment__title">
                          <h3>Payment Method</h3>
                      </div>
                      <div className="payment__details">

                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Payment