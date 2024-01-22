import React, { useEffect } from 'react'
import Top from './Frontomponent/Top'
import Second from './Frontomponent/Second'
import Third from './Frontomponent/Third'
import Fourth from './Frontomponent/Fourth'
import Youtube from './Frontomponent/Youtube'
import Pricing from './Frontomponent/Pricing'

const Front = () => {
useEffect(()=>{
  window.scrollTo({
    top: 0,
  });
},[])
  return (
    <div className=''>
      <Top/>
      <Second/>
      <Third/>
      <Fourth/>
      <Youtube/>
      <Pricing/>
      </div>
  )
}

export default Front