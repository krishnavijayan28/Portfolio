
import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Contact from "./components/Contact";
import Home from "./components/Home";
import Posts from "./components/Posts";
const App = () => {
  return (
 <>
 <Router>
  <div className='App'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Posts' element={<Posts/>}/>

    </Routes>


  </div>

 </Router>

 </>
  )
}

export default App
