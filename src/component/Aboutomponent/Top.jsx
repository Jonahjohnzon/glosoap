import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Top = () => {
  const anim = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.5,
        stiffness: 400,
      },
    },
  };
  return (
    <div className="  w-full text-black dark:text-white font-Noto relative overflow-hidden">
            <img src='/bgblack.png' className=' absolute -right-40 xl:-left-[500px] hidden w-[900px] z-10 dark:block'/>
    <img src='/bgwhite.png' className=' absolute -right-40 xl:-left-[500px] block w-[900px] dark:hidden'/>
      <div className=" flex justify-center pt-28 pb-10 relative z-20">
        <motion.div
          variants={anim}
          initial="hidden"
          animate="animate"
          className="flex justify-center lg:justify-between w-[90%] xl:w-[60%] items-center"
        >
          <div className=" py-20 flex lg:block flex-col items-center">
            <div className=" text-4xl sm:text-6xl font-bold mb-2 whitespace-nowrap">
              ABOUT US
            </div>
            <div className="group flex items-center text-sm sm:text-basess font-bold">
              <Link to="/">
                <div className=" mr-2  hover:text-[#DD00FF] dark:hover:text-[#00FF62] cursor-pointer">
                  HOME
                </div>
              </Link>
              <GoDotFill className="text-green group-hover:text-cream" />
              <div className=" ml-2">ABOUT US</div>
            </div>
          </div>
          <div className=" hidden lg:block hover:animate-wiggle cursor-pointer">
          <div className=' dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl overflow-hidden'><div className=' overflow-hidden dark:border-white border-black border-[1px] h-fit w-fit rounded-2xl  m-2'><img alt='glosoap' src='/top.png' className=' w-28 h-28 sm:w-40 sm:h-40 xl:w-80 xl:h-80'/></div></div>
          </div>
        </motion.div>
      </div>
      {/* buttom design*/}
      <div className="absolute flex w-full bottom-0 z-20">
        <div className="w-1/2 h-0 border-t-[#DD00FF] dark:border-t-[#00FF62] border-t-[50px] border-l-transparent border-l-[49vw] rotate-180"></div>
        <div className="w-1/2 h-0  border-t-[#DD00FF] dark:border-t-[#00FF62] border-t-[50px] border-r-transparent border-r-[49vw] rotate-180"></div>
      </div>
    </div>
  );
};

export default Top;