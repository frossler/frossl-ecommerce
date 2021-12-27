import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../cartwidget/CartWidget'

const NavBar = ({links}) => {
    return (
            <>
            <NavLink to="/" className="header-left-side">
                <h1>REACT <span className="it-span">STORE</span></h1>
            </NavLink>

            <nav>
                {links.map((element,index)=>{
                    return <Link key={element.name+index} to={element.href}>{element.name}</Link>
                })}
            </nav>
            
            <CartWidget />
            </>
        
    )
};

export default NavBar;