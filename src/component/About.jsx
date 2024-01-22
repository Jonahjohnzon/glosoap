import React, { useEffect } from 'react'
import Top from './Aboutomponent/Top'
import Second from './Aboutomponent/Second'
import Third from './Aboutomponent/Third'
import Fourth from './Aboutomponent/Fourth'
import Founders from './Aboutomponent/Founders'
import FAQList from './Aboutomponent/FAQ'

const About = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
    });
  },[])
  return (
    <div>
        <Top/>
        <Second/>
        <Third/>
        <Fourth/>
        <Founders/>
        <FAQList/>
    </div>
  )
}

export default About