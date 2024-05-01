import { Link } from "react-router-dom";
const Sidebar =()=>{
    return(
        <>
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
        </>
    );
}
export default Sidebar;