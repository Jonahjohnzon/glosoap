import React from 'react'

const Youtube = () => {
  return (
    <div className=' w-full overflow-hidden relative pb-10'>
<img src='/black1.png' className=' absolute -left-60 rotate-90  hidden h-[100vh] w-[80vw] z-10 dark:block'/>
    <img src='/white.png' className=' absolute -left-60  rotate-90 block h-[100vh] w-[80vw] z-10 dark:hidden'/>
        <div className=' flex flex-col items-center mt-10 relative z-20'>
        <div className=" text-3xl text-black dark:text-white lg:text-5xl font-extrabold mb-3">
               HAND WASHING TUTORIAL
              </div>
              <div className=" h-0 relative z-20  border-t-8 dark:border-t-[#00FF62]  border-t-[#DD00FF] border-l-transparent border-l-8  border-r-transparent border-r-8 w-40 self-center mb-10"></div>
        </div>
        <div className=' flex justify-center relative z-20'>
      
        <div>
     <iframe 
   className=' w-full lg:w-[400px] border-black dark:border-white border-[2px] rounded-md xl:w-[600px] h-[440px] 3xl:w-[740px] 3xl:h-[441px]'
  src={"https://www.youtube.com/embed/aDKXKlyVWf0?si=qgbbEqD698wb_Q60"} 
  title="YouTube video player" 
 allowFullScreen></iframe>
        </div>

     
        </div>
    </div>
  )
}

export default Youtube