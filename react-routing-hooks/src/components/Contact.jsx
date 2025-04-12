import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Contact = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        
    
    if (email=='krishna@gmail.com' && password=='1234')
    {
        navigate('/posts')
    }
    else{
        console.log("invalid")
    }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="enter email" value={email}
            onChange={(e)=>{setEmail(e.target.value)}} /><br></br><br></br>

            <input type="password" name="password" id="password" placeholder="enter password" value={password}
            onChange={(e)=>{setPassword(e.target.value)}} /><br></br><br></br>

            <button type="submit">Submit</button>


        </form>


    </div>
  )
}

export default  Contact