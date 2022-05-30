import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes,FaUserCircle} from "react-icons/fa";

export const Navbar = ({isopen,sidebarToggle}) => {
  return (
    <div className='navbar'>
         <div className='link'>
                <div className='fa-bar' onClick={sidebarToggle}>
                {!isopen? <FaBars/>:<FaTimes/>} 
                </div>
                
               <Link to="/" >home</Link>
               <Link to="/contact" >contact</Link>
               <Link to="/about" >about</Link>
              
             </div>
             <div className='profile-detail'>
                   <div className='profile'>
                       <span className='profile-icon'><FaUserCircle/></span>
                       <span className='user-name'>pravin</span>
                   </div>
                   <div className="log-out">Log-Out</div>
               </div>
    </div>
  )
}
