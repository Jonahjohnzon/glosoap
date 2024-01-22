import React, { useState } from 'react'
import { FaCheckDouble } from "react-icons/fa6";
import { motion } from "framer-motion";

const Secondbody = () => {

  return (
    <div >
        <div className=' dark:text-white mt-20 3xl:mt-0 sm:text-lg text-black flex justify-center pb-10'>
            <div className=' flex xl:flex-row flex-col items-center justify-between  2xl:w-[90%]'>
                <div className=' w-full text-center xl:text-start flex justify-center  mb-5 xl:mb-0'>
                    <div className=' w-[100%] 2xl:w-[75%]'>
                    <p className=' text-xl font-bold mb-2'>OUR MISSION</p>
                    <h3 className=' text-3xl lg:text-5xl font-extrabold mb-2'>NO MORE GRIMY FRIDGE DOOR!</h3>
                    <p className=' '>In all seriousness, our mission is to create lifelong hygiene habits to keep children healthy. GloSoap was designed to make hand washing as easy and fun as possible. With its dazzling visuals and smell kids will want to show off their soap to everyone around (this creates habits wink wink).</p>
                    <div>
                        <p className=' font-bold  text-xl mt-3 xl:mb-2'>Features:</p>
                        <ul className=' flex flex-col items-center xl:items-start'>
                            <li className=' flex items-center mb-3 xl:mb-1'><div className=' mr-2 hidden xl:block'><FaCheckDouble className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>Vivid colors make teaching handwashing easy and fun</p></li>
                            <li className=' flex items-center mb-3 xl:mb-1'><div className=' mr-2 hidden xl:block'><FaCheckDouble  className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>Everyone loves things that glow in the dark</p></li>
                            <li className=' flex items-center mb-3 xl:mb-1'><div className=' mr-2 hidden xl:block'><FaCheckDouble  className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>Make it a habit after every outdoor activity</p></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className=' w-full flex justify-center '>
                    <div className=' relative w-[200px] sm:w-[300px] lg:w-[400px] group cursor-pointer h-[300px] sm:h-[400px] lg:h-[530px]'  ><img src={'/Cuz 1.jpeg'}  className=' w-[200px] sm:w-[300px] lg:w-[400px] rounded-lg relative z-20  dark:border-white border-black border-[2px]'/>
                    <div className=' transition-all ease-in-out duration-300 absolute group-hover:top-5 group-hover:-right-5 sm:group-hover:-right-10 top-10 -right-10 sm:-right-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[400px] lg:h-[530px] rounded-md dark:border-white border-black border-[2px]'></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Secondbody