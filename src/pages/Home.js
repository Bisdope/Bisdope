import { Link } from "react-router-dom";
const Home= () =>{
    return(
        <>

       
            <div className ="body">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        <div className='modern'>
          <h1>Modern Interior
          Design Studio</h1>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        </div>
        <div className='button'>
          <button className='One'>Shop Now</button>
          <button className='Two'>Explore</button>
        </div>
            </div>
        </>
    );
}
export default Home;