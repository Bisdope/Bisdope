
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ChairImg from '../Assets/images/chair1.png';
import ChairsImg from '../Assets/images/chair 2.png';
import ChairssImg from '../Assets/images/chair 4.png';
const Shop=()=>{
    return(
      <>
      <Navbar />
      <div className ="bodys" style={{display:'flex'}}>
        <div className='modern'>
          <h1>Shop</h1>
        </div>
     </div>
    
      <div className="row" style={{ backgroundColor:"#C1E1C1", paddingLeft:"40px",paddingRight:"40px", paddingTop:"40px"}}>
          <div className="col-md-3 sidebar" style={{justifyContent:"center",paddingLeft:"70px",backgroundColor:"#C1E1C1"}}>
             <h2>Chairs</h2>
             <ul style={{listStyle:"none"}} >
                <li>
                  <Link to="/shop" className="shop-link"> Shirts & Tops </Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Dresses</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Shorts & Skirts</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jackets</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Sleeveless</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Trousers</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Winter Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jumpsuits</Link>
                </li>
             </ul>
             <h2>Tables</h2>
             <ul style={{listStyle:"none"}} >
                <li>
                  <Link to="/shop" className="shop-link"> Shirts & Tops </Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Dresses</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Shorts & Skirts</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jackets</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Sleeveless</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Trousers</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Winter Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jumpsuits</Link>
                </li>
             </ul>
             <h2>Dinning Sets</h2>
             <ul style={{listStyle:"none"}} >
                <li>
                  <Link to="/shop" className="shop-link"> Shirts & Tops </Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Dresses</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Shorts & Skirts</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jackets</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Sleeveless</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Trousers</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Winter Coats</Link>
                </li>
                <li>
                <Link to="/shop" className="shop-link">Jumpsuits</Link>
                </li>
             </ul>
          </div>
          <div className="col-md-9 content " style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            <div className="row ">
            
              <div className="col-md-4 px-2 py-2">
                <div className="cards" style={{height:"400px" }}>
                <img src={ChairImg} alt ='Chair Image'  style={{height:"250px"}} />
                 <div className="buttons">
                      <button className='Ones'>Add to cart</button>
                       <button className='Twos'>Buy now</button>
                </div> 
                <div className="lower">
                   <p>Nordic Chair</p>
                   <h5>$50.00</h5>
                 </div>
                </div>
              </div> 
              
              <div className="col-md-4 px-2 py-2 ">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairsImg} alt ='Chairs Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                      <h5>$50.00</h5>
                 </div>
                </div>
              </div>
              <div className="col-md-4 px-2 py-2 ">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairssImg} alt ='Chairss Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 </div>
                </div>
              </div>
              <div className="col-md-4 px-2 py-2">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairImg} alt ='Chair Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 </div>
                </div>
              </div>
              <div className="col-md-4 px-2 py-2 ">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairssImg} alt ='Chairss Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 </div>
                </div>
              </div>
              <div className="col-md-4 px-2 py-2">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairsImg} alt ='Chairs Image'  style={{height:"250px"}}/>
                
                    <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 
                 </div>
                
                </div>
              </div>
              <div className="col-md-4 px-2 py-2">
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairssImg} alt ='Chairss Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 </div>
                </div>
              </div>
              <div className="col-md-4 px-2 py-2" >
                 <div className="cards"style={{height:"400px"}}>
                 <img src={ChairsImg} alt ='Chairs Image'  style={{height:"250px"}}/>
                  <div className="lower">
                      <p>Nordic Chair</p>
                  <h5>$50.00</h5>
                 </div>
                </div>
              </div>
            </div>
          </div>

    
      </div>
      </>
      
    );
}
export default Shop;