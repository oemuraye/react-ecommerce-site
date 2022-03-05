import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/checkout' exact element={<Checkout/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
