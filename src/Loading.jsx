import React,{useEffect} from 'react'


const Loading = ({load}) => {
  useEffect(()=>{
    
    setTimeout(() => {
      load(false)
    }, 2000);
  },[])
  return (
    <div className=' w-full h-[100vh] flex justify-center items-center fixed top-0 dark:bg-black bg-[#F5F5F5] z-50'>
       <div><img src='/Logo.webp' className=' animate-bounce w-[100px]'/></div>
    </div>
  )
}

export default Loading