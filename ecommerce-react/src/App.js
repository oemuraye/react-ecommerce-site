import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Payment from "./components/checkout/payment/Payment";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/header/Header";

const promise = loadStripe(
  "pk_test_51KeEL5DM9OT0Ieqg9h8RtCgQINKnvyiJiC7RKg3w8mm8zFWWYlAHGWLWBhUK14wZBtNjf08h5FHnthUw5OB7hW0T00AXFjySRv"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/checkout"
            exact
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            exact
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
