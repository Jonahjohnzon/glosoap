import React from "react";
import Text from "../../Text";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa6";
import { BiSolidDiamond } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";

const Third = () => {
  return (
    <div className=" text-black dark:text-white font-Noto  sm:pt-20 pt-20 pb-20 sm:pb-20 flex justify-center ">
      <div className=" w-[90%] md:w-[80%] lg:w-[97%] 2xl:w-[80%] flex flex-col lg:flex-row justify-between items-center ">
        <div className=" w-full  mb-5 lg:mb-0 ">
          <div className="flex flex-col items-center md:block">
            <div className=" text-green font-bold h-10">
              <Text words={"MISSION & FOUNDERS"} />
            </div>
            <div className=" text-2xl md:text-5xl font-bold mb-2">
              MISSION & FOUNDERS
            </div>
            <div className=" h-0  border-t-8 border-t-[#DD00FF] dark:border-t-[#00FF62] border-l-transparent border-l-8  border-r-transparent border-r-8 w-[120px] self-center mb-10"></div>
          </div>
          <div className=" flex flex-col sm:flex-row mb-10 text-center md:text-start">
            <div className=" sm:w-[40%] pr-3 flex flex-col items-center md:block sm:mb-0 mb-20">
              <div className=" text-[#DD00FF] dark:text-[#00FF62] text-4xl mb-7">
                <IoDiamondOutline />
              </div>
              <div className=" text-2xl   mb-3 font-bold ">
              To Rid The World Of Grime
              </div>
              <div className=" text-gray sm:text-lg">
              Our mission it to rid the world of grime. To liberate parents from sticky hands, items, and doors. To finally be able to once again own white, yes anything white, the walls, a couch, a sweater, etc.
              </div>
            </div>
            <div className=" sm:w-[50%] pr-3 flex flex-col items-center md:block">
              <div className="text-[#DD00FF] dark:text-[#00FF62] text-4xl mb-7">
              <BiSolidDiamond />
                
              </div>
              <div className=" text-2xl  mb-3 font-bold">
              FUN! We Want Them To Have Fun!
              </div>
              <div className="  text-gray sm:text-lg">
              But, most of all, we want to prevent your kids from getting sick. We want them to learn and carry throughout their whole life the gift of hygiene. Fewer sick days, fewer days off work! A healthy child and a healthy family.
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row  text-center md:text-start">
            <div className=" sm:w-[90%] pr-3 flex flex-col items-center md:block sm:mb-0 mb-20">
        
              <div className=" text:2xl lg:text-5xl font-bold  mb-3 ">
               FOUNDERS
              </div>
              <div className=" h-0  border-t-8 border-t-[#DD00FF] dark:border-t-[#00FF62] border-l-transparent border-l-8  border-r-transparent border-r-8 w-[120px] self-center mb-5"></div>
              <div className="  text-gray mb-2 sm:text-lg">
              -Julian is an Ex-OLED company chemist with 2 Masters degrees in quantum light capture Inventor of GloSoap and brother to a 13 year old!
              </div>
              <div className="  sm:text-lg text-gray mb-2">
              -Karan is a Materials Science Ph.D. and ex-NASA scientist. He has developed advanced materials for deep space missions rocket engines. He is currently a senior engineer at a startup in Silicon Valley. </div>
              <div><p className=" mt-3 mb-2 font-bold text-xl">Psychology of habits:</p></div>
              <div>
                        <p className=' font-bold  text-xl mt-3 xl:mb-2'>Features:</p>
                        <ul className=' flex flex-col items-center sm:items-start'>
                            <li className=' flex items-center mb-3 xl:mb-1 sm:text-lg'><div className=' mr-2 hidden sm:block'><FaCheckDouble className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>Habits you practice at home are habits you take with you</p></li>
                            <li className=' flex items-center mb-3 xl:mb-1 sm::text-lg'><div className=' mr-2 hidden sm:block'><FaCheckDouble  className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>The more fun the task the easier it is to become a habit</p></li>
                            <li className=' flex items-center mb-3 xl:mb-1 sm:text-lg'><div className=' mr-2 hidden sm:block'><FaCheckDouble  className='  text-[#DD00FF] dark:text-[#00FF62] '/></div><p>Share it with others and make it a habit in your community</p></li>
                        </ul>
                    </div>
            </div>
           

          </div>
        </div>
        <div className=" w-[70%] flex justify-center">
          <div>
            <img src="/founders.jpg"  className=" rounded-md"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;