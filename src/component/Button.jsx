import React from 'react'
import { FaArrowRight } from "react-icons/fa6";



const Button = ({word, style}) => {
  return (
    <div className={`${style} border-black border-[1px] dark:border-0 border-opacity-20  bg-gradient-to-tr relative dark:from-white text-black from-[#FF0067] to-[#FF00E7] font-Inter font-semibold dark:to-slate-200  transition-colors group overflow-hidden  rounded-3xl cursor-pointer flex items-center`}><span className="w-0 h-full rounded bg-gradient-to-l from-white to-slate-200   dark:from-[#FF0067] dark:to-[#FF00E7] absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full  -z-1"></span><p className=' relative z-10'>{word}</p><FaArrowRight  className=' -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-300 ml-2'/> </div>
  )
}

export default Button