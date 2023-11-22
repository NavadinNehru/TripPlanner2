import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>TripTrekker</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==='home'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("international")}}><Link style={{textDecoration:'none'}} to='/international'>International Trips</Link>{menu==='international'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("domestic")}}><Link style={{textDecoration:'none'}} to='/domestic'>Domestic Trips</Link>{menu==='domestic'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("flight")}}><Link style={{textDecoration:'none'}} to='/flight'>Flights & Hotels</Link>{menu==='flight'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Navbar