import { Link } from "react-router-dom";
import CartIcon from "../Assets/images/cart.svg";
import UserIcon from "../Assets/images/user.svg";
import { useEffect  } from "react";


const Navbar=({cart, setCart}) =>{

    useEffect(()=>{
        const savedCart = localStorage.getItem('cart');
        if(JSON.parse(savedCart)){
            setCart(JSON.parse(savedCart))
        }
            console.log(cart);
    }, []);

    return(
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#3b5d50'}}>
      
         
          <a className="navbar-brand" >Furni<span className="span">.</span>
          </a>
          <div className="right-nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="links"> Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="link"> Shop</Link>
                    </li>
                    <li>
                        <Link to="/"  className="link"> About us</Link>
                    </li>
                    <li>
                        <Link to="/"  className="link">Services</Link>
                    </li>
                    <li>
                        <Link to="/"  className="link"> Blog</Link>
                    </li>
                    <li>
                        <Link to="/"  className="link"> Contact us</Link>
                    </li>
                </ul>
                <div >
            <div>
                <ul className="navbar-nav s-nav" style={{listStyle:'none'}}>
                     <li className="icon"><img src={UserIcon} alt="User Icon"  /></li>
                <li className="icon position-relative"><Link to="/cart"><img src={CartIcon} alt="Cart Icon" /></Link> <span className="badge bg-warning position-absolute cart-badge">{cart.length}</span></li>
                </ul>
                
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;