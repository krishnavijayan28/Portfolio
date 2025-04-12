import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul style={{listsyle:'none',display:'flex',gap:'50px',padding:'50px'}}> 
            <li>
                <NavLink to= '/' style ={{textDecoration:'none'}}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/Contact' style={{textDecoration:'none'}}>
                Contact
                    </NavLink>
                    </li>     
                    <li>
                        <NavLink to='/Posts' style={{textDecoration:'none'}}>
                        Posts
                        </NavLink>
                        </li>      
                        </ul>
        </nav>


    </header>
  )
}

export default Header