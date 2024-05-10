import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import "./Product_details.css"
import ChairsImg from '../Assets/images/chair 2.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { allProducts } from "../utils/products";

const Product = ()=>{
  
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
       
  
    const[cart, setCart] = useState([]);
   return(
    <>
   <Navbar setCart={setCart} cart ={cart}   />

   <div className="product-body">
       
            <div className="section">
               <div className="product-sect">
                        <div className="text2">
                        <FontAwesomeIcon icon={faProductHunt} className="font-product"/>
                         <h1 className="hero-text">Details</h1>
                    
                        </div>
                  </div>
            </div>

         </div>
         <div className="product-section">
            <div className="product-details">
             <div className="image-case">
                  <img src={ChairsImg} className="large-photo"/>
             </div>
             <div className="text-case">
            <div className="head">
                <h1 className="heading">Classy Aarnio Chair</h1>
                        <span className="rating" >5.0 &#9734;&#9734;&#9734;&#9734;&#9734;</span>
                        <span className="second-rating">100 Rating</span>
                        <span className="second-rating">500 Sold</span><br/>
                        <h1 className="heading">$120.00</h1>
            </div>
              

               <span className="description-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis leo ut lacus dictum dignissim. Phasellus et orci sed magna luctus  luctus. Vestibulum tristique quis elit non rutrum. Vestibulum pretium ut arcur.  <br/> vel maximus. Duis consectetur vitae. Maecenas rhoncus tellus nec quam pellentesque, eget porta quam pretium. Aenean urna nisi, pulvinar et lobortis at, venenatis ac enim. Nulla auctor, lorem sed dapibus gravida, turpis tortor placerat ipsum, quis convallis dui dui vel.

                </span> 
               <select name="" className="select-option">
                  <option value="small" className="option">Small</option>
                  <option value="medium" className="option" >Medium</option>
                  <option value="large" className="option">Large</option>
                  

               </select>
               <div className="quantity-div">
               <span className="cart-qty-control2"onClick={increaseQtyInCart}  >-</span>
               <button className="figures">{cart?.quantity}0</button>
               <span className="cart-qty-control2" onClick={decreaseQtyInCart} >+</span>

            </div>
            <span className="description-text">
               80 pieces available
            </span> <br/>
            <button className="product-addtocart-buttton">
               Add to Cart
            </button>
               
             </div>
          </div>
       </div>

       <div className="other-products">

       </div>


    </>

 
    

   )


}


export default Product;