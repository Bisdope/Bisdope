import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import History from './pages/History';
import Product from './pages/Product';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Sign from './pages/Sign';
import About from './pages/About';



function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/> 
      <Route path="/cart" element ={<Cart/>}/>
      <Route path="/checkout" element ={<Checkout/>}/>
      <Route path="/history" element ={<History/>}/>
      <Route path="/product" element ={<Product/>}/>  
      <Route path="/login" element ={<Login/>}/>
      <Route path="/shop" element ={<Shop/>}/>
      <Route path="/sign" element ={<Sign/>}/>
      <Route path="/about" element ={<About/>}/>
    </Routes>
    </BrowserRouter>
  
   
    
  );
}

export default App;
