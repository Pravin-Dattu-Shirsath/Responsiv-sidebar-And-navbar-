import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { FaHome,FaTachometerAlt ,FaEdit} from "react-icons/fa";
export const Sidebar = ({ children,isopen }) => {
  
    const Route=[
        {
           path:"/",
            name:"Home",
            icon:<FaHome/> 
        },
        {
            path:"/about",
             name:"File Convert",
             icon:<FaTachometerAlt/>
         },
         {
            path:"/contact",
             name:"CK Editor",
             icon:<FaEdit/>
         }
    ]
    return (
        <div className='main-container'>
            <div style={!isopen?{ width: "200px", background: "blue", height: "100vh" ,transition:"width 1s"}:{width: "55px", background: "blue", height: "100vh",transition:"width 1s"}}>
                <div className='Sidebar-link'>
                   {
                       Route.map((route)=>
                       ( <Link to={route.path} key={route.name}>
                           <div className="icon">{route.icon}</div>
                         {
                             !isopen? <div className="link-text">{route.name}</div>:""
                         } 
                       </Link>)
                       )
                   }
                

                </div>
            </div>
            <main>

                {children}
            </main>
        </div>
    )
}
