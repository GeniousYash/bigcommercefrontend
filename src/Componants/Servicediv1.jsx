/* eslint-disable no-unused-vars */
import React from 'react';
import "../Styles/Servicediv1.css";
import sec1img from "../Images/servicedivonesecone.png";
import Servicesection2 from "../Images/servicesection2.png";
import Servsec3img from "../Images/section3img.png";
import Servseclastimg from "../Images/servicelastsec.png";

function Servicediv1(){
     return(
          <div className='servicesec1main'>
               <div className='servicesec1'>
                    <div className='servsec1left'>
                         <h1>BigCommerce for Small Businesses.</h1>
                         <p>The only ecommerce platform you’ll ever need.</p>
                         <button>START FREE TRAIL</button>
                    </div>
                    <div className='servsec1right'>
                         <img src={sec1img}/>
                    </div>
               </div>
               <div className='servicesec2'>
                    <img src={Servicesection2}/>
               </div>
               <div className='servsec3'>
                    <div className='servsec3up'>
                         <h1 style={{fontSize:"40px"}}>We’re a TrustRadius Top Rated Ecommerce Platform, four years and counting.</h1>
                    </div>
                    <div>
                         <img style={{width:"100%"}} src={Servsec3img}/>
                    </div>
               </div>
               <div className='servseclast' style={{width: "100vw"}}>
                    <img style={{width:"100%"}} src={Servseclastimg}/>
               </div>
          </div>
     )
}

export default Servicediv1;