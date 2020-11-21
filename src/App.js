import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route,Routes } from 'react-router'
import About from './Components/About'
import Product from './Components/Product'
import ProductDetails from './Components/ProductDetails'
import ProductIndex from './Components/ProductIndex'
import NotFound from './Components/NotFound'

function App() {
  
  return (
    <div>                     
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="products" element={<Product/>}>
      <Route path="/" element={<ProductIndex/>}></Route>
       <Route path=":productID" element={<ProductDetails/>}></Route>
       </Route>
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </div>
  );
}

export default App;
