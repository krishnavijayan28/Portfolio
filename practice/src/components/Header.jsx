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
                <NavLink to='/Login' style={{textDecoration:'none'}}>
                Login
                    </NavLink>
                    </li>     
                    <li>
                        <NavLink to='/Aboutus' style={{textDecoration:'none'}}>
                        Aboutus
                        </NavLink>
                        </li>      
                        </ul>
        </nav>


    </header>
  )
}

export default Header