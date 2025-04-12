import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <nav>
        <ul style={{listStyle:'none',
                    display:'flex',
                    gap:'100px',
                    backgroundColor:'lavender',
                    textAlign:'center',
                    fontSize:30,
                    justifyContent:"center"
                    }}>
           
           <li>
            <NavLink to='/Dashboard' style={{textDecoration:'none'}}>
                Dashboard
            </NavLink>
           </li>
           <li>
            <NavLink to='/BlogForm' style={{textDecoration:'none'}}>
                Blog Form
            </NavLink>
           </li>
        </ul>
    </nav>

    </header>
    
  )
}

export default Header