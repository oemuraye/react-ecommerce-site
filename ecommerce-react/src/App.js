import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>> ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, [])
  
  return (
    // BEM
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/checkout' exact element={<Checkout/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
