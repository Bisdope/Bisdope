const Navbar=() =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:'#3b5d50'}}>
        <div className="container-fluid">
          <div className="collapse ">
          <a className="navbar-brand" >Furni<span className="span">.</span>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-items">
                <a className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Contact us</a>
              </li>
            </ul>
            <div>
            <img src={"cart.svg"} alt="cart.svg" />
            <img src={"user.svg"} alt="user.svg" />
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;