import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Front from './component/Front'
import Footer from './component/Footer'
import About from './component/About'
import { HashRouter, Routes, Route } from "react-router-dom";
import Contact from './component/Contact'
import Wishlist from './component/Wishlist'
import Loading from './Loading'
import Slide from './component/Slide'
import Product from './component/Product'

const Page = ({setheme,theme}) => {
  const [load, setload] = useState(true)
  const [slide, setslide] = useState(false)

  return (
    <HashRouter>
    <div className=' w-full'>
      <Navbar setheme={setheme} load={setload} theme={theme}  slides={slide}  setslide={setslide}/>
      <Slide menu={slide} setslide={setslide} load={setload} theme={theme}  setheme={setheme} />
      {load ? <Loading load={setload}/>:
      <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/waitlist' element={<Wishlist/>}/>
      <Route path='/product' element={<Product />}/>
      </Routes>}
      <Footer load={setload}/>
    </div>
    </HashRouter>
  )
}

export default Page