import React from "react";
import { useStateValue } from "../../StateProvider";
import Header from "../header/Header";
import CheckoutProduct from "./checkout-product/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./subtotal/Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/DCC_Amazon1._CB423492668.jpg"
            alt="checkout_ad_image"
          />

          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket.map((item) => (
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

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
