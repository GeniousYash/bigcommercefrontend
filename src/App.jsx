import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './App.css'

function App() {
  return (
    <div className='container'>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
       </Routes>
    </div>
  )
}

export default App
