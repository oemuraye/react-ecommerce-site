import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
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
