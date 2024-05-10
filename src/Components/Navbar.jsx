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
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#3b5d50',position:"fixed",width:"100%",top:"0",left:"0",zIndex:"12"}}>
      
         
          <a className="navbar-brand" >Furni<span className="span">.</span>
          </a>
          <div className="right-nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="links"> Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="linkss"> Shop</Link>
                    </li>
                    <li>
                        <Link to="/"  className="linkss"> About us</Link>
                    </li>
                    <li>
                        <Link to="/"  className="linkss">Services</Link>
                    </li>
                    <li>
                        <Link to="/"  className="linkss"> Blog</Link>
                    </li>
                    <li>
                        <Link to="/"  className="linkss"> Contact us</Link>
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