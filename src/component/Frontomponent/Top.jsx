import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";



const Top = () => {
  const slide={
    hidden:{
      y:40,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.5,
        delay:0.5,
        when:'beforeChildren',
        staggerChildren:0.2
      }
    }
   
  }

  const children={
      hidden:{
       opacity:0,
       y:30,
      },
      show:{
        opacity:1,
        y:0
      }
  }
  return (
    <div className=' xl:pb-20 overflow-y-hidden relative w-full overflow-x-hidden'>
    <img src='/black1.png' className=' absolute -right-40 xl:right-0 hidden h-full xl:h-[100vh] w-[80vw] z-10 dark:block'/>
    <img src='/white.png' className=' absolute  xl:right-0 block h-[100%] xl:h-[100vh] w-[80vw] z-10 dark:hidden'/>
    <div className='pt-36 flex  justify-center text-white '>

        <div className=' flex flex-col xl:flex-row   items-center h-full w-[85%] relative z-20'>
            <section className=' w-full mb-10 xl:mb-0 flex items-center justify-center font-Inter'>
              <motion.div variants={slide} initial="hidden" animate="show" className=' flex flex-col items-center xl:items-start w-[90%] sm:w-2/3'>
                <motion.h1 variants={children} className=' text-6xl sm:text-8xl font-bold mb-3 dark:text-white text-black'>GLOSOAP</motion.h1>
                <motion.div variants={children} className=' mb-2 dark:text-white text-black dark:font-medium text-sm sm:text-base font-medium text-center sm:text-start'><p>The Most Fun Soap in the WORLD!</p></motion.div>
                <motion.div variants={children} className=' mb-5 dark:text-white text-black text-sm text-center sm:text-base xl:text-start'>
                  <p>GloSoap is the soap that makes your hands glow! The glow lets kids see where they have soap and where they need to scrub more.</p>
                </motion.div>
                <div className=' mb-10'>
                <motion.div variants={children}><Link to="https://www.youtube.com/watch?v=aDKXKlyVWf0"><div  className={` px-5 py-3 border-black border-[1px] dark:border-0 border-opacity-20  bg-gradient-to-tr relative dark:from-white text-black from-[#FF0067] to-[#FF00E7] font-Inter font-semibold dark:to-slate-200  transition-colors group overflow-hidden  rounded-3xl cursor-pointer flex items-center`}><span className="w-0 h-full rounded bg-gradient-to-l from-white to-slate-200   dark:from-[#FF0067] dark:to-[#FF00E7] absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full  -z-1"></span><FaCirclePlay  className='group-hover:rotate-0 transition-all ease-in-out duration-300 '/> <p className=' ml-2 relative z-10'>WATCH VIDEO</p></div></Link></motion.div>
                </div>
                <motion.div variants={children} className=' w-full flex justify-center'><FaAngleDoubleDown  className=' text-black dark:text-white text-4xl animate-pulses cursor-pointer'/></motion.div>
              </motion.div>
            </section>
            <section className=' w-full sm:w-[70%] lg:w-[50%] 2xl:w-full flex-col items-center flex justify-end'>
              <div className=' mb-5'>
              <div className=' hover:animate-wiggle cursor-pointer dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl overflow-hidden'><div className=' overflow-hidden dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl  m-2'><img alt='glosoap' src='/3.jpeg' className=' w-28 h-28 sm:w-40 sm:h-40 xl:w-52 xl:h-52 2xl:w-80 2xl:h-80 '/></div></div>
              </div>
            <div className=' flex  justify-between w-[90%]'>
            <div className=' hover:animate-wiggle cursor-pointer dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl overflow-hidden'><div className=' overflow-hidden dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl  m-2'><img alt='glosoap' src='/4.jpg' className='w-28 h-28 sm:w-40 sm:h-40 xl:w-52 xl:h-52 3xl:w-80 3xl:h-80 '/></div></div>
            <div className=' hover:animate-wiggle cursor-pointer dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl overflow-hidden'><div className='dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl overflow-hidden  m-2'><img alt='glosoap' src='/5.jpg' className='w-28 h-28 sm:w-40 sm:h-40 xl:w-52 xl:h-52 3xl:w-80 3xl:h-80 '/></div></div>
            </div>
            </section>
        </div>
    </div>
    </div>
  )
}

export default Top