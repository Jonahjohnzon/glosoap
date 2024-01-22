import React, { useState, useEffect } from 'react'
import Button from './Button'
import { FaMoon ,FaSun} from "react-icons/fa6";
import {motion, AnimatePresence} from 'framer-motion'
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";


const Navbar = ({setheme,theme,load,setslide,slides}) => {
    const [toggle, setToggle] = useState(true)
    const [small, setsmall] = useState(false);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        const newY = window.scrollY;
        if (newY <= 10) {
          setsmall(false);
        } else {
          setsmall(true);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, []);

      const slide2 = {
        hidden2: { opacity: 0, y:-50 },
        animate2: {
          opacity: 1,
          y:0,
          transition: {
            duration: 0.7,
           
          },
        },
        exit2: { opacity: 0, y:-50 },
      };
      const slide = {
        hidden: { opacity: 0, y:-50 },
        animate: {
          opacity: 1,
          y:0,
          transition: {
            duration: 0.7,
           
          },
        },
        exit: { opacity: 0, y:-50 },
      };
  return (
    <div>

    {small && <div variants={slide2}    initial="hidden2" animate="animate2" exit="exit"  className='fixed z-50 dark:text-white text-black flex justify-center items-center bg-white dark:bg-black py-1 w-full font-Noto text-sm' >
        <div className=' w-[90%] flex items-center justify-between '>
            <section className=' w-[20%]'>
                <div><Link to={"/"} onClick={()=>load(true)}><img alt='logo' src='/Logo.webp' className=' w-12'/></Link></div>
            </section>

            <section className=' flex items-center w-[70%] justify-end'>
            <section  className=' w-[50%] xl:w-[40%] 3xl:w-[25%] hidden lg:block'>
                <ul className=' flex items-center w-full justify-between  dark:text-slate-200 font-Noto font-semibold'>
                    <Link to={"/"} onClick={()=>load(true)}><li className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62] cursor-pointer'>HOME</li></Link>
                   <Link to={"/about"} onClick={()=>load(true)}><li  className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>ABOUT</li></Link> 
                   <Link to={"/contact"} onClick={()=>load(true)}><li  className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>CONTACT</li></Link>
                   <Link to={"/product"} onClick={()=>load(true)}> <li  className='hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>PRODUCT</li></Link>
                </ul>
            </section>
            <div className='bg-gray-300 bg-opacity-10 lg:flex hidden rounded-full border-[1px] ml-5 border-white border-opacity-10 px-1 py-1 items-center'>
            <div className=' flex  group'>
                <div className=' bg-gray-300 bg-opacity-20 border-[1px] border-black border-opacity-20 px-1 w-fit rounded-3xl py-3 flex items-center cursor-pointer relative overflow-hidden' onClick={()=>{setToggle(!toggle)
                setheme(!theme)
                }}>
                    <div className=' mr-9 text-xl'><FaMoon  className=' text-gray-700'/></div>
                    <div className=' text-xl'><FaSun className=' text-[#F6F1D5]'/></div>
                    <div className=' absolute z-20 h-7 w-7 transition-all ease-in-out duration-300 bg-gray-700 dark:bg-slate-200 group-hover:bg-[#DD00FF] dark:group-hover:bg-[#00FF62] rounded-full'   style={{ transform: `translateX(${toggle ? '0%' : '174%'})` }} ></div>
                </div>
            </div>
                <div className=' ml-5'><Link to={"/waitlist"} onClick={()=>load(true)}><Button style={" px-5 py-3"} word={"Join Waitlist"}/></Link></div>
                
                </div>
                <div
                    className=" dark:text-white text-black lg:hidden"
                 
                  >
                    <BiMenu className=" text-5xl mx-1" onClick={()=>setslide(!slides)}/>
                  </div>
            </section>

        </div>
    </div>}{
        small ||<motion.div  variants={slide}    initial="hidden" animate="animate" exit="exit" className='fixed z-50 dark:text-white text-black flex justify-center items-center h-28 w-full font-Noto text-sm' >
        <div className=' w-[90%] flex items-center justify-between '>
            <section className=' w-[20%]'>
                <div><Link to={"/"} onClick={()=>load(true)}><img alt='logo' src='/Logo.webp' className=' w-20'/></Link></div>
            </section>

            <section className=' flex items-center w-[70%] justify-end'>
            <section  className='  w-[50%] xl:w-[40%] 3xl:w-[25%] hidden lg:block'>
                <ul className=' flex items-center w-full justify-between  dark:text-slate-200 font-Noto font-semibold'>
                <Link to={"/"} onClick={()=>load(true)}><li className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62] cursor-pointer'>HOME</li></Link>
                <Link to={"/about"} onClick={()=>load(true)}> <li  className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>ABOUT</li></Link>
                <Link to={"/contact"} onClick={()=>load(true)}> <li  className=' hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>CONTACT</li></Link>
                <Link to={"/product"} onClick={()=>load(true)}>  <li  className='hover:text-[#DD00FF] dark:hover:text-[#00FF62]  cursor-pointer'>PRODUCT</li></Link>
                </ul>
            </section>
            <div className='bg-gray-300 bg-opacity-10 lg:flex rounded-full border-[1px] ml-5 border-white border-opacity-10 px-1 py-1 hidden  items-center'>
            <div className=' flex  group'>
                <div className=' bg-gray-300 bg-opacity-20 border-[1px] border-black border-opacity-20 px-1 w-fit rounded-3xl py-3 flex items-center cursor-pointer relative overflow-hidden' onClick={()=>{setToggle(!toggle)
                setheme(!theme)
                }}>
                    <div className=' mr-9 text-xl'><FaMoon  className=' text-gray-700'/></div>
                    <div className=' text-xl'><FaSun className=' text-[#F6F1D5]'/></div>
                    <div className=' absolute z-20 h-7 w-7 transition-all ease-in-out duration-300 bg-gray-700 dark:bg-slate-200 group-hover:bg-[#DD00FF] dark:group-hover:bg-[#00FF62] rounded-full'   style={{ transform: `translateX(${toggle ? '0%' : '174%'})` }} ></div>
                </div>
            </div>
                <div className=' ml-5'><Link to={"/waitlist"} onClick={()=>load(true)}><Button style={" px-5 py-3"} word={"Join Waitlist"}/></Link></div>
                
                </div>
                <div
                    className=" dark:text-white text-black lg:hidden"
                 
                  >
                    <BiMenu className=" text-5xl mx-1"  onClick={()=>setslide(!slides)}/>
                  </div>
            </section>

        </div>
    </motion.div>}
    </div>
  )
}

export default Navbar