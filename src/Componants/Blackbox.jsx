/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Styles/Blackbox.css";
import section3 from "../Images/section3.png"

function Blackbox(){
     return(
          <div className='bb'>
               <h3 className='bbh3'>BigCommerce is the most trusted commerce solution provider.</h3>
               <h4 className='bbh4'>The Forrester Wave™ B2C and B2B Commerce Solutions Q2, 2022</h4>
               <div className="bbdiv1">
                    <div className='card'>
                         <div className='cardup'>
                              <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTozOGVkMzk4MS1hZGMyLTQ5ZjktYjNlNC0yYTY5ZjNiMzQzOWI=/Homepage%20Gartner%20White.svg" alt=""/>
                         </div>
                         <div className='carddown' style={{marginTop:"50px"}}>
                              <a href='https://www.bigcommerce.com/resources/reports/2023-gartner-report-cdl-report/'>
                                   <p>
                                        A Magic Quadrant™ "Challenger" for Fourth Year for Digital Commerce
                                   </p>
                              </a>
                         </div>
                    </div>
                    <div className='card'>
                         <div>
                              <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3MWMwOWU1ZC04ZjQwLTQ1NzEtYTA3My04ZGQ3YjVhZDRlMWE=/Forrester%20White.svg" alt=""/>
                         </div>
                         <div className='carddown' style={{marginTop:"50px"}}>
                              <a>
                                   <p>
                                   Strong Performer in B2C and B2B Commerce Solutions
                                   </p>
                              </a>
                         </div>
                    </div>
                    <div className='card' style={{border:"4px solid #03EAB8"}}>
                         <div>
                              <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTpmMDkyZWJkOC02NzQzLTRkMzMtOTQyYy1iOTUyMWExNGM2NWY=/IDC%20white.svg" alt=""/>
                         </div>
                         <div className='carddown' style={{marginTop:"50px"}}>
                              <a>
                                   <p>
                                        A Leader in B2C B2B and Digital Commerce Platforms.
                                   </p>
                              </a>
                         </div>
                    </div>
                    <div className='card'>
                         <div>
                              <img src="https://storage.googleapis.com/s.mkswft.com/RmlsZToxZjhhMjlkYi05NmYzLTQ3NzMtYTQxMS01NmQ4NmI1ODIyYTg=/Homepage%20paradigm%20white.svg" alt=""/>
                         </div>
                         <div className='carddown' style={{marginTop:"50px"}}>
                              <a>
                                   <p>
                                   Rated Exceptional for Total Cost of Ownership in Mid-Market and Enterprise
                                   </p> 
                              </a>

                         </div>
                    </div>
               </div>
               <h3 style={{textAlign:"center" , marginTop:"50px"}}>Leading analysts have made us the world’s most acclaimed ecommerce platform. See why <span style={{color:"#03EAB8", fontWeight:"800"}}>here</span>.</h3>
               <div style={{width:"100vw"}}>
                    <img style={{width:"100%"}} src={section3} alt=''/>
               </div>
          </div>
     )
}

export default Blackbox;