import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiDotsNineFill } from "react-icons/pi";
import { FaMoon, FaSun } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "./Button";
const Slide = ({ setslide, menu, setheme, load, theme }) => {
  const [toggle, setToggle] = useState(true);
  const slide = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
    exit: { opacity: 0 },
  };
  const child = {
    hidden: { x: 1200, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: 1200, opacity: 0 },
  };
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          variants={slide}
          initial="hidden"
          animate="animate"
          exit="exit"
          className=" w-[100vw] h-[100vh] lg:hidden fixed top-0 z-40 dark:bg-black bg-white   dark:text-white text-black font-Noto flex justify-center"
        >
         
          <motion.div
            variants={child}
            className=" w-[80%]  h-full  flex flex-col items-center justify-between"
          >
            <div className=" w-[80%] flex  flex-col items-center">
              <div className=" flex flex-col  w-full">
                {/*logo*/}
                <div className=" flex items-center w-full justify-between my-[1.8vh]"></div>

                <ul className=" text-gray  mt-[14vh] ">
                  
                  <Link
                    to="/"
                    onClick={() => {
                      load(true);
                      setslide(false);
                    }}
                  >
                    <li className=" mb-2 flex items-center  font-bold hover:text-cream">
                      <PiDotsNineFill className=" mr-4" />
                      HOME
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-black dark:bg-white mb-[3vh]"></div>
                  <Link
                    to="/about"
                    onClick={() => {
                      load(true);
                      setslide(false);
                    }}
                  >
                    <li className=" mb-2 flex items-center  font-bold hover:text-cream">
                      <PiDotsNineFill className=" mr-4" />
                      ABOUT US
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-black dark:bg-white mb-[3vh]"></div>
                  <Link
                    to="/contact"
                    onClick={() => {
                      load(true);
                      setslide(false);
                    }}
                  >
                    <li className=" mb-2 flex items-center  font-bold hover:text-cream">
                      <PiDotsNineFill className=" mr-4" />
                      CONTACT
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-black dark:bg-white mb-[3vh]"></div>
                  <Link
                  to={'/product'}
                    onClick={() => {
                      load(true);
                      setslide(false);
                    }}
                  >
                    <li className=" mb-2 flex items-center  font-bold hover:text-cream ">
                      <PiDotsNineFill className=" mr-4" />
                      PRODUCT
                    </li>
                  </Link>
                  <div className=" h-[0.1px] opacity-25 w-full bg-black dark:bg-white mb-[1vh]"></div>
                </ul>
              </div>
              <div className=" text-green font-bold flex w-full justify-start mt-[1vh] mb-[0vh]">
                <div className="  flex flex-col  items-start">
                  <div className=" flex  group mb-[2vh]">
                    <div
                      className=" bg-gray-300 bg-opacity-20 border-[1px] border-black border-opacity-20 px-1 w-fit rounded-3xl py-3 flex items-center cursor-pointer relative overflow-hidden"
                      onClick={() => {
                        setToggle(!toggle);
                        setheme(!theme);
                      }}
                    >
                      <div className=" mr-9 text-xl">
                        <FaMoon className=" text-gray-700" />
                      </div>
                      <div className=" text-xl">
                        <FaSun className=" text-[#F6F1D5]" />
                      </div>
                      <div
                        className=" absolute z-20 h-7 w-7 transition-all ease-in-out duration-300 bg-gray-700 dark:bg-slate-200 group-hover:bg-[#DD00FF] dark:group-hover:bg-[#00FF62] rounded-full"
                        style={{
                          transform: `translateX(${toggle ? "0%" : "174%"})`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="">
                    <Link to={"/waitlist"} onClick={() => {load(true)
                     setslide(false);}}>
                      <Button style={" px-5 py-3"} word={"Join Waitlist"} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" h-[0.1px] opacity-25 w-full bg-gray mb-[3vh]"></div>
              <div className="flex w-full justify-between">
                <div className=" hover:text-green cursor-pointer transition-all duration-500">
                  <AiOutlineTwitter size={20} />
                </div>
                <div className=" hover:text-green cursor-pointer transition-all duration-500">
                  <CgFacebook size={20} />
                </div>
                <div className=" hover:text-green cursor-pointer transition-all duration-500">
                  <TiSocialLinkedin size={20} />
                </div>
                <div className=" hover:text-green cursor-pointer transition-all duration-500">
                  <AiFillInstagram size={20} />
                </div>
              </div>
            </div>
            <div className=" w-full text-gray text-xs h-[8%] pl-10 flex items-center bg-blood">
              COPYRIGHT &copy; 2024 BY GLOSOAP{" "}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
