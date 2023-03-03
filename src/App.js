import React, { Component } from 'react'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Main from './component/Main'

 class App extends Component {
  render() {
    return (
      <>
      <Header />
      
      <Routes>
      <Route path='' element={<Main/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/main' element={<Main/>} />

      </Routes>
      </>
      
    )
  }
}
export default App 
