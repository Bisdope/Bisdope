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



function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home/>}/> 
      <Route path="/cart" element ={<Cart/>}/>
      {/* <Route path="/Checkout" element ={<Checkout/>}/>
      <Route path="/History" element ={<History/>}/>
      <Route path="/Product" element ={<Product/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/Shop" element ={<Shop/>}/>
      <Route path="/Sign" element ={<Sign/>}/> */}
    </Routes>
    </BrowserRouter>
  
   
    
  );
}

export default App;
