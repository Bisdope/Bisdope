
import cardimg from '../Assets/images/card.png';

const Checkout =()=>{
    return(
        <>
           <div className='py-4 px-3' style={{backgroundColor:"#C1E1C1",minHeight:"600px", display:"flex", justifyContent:"center",}}>
                {/* <h1 style={{color:"red", margin:"0"}}>hello world</h1>  */}

                <div className="col-12  " style={{width:'80%',backgroundColor:"white"}}>
                    <div className='d-flex'>
                        <div className="col-6">
                            <div style={{}}> 
                            <img src={cardimg} alt ='cardimage'className=" " />
                            </div>
                        </div>
                        <div className="col-6 "style={{paddingTop:"120px"}}>
                            <form>
                                <div style={{marginLeft:"30px"}}>
                                    <label style={{marginBottom:"5px"}}>Card Holder's name</label><br/>
                                    <input type='name' placeholder='holder name' style={{width:"400px",marginBottom:"30px",borderRadius:"8px",height:"40px",outline:"none",border:"2px solid rgb(227, 227, 227)"}}></input>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-evenly",marginBottom:"36px"}}>
                                    <input type='month' placeholder='09/28' style={{width:"200px",height:"40px",borderRadius:"8px",outline:"none",border:"2px solid rgb(227, 227, 227)" }}></input>
                                    <input type="tel" name="cvv" maxlength="3" inputmode="numeric" placeholder="CVV" autocomplete="off" onkeyup="maskCVV(this)" style={{borderRadius:"8px",outline:"none",border:"2px solid rgb(227, 227, 227)"}}></input>

                                </div>
                                <button style={{width:"430px",height:"50px",marginLeft:"30px",border:"none",backgroundColor:"blue",borderRadius:"8px",color:"white",fontWeight:"600",fontSize:"20px"}}>Confirm</button>
                            </form>
                        </div>
                    </div>
                        
                     <div className='d-flex ' style={{borderTop:"2px solid rgb(227, 227, 227)",height:"350px"}}>
                        
                        <div className='col-6 pt-3 ps-5'>
                            <h4 className='mb-4'>My Order</h4>
                            <div style={{display:"flex",height:"100px",marginBottom:"10px"}}>
                                <div style={{height:"90px",backgroundColor:"rgb(227, 227, 227)",borderRadius:'10px', marginRight:"10px"}}>
                                    <img src={cardimg} alt ='cardimage'className=" "style={{width:"100%",height:"100%"}} />
                                </div>
                                 
                                <div style={{marginRight:"10px"}}>
                                    <div style={{marginTop:"10px"}}>
                                         <h6>Adiddas</h6>
                                    <h6 style={{marginTop:"-3px"}}>Ground cut comfort shoes</h6>

                                    </div>
                                    <p> <span style={{color:"green"}}>$100</span> <span style={{textDecoration:"line-through"}}>$125</span></p>
                                   
                                </div>

                            </div>
                            <div style={{display:"flex",height:"100px"}}>
                                <div style={{height:"90px",backgroundColor:"rgb(227, 227, 227)",borderRadius:'10px', marginRight:"10px"}}>
                                    <img src={cardimg} alt ='cardimage'className=" "style={{width:"100%",height:"100%"}} />
                                </div>
                                 
                                <div style={{marginRight:"10px"}}>
                                    <div style={{marginTop:"10px"}}>
                                         <h6>Adiddas</h6>
                                    <h6 style={{marginTop:"-3px"}}>Ground cut comfort shoes</h6>

                                    </div>
                                    <p> <span style={{color:"green"}}>$100</span> <span style={{textDecoration:"line-through"}}>$125</span></p>
                                   
                                </div>

                            </div>
                        </div>
                        
                        <div className='col-6 pt-3 px-4' style={{borderLeft:"2px solid rgb(227, 227, 227)",}}>
                             <h4 className='ps-3 mb-3'>Order Summary</h4>
                             <div className='d-flex justify-content-between px-3'>
                                <p>Subtotal</p>
                                <p>$225</p>
                            </div>
                            <div className='d-flex justify-content-between px-3'>
                                <p>Taxes</p>
                                <p>$20</p>
                            </div>
                            <div className='d-flex justify-content-between px-3'>
                                <p>Extra discount</p>
                                <p style={{color:"green"}}>$50</p>
                            </div>
                            <div className='d-flex justify-content-between px-3 pb-4'  style={{borderBottom:"2px solid rgb(227, 227, 227)",}}>
                                <p>Shipping</p>
                                <p style={{color:"green"}}>$Free</p>
                            </div>
                            <div className='d-flex justify-content-between px-3 mt-4'>
                                <p>Total</p>
                                <p >$245</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
             
            </div>

        </>
    );
}
export default Checkout;