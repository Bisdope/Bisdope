import { Link } from "react-router-dom";
import heroImg from '../Assets/images/couch.png';
import dotsImg from '../Assets/images/dots.svg';
import Navbar from "../Components/Navbar";
import ChairImg from '../Assets/images/chair1.png';
import ChairsImg from '../Assets/images/chair 2.png';
import ChairssImg from '../Assets/images/chair 4.png';
import { useState } from "react";

const Home = () => {
    const [cart, setCart] = useState([]);

    return (
        <>
            <Navbar setCart={setCart} cart={cart}/> 
            <div className="body" style={{ display: 'flex' }}>
                <div className='modern'>
                    <h1>Modern Interior Design Studio</h1>
                    <p className="paragraph">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <div className='button'>
                        <Link to="/shop" className="link"><button className='One'>Shop Now</button></Link> 
                        <Link to="/explore" className="link"><button className='Two'>Explore</button></Link> 
                    </div>
                </div>
                <div className="contain">
                    <img src={dotsImg} alt='Dots Image' className="dots" />
                    <img src={heroImg} alt='Hero Image' className="img" style={{ width: '90%' }}/>
                </div>
            </div>
            <div style={{ height: "500px", backgroundColor: "#C1E1C1", margin: "20px", borderRadius: "50px", display: "flex" }}>
                <div style={{ width: "35%", padding: "80px", paddingTop: "120px" }}>
                    <h4>Crafted with excellent material.</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <Link to="/shop" className="link"><button className='explore'>Explore</button></Link> 
                </div>
                <div style={{ display: "flex", width: "60%" }}>
                    <Link to="/product" className="link">
                        <div>
                            <img src={ChairImg} alt='ChairImg' className="chairs_img"/>
                        </div>
                    </Link>
                    <Link to="/product" className="link">
                        <div>
                            <img src={ChairsImg} alt='ChairsImg' className="chairs_img" />
                        </div>
                    </Link> 
                    <Link to="/product" className="link">
                        <div>
                            <img src={ChairssImg} alt='ChairssImg' className="chairs_img" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
