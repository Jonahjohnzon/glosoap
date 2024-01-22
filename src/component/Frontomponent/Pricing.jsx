import React from 'react'
import { Priceapi } from '../../Tabapi'
import { FaCheckDouble } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className=' text-black  dark:text-white bg-white dark:bg-[#080808] pb-20 flex flex-col items-center justify-center pt-20'>
        <div className=' flex flex-col items-center '>
            <div><h1 className='sm:text-xl font-bold mb-2'>GLOSOAP</h1></div>
            <div><h1 className=' text-3xl text-center lg:text-start lg:text-5xl font-extrabold mb-2'>YOUR EXPERIENCE AWAITS</h1></div>
            <div><h1 className='sm:text-xl font-bold mb-2'>SELECT YOUR ADVENTURE</h1></div>
        </div>
        <div className=' flex flex-wrap justify-center 3xl:justify-between w-[90%] sm:w-[60%] mt-3'>
            {
                Priceapi.map((e,u)=>{
                    return(
                        <div className=' flex mx-5 3xl:mx-0 mb-5 3xl:mb-0 justify-center items-center h-[550px] w-[350px]  cursor-default rounded-md bg-[#191919] dark:bg-slate-50  text-white dark:text-black' key={u}>
                        <div className=' w-[90%]'>
                        <div><p className=' text-6xl font-extrabold mb-2'>${e.price}</p></div>
                        <div><h3 className=' text-3xl font-extrabold mb-2'>{e.title}</h3></div>
                        <div className=' mb-2'><h6>{e.discription}</h6></div>
                        <div><h3 className=' text-lg font-bold mb-2'>What's Included:</h3></div>
                        <div className=' mb-5'>
                            {e.assets.map((o,i)=>{
                                return(
                                    <div key={i} >
                                        <div className=' flex items-center mb-2'><div className=' mr-2'><FaCheckDouble className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><div>{o}</div></div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className=' flex justify-start'>    
                            <Link to={"/waitlist"}><div className={`  py-2 px-3 border-black dark:border-[1px] border-0 border-opacity-20  bg-gradient-to-tr relative from-white text-black dark:from-[#FF0067] dark:to-[#FF00E7] font-Inter font-semibold to-slate-200  transition-colors group overflow-hidden  rounded-3xl cursor-pointer flex items-center`}><span className="w-0 h-full rounded bg-gradient-to-l dark:from-white dark:to-slate-200   from-[#FF0067] to-[#FF00E7] absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full  -z-1"></span><p className=' relative z-10'>Join Waitlist</p><FaArrowRight  className=' -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-300 ml-2'/> </div></Link></div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Pricing