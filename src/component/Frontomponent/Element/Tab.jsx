import React from 'react'

const Tab = ({e}) => {
  return (
    <div className=' w-80 h-40 flex flex-col items-center text-white bg-[#191919]  py-4 rounded-md'>
        <div className='flex flex-col items-center w-[95%]'>
        <h3  className=' font-extrabold text-2xl sm:text-4xl mb-1 sm:mb-5 '>{e.title}</h3>
        <p className=' font-bold text-center sm:text-lg'>{e.body}</p>
        </div> 
    </div>
  )
}

export default Tab