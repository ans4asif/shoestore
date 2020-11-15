import React from 'react'
import { Routes,Route } from "react-router-dom"
import Contactus from './Components/Contactus'
import Home from './Components/Home'
import About from './Components/About'



function App() {
  return (
    <div>                     
      <h1>hello world</h1>
      <Routes>
        <Route path='/'  element={<Home/>} />    
        <Route path="about" element={<About/>}> </Route>
        <Route path="contact-us" element ={<Contactus/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
