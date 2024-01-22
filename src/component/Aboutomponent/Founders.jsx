import React from 'react'
import { founder } from '../../Tabapi'
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const Founders = () => {
  return (
    <div className=' flex flex-col font-Noto  items-center justify-center py-8 dark:bg-[#080808] bg-white'> 
    <div><h1 className=' dark:text-white text-black font-bold text-3xl sm:text-5xl mb-10'>MEET THE TEAM</h1></div>
        <div className=' flex w-[70%] justify-center lg:justify-between flex-wrap'>
            {founder.map((e,i)=>{
                return(
                    <Link to={e.link} className=' w-fit overflow-hidden rounded-md mb-5 lg:mb-0 mx-2 lg:mx-0' key={i}>
                    <div className=' relative bg-cover 2xl:w-[200px] w-[200px] cursor-pointer h-[300px] lg:w-[150px] xl:w-[180px] group 3xl:w-[290px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px] 3xl:h-[380px] bg-center rounded-md ' style={{backgroundImage:`url(${e.profile})`}}>
                        <div className=' w-full h-full absolute top-0 z-10 bg-black bg-opacity-50 transition-all duration-300 ease-in-out group-hover:bg-opacity-0'>
                            <div className=' text-white  p-5 flex flex-col justify-end h-full '>
                                <p className=' text-lg sm:text-2xl font-bold mb-1'>{e.name}</p>
                                <p className=' mb-2'>{e.position}</p>
                                <p className=' text-black bg-white w-7 h-7 flex justify-center items-center rounded-full'><FaLinkedinIn /></p>
                            </div>

                        </div>

                    </div></Link>
                )
            })}
        </div>
       
    </div>
  )
}

export default Founders