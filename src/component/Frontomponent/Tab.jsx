import React from 'react'
import { FaCheckDouble } from "react-icons/fa6";


const Tab = ({e}) => {
  return (
        <div className=' flex flex-wrap  w-[90%] mt-3'>
                        <div className=' flex  mb-5 3xl:mb-0 justify-center items-center   cursor-default ' >
                        <div className=' w-[100%]'>
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

                        </div>
                        </div>
        </div>

  )
}

export default Tab