import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import BlogForm from './components/BlogForm'

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>BLOG APPLICATION</h1>
      <Router>
        <div className='App'>
          <Header/>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/blogform' element={<BlogForm />} />      
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App