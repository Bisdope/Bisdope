import {  useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ChairImg from '../Assets/images/chair1.png';
import ChairsImg from '../Assets/images/chair 2.png';
import ChairssImg from '../Assets/images/chair 4.png';
import Sidebar from "../Components/Sidebar";
import Product from "./Product";
import { allProducts } from "../services/apis";
const Shop=()=>{
    const [cart , setCart] = useState([]);
    const [products, setProducts] = useState([]);

    const increaseQtyInCart = (product_id) => {
      let cartClone = [...cart]
      const itemIndex = cartClone.findIndex((item)=>{
        return item.id === product_id
      }
      
    )
    if(itemIndex !== -1){
      cartClone[itemIndex].quantity += 1;
      setCart(cartClone)
    }
    }

    const addToCart =(product_id) => {
      let currentCart = [...cart];
     const productIndexInCart = currentCart.findIndex((product)=>{
      return product.id ===product_id
     });
     currentCart.forEach((product)=>{
      if(product.id === product_id){
        product.quantity += 1
      }
     })
     if (productIndexInCart!== -1){
      console.log(productIndexInCart);
      currentCart[productIndexInCart].quantity += 1
     }else{
      let target_product = products.find((product)=>{
        return product.id === product_id
      });
      if(target_product){
        console.log(target_product);
        target_product.quantity = 1;
        currentCart.push(target_product);
      }
     }
     setCart(currentCart);
     localStorage.setItem('cart',JSON.stringify(currentCart))
    }

    const getProducts = async () => {
      const get_products = await allProducts();
      if(get_products?.length > 0){
        setProducts(get_products)
      }
    }

    useEffect(()=>{
      getProducts();
    },[]);
 
    return(
      <>
      <Navbar cart={cart} setCart={setCart} addToCart={addToCart}/>
      <div className ="bodys" style={{display:'flex',width:"100%"}}>
        <div className='modern'>
          <h1>Shop</h1>
        </div>
     </div>
    
      <div className="row" style={{ backgroundColor:"#C1E1C1", paddingLeft:"40px",paddingRight:"40px", paddingTop:"40px",width:"100%"}}>
        <Sidebar/>
          <div className="col-md-9 content " style={{justifyContent:"space-between"}}>
            <div className="row ">
              {products?.length > 0 ?
                products.map((product,index)=>(
                  <div className="col-md-4 px-2 py-2" key={index}>
                    <div className="product-card" style={{height:"400px" }}>
                      <div className="product-card-upper">
                        <div className="overlay"></div>
                          <img src={product.cover_photo} alt ='Chair Image'  style={{height:"200px"}} className="image"/>
                          <div className="buttons">
                            <button className='Ones' onClick={()=>{
                              addToCart(product.id)
                            }}>Add to cart</button>
                            <button className='Twos'>Buy now</button>
                          </div> 
                          <div className="lower">
                            <p>{product.name}</p>
                            <h5>${product.price}</h5>
                          </div>
                      </div>
                    
                    
                      </div>
                  </div>  
                ))
              :
                <div className="text-danger text-center">No Products found</div>
              }
            </div>
          </div>

    
      </div>
      </>
      
    );
}
export default Shop;