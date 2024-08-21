import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Gallery from './pages/Gallery'
import Table from './pages/Table'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
