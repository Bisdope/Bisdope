import { Link } from "react-router-dom";
import heroImg from '../Assets/images/couch.png';
import dotsImg from '../Assets/images/dots.svg';
import Navbar from "../Components/Navbar";
const Home= () =>{
    return(
        <>
        <Navbar/> 
        <div className ="body" style={{display:'flex'}}>
        <div className='modern'>
          <h1>Modern Interior
          Design Studio</h1>
          <p className="paragraph">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div className='button'>
          <button className='One'>Shop Now</button>
          <button className='Two'>Explore</button>
        </div>
        </div>
        <div className="contain">
            <img src={dotsImg} alt ='Dots Image'className="dots" />
            <img src={heroImg} alt ='Hero Image' className="img" style={{width:'90%',}}/>
        </div>
            </div>
        </>
    );
}
export default Home;