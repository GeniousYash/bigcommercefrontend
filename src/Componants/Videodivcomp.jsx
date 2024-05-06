/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Styles/Videodiccomp.css"

function Videodivcomp(){
     return(
          <div className='vidmaindiv'>
               <div className='div1'>
                    <a>  
                         <p style={{color:"#fff", textDecoration:"underline"}}>The Next Big Thing is here — with over 100 innovative new features, software releases, and partner integrations.</p>
                    </a>
               </div>
               <div className='div2'>
                    <div classname='leftside'>
                         <div className='leftsidetext'>
                              <h1>Enterprise </h1>
                              <h1>ecommerce,</h1>
                              <h1>simplified.</h1>
                         </div>
                         <div className='btndiv'>
                              <button style={{padding: "15px 30px", width:"350px", backgroundColor:"#1A8EFD" , color:"#fff"}} classname='getquote'>Get a Quote</button>
                              <button style={{padding:"15px 30px", width:"350px"}} classname='reqdemo'>Request a Demo</button>
                         </div>
                    </div>
                    <div className='rightside'>
                         <iframe allowtransparency="true" title="Wistia video player" allowFullscreen frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" src="https://fast.wistia.net/embed/iframe/yehopbf3ef" width="400" height="225"></iframe>
                    </div>
               </div>
          </div>
     )
}

export default Videodivcomp;