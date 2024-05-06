/* eslint-disable no-unused-vars */
import {useState} from "react";
// import Navbar from "../Componants/Navbar";
// import Footer from "../Componants/Footer";
import {useNavigate} from 'react-router-dom';
// import {Redirect} from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault();

    try {
      const response = await fetch('https://bigcomlogin-2.onrender.com/user/login',{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      alert("Login successful");
      navigate('/');
      
    }catch(error){
      alert("Login Failed");
    }
}

  return (
    <div className="Login-section" style={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#000", color:"white"}}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{display:"flex", flexDirection:"column", marginTop:"50px" }}>
          <input style={{marginTop:"20px", fontSize:"20px"}} type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input style={{marginTop:"20px", fontSize:"20px"}} type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button style={{marginTop:"20px", border:"none", padding:"10px 20px", fontSize:"30px"}} type="submit">Login</button>
      </form>
      <a style={{color:"#fff",marginTop:"50px"}} href="/signup">Signup</a>
    </div>
  );
}

export default Login;
