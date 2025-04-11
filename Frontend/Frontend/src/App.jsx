import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home'

import Navbar from './Components/Navbar';
import View from './Components/View';
function App() {
  return (
    <>
    <Router basename="/User-Registration">
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/view' element={<View/>}/>
         {/* <Route path="*" element={<Navigate to="/" replace/>} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App