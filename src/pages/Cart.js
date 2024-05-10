import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import './cart.css';

const Cart = ()=>{
  
    const increaseQtyInCart = (product_id) => {
        let cartClone = [...cart]
        const itemIndex = cartClone.findIndex((item)=>{
          return item.id === product_id
        }
        
      )
      if(itemIndex !== -1){
        cartClone[itemIndex].quantity += 1;
        setCart(cartClone);
        localStorage.setItem('cart',JSON.stringify(cartClone))
      }
      }

      
    const decreaseQtyInCart = (product_id) => {
        let cartClone = [...cart]
        const itemIndex = cartClone.findIndex((item)=>{
            
          return item.id === product_id
        }
        
      )
      if (itemIndex !== -1) {
          cartClone[itemIndex].quantity -= 1;
          if (cartClone[itemIndex].quantity === 0) {
            cartClone.splice(itemIndex, 1); 
          }
          setCart(cartClone);
          localStorage.setItem('cart',JSON.stringify(cartClone))
        
         }
      }
      const sumCartTotal = (arr) =>  {
        let total = 0;
        arr.forEach(item=>{
            total = total + (item.quantity * item.price)
        })
        return total;
      }
       
  
    const[cart, setCart] =useState([]);
    return(
     <>
    <Navbar cart={cart} setCart={setCart} />
    
 
     
     <div className="cart">
       <div className="cart-line">
          <div className="listing">
             <h3 className="list-table">Image</h3>
             <h3 className="list-table">Product</h3>
             <h3 className="list-table">Price</h3>
             <h3 className="list-table">Quantity</h3>
             <h3 className="list-table">Total</h3>
             <h3 className="list-table">Remove</h3>
 
          </div>
       <hr className="full-width-hr2" />
       {cart?.map((item,index)=>(
        <div key={index}>

            <div className="details">
          <img src={item?.image}alt="chair" className="small-chair" />
          <h3 className="rows">{item?.title}</h3>
          <p className="dollar">${item?.price.toFixed(2)}</p>
          <div className="semi-div">
             <span className="cart-qty-control"  onClick={()=>decreaseQtyInCart(item?.id)}>-</span>
             <button className="figure">{item?.quantity}</button>
             <span className="cart-qty-control" onClick={()=>increaseQtyInCart(item?.id)}>+</span>
 
          </div>
          <p className="dollar">${item.price * item.quantity}</p>
          <h4  className="dollar1">x</h4>
 
 
       </div>
       <hr className="full-width-hr3" /> 
       </div>
       )
       )}
      
       <div className="third-line">
          <Link to ="/" ><button className="but5">Update Cart</button></Link>
         <Link to = "/"> <button className ="but6">Continue Shopping</button></Link>
         <div className="cart-total">
          <h2 className="cart-total-text">CART TOTALS</h2>
          <hr className="small-hr"/>
         </div>
       </div>
 
       <div className="final-div">
          <div className="first-final">
             <h3 className="coupon">Coupon</h3>
             <p className="coupon-text">
                Enter your coupon code if you have one
             </p>
             <div className="coups">
                <input className="coup" placeholder="coupon code"/>
                <Link to ="/" ><button className="but7" >Apply <br/> Coupon</button></Link>
             </div>
 
 
          </div>
          <div className="second-final">
             <div className="price-flex">
             <p className="price-total">Subtotal</p>
             <p className="price-figure">${sumCartTotal(cart)}</p>
 
 
             </div>
             <div className="price-flex">
             <p className="price-total2">Total</p>
             <p className="price-figure2">${sumCartTotal(cart)}</p>
             </div>
 
             <Link to = "/Checkout"> <button className ="but6">Proceed To Checkout</button></Link>
 
 
          </div>
       </div>
 
       </div>
 
 
 
     </div>
 
     </>
       );
    }
 
     export default Cart;