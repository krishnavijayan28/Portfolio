import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
const App = () => {
  return (
 <>
 <Router>
  <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>

    </Routes>


  </div>

 </Router>

 </>
  )
}

export default App
