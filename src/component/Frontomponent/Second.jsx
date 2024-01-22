import React,{useEffect, useRef, useState} from 'react'
import Text from '../../Text'
import Tabapi from '../../Tabapi'
import Tab from './Element/Tab'
import {motion} from 'framer-motion'
import { useInViewport } from "react-in-viewport";
import Secondbody from './Element/Secondbody'

const Second = () => {

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
    <div className=' flex justify-center w-full pt-32 font bg-white dark:bg-[#080808] dark:bg-opacity-70 sm:pb-10'  >
        <div className=' flex flex-col items-center w-[75%]'>
            <h2 className=' text-black dark:text-white text-3xl sm:text-5xl font-extrabold font-Inter mb-10'><Text words={"DID YOU KNOW?"} speed={0.08}/></h2>
            <div className=' flex justify-center 3xl:justify-between mt-5 flex-wrap w-full h-[800px] lg:h-[400px] 3xl:h-60' ref={refs}>
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
            </div><Secondbody/>
        </div>
    </div>
  )
}

export default Second