import { Button } from '@mui/material'
import './Login.css'
import React from 'react'


const Login
 = () => {
  return (
    <div>
        <h1 align="center">Login Page</h1>
        <div class="box">
        <form text align="center">
            <input type="text" placeholder="Username"></input><br></br><br></br>
            <input type="password" placeholder="Password"></input><br></br><br></br>
           <Button variant="contained" color="secondary">Login</Button><br></br><br></br>
        </form>
        <p>Don't you have an account?<a href="#">Register</a></p><br></br>
        <p>Forgot Password?<a href="#">Reset</a></p>
        </div>
    </div>
  )
}

export default Login
