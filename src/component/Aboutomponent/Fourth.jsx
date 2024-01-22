import React,{useEffect, useRef, useState} from 'react'
import Tabapi from '../../Tabapi'
import {motion} from 'framer-motion'
import { useInViewport } from "react-in-viewport";
import Tab from '../Frontomponent/Element/Tab';

const Fourth = () => {

 const refs = useRef();
 const { inViewport } = useInViewport(refs);
 const [a,sa] = useState(false)
 useEffect(()=>{
     if(inViewport){
         sa(true)
     }
 },[inViewport])
 const show = {
     hidden: { opacity: 0, y:30 },
     anim: {
       opacity: 1,
       y:0,
       transition: {
         type: "tween",
         duration: 0.6,
         delay: 0.9,
       },
     },
   };
  return (
    <div className='flex justify-center w-full'>
                    <div className=' flex justify-center 3xl:justify-between mt-5 flex-wrap w-[75%] h-[800px] lg:h-[400px] 3xl:h-60 ' ref={refs}>
                {
                    Tabapi.map((e,i)=>{
                        return(
                            <div key={i}>
                                {a &&<motion.div variants={show}   initial="hidden" animate="anim" className=' mb-5 3xl:mb-0 mx-5 3xl:mx-0'>
                                <Tab e={e}/>
                                </motion.div>}
                            </div>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Fourth