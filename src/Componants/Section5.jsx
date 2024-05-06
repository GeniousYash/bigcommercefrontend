/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Styles/Section5.css";
import Section5img from "../Images/section5.png"



function Section5(){
     return(
          <div style={{width:"100vw", marginTop:"50px", display:"flex", flexDirection:"row", padding:"50px 60px" , justifyContent:"center", alignItems:"center", gap:"100px"}}>
               <div className='sec5left'>
                    <h1 style={{marginBottom:"30px"}}>Eco(system) friendly.</h1>
                    <h3 style={{marginBottom:"20px"}}>We’ve curated the world’s leading ecosystem partners.</h3>
                    <p>A partner ecosystem should help you innovate and succeed without limits. That’s why we only include best-in-class technology providers, ecommerce designers, developers and marketers to fill any gaps you may have in teams, time or tech.</p>
                    <h3 style={{marginTop:"30px"}}>See what our partners can do for you.</h3>
                    <button className='sec5btn'>Let's Go</button>
               </div>
               <div className='sec5right'>
                    <img src={Section5img}/>
               </div>
          </div>
     )
}

export default Section5;