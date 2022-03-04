import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';


function App() {
  return (
    // BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
