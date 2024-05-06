/* eslint-disable no-unused-vars */
import {useState} from "react";
// import Navbar from "../Componants/Navbar";
// import Footer from "../Componants/Footer";
import {useNavigate} from 'react-router-dom';



function Signup() {
     const [userfirstname,setUserfirstname] = useState('');
     const [usersecondname,setUsersecondname] = useState('');
     const [email,setEmail] = useState('');
     const [phnumber,setPhnumber] = useState('');
     const [password,setPassword] = useState('');
     const navigate = useNavigate();

     const handleSubmit = async(e)=>{
          e.preventDefault();

          try{
               const response = await fetch('https://bigcomlogin-2.onrender.com/user/register',{
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    userfirstname,
                    usersecondname,
                    email,
                    phnumber,
                    password
               })
          })
          const data = await response.json();
          console.log(data);
          alert("SignUp Successful");
          navigate('/login');

          }catch(error){
               alert('Signup Failed');
          }
          
     }


  return (
    <div className="Signup-section" style={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#000", color:"white"}}>
      <h1>This is Signup Page</h1>
      <form onSubmit={handleSubmit}  style={{display:"flex", flexDirection:"column", marginTop:"50px" }}>
          <input style={{marginTop:"20px", fontSize:"20px"}}  type="text" placeholder="First Name" value={userfirstname} onChange={(e)=>setUserfirstname(e.target.value)} />
          <input style={{marginTop:"20px", fontSize:"20px"}}  type="text" placeholder="Last Name" value={usersecondname} onChange={(e)=>setUsersecondname(e.target.value)} />
          <input style={{marginTop:"20px", fontSize:"20px"}}  type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input style={{marginTop:"20px", fontSize:"20px"}}  type="text" placeholder="Phone Number" value={phnumber} onChange={(e)=>setPhnumber(e.target.value)} />
          <input style={{marginTop:"20px", fontSize:"20px"}}  type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button style={{marginTop:"20px", border:"none", padding:"10px 20px", fontSize:"30px"}} type="submit">Sign Up</button>
      </form>
      <a style={{color:"#fff",marginTop:"50px"}} href="/login">Login</a>
    </div>
  );
}

export default Signup;
