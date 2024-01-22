import React,{useRef} from 'react'
import Button from '../Button'
import Text from '../../Text';
import { useInViewport } from "react-in-viewport";
import { Link } from 'react-router-dom';
const Third = () => {
    const refs = useRef();
    const { inViewport } = useInViewport(refs);
    const slide = {
      hidden: {
        x: 130,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, type: "tween", delay: 0.5 },
      },
    };
    return (
      <div className='  dark:text-white text-black font-barlow flex justify-center sm:pt-10'>
        <div className=" flex flex-col w-[100%] 2xl:w-[70%] items-center  xl:flex-row-reverse py-20 ">
          <div className=" w-full flex flex-col items-center">
            <div className=" flex flex-col text-center xl:text-start w-[80%] 2xl:w-[80%]">
              <div className=" text-3xl lg:text-5xl font-extrabold mb-3">
                THE JOURNEY
              </div>
              <div className=" h-0  border-t-8 dark:border-t-[#00FF62]  border-t-[#DD00FF] border-l-transparent border-l-8  border-r-transparent border-r-8 w-32 self-center xl:self-start mb-10"></div>
              <div className=" text-gray sm:text-lg mb-7 2xl:mb-10 ">
Embarking on our journey in 2018 from a basement, we've grown into a source of joy for 5,000 families and counting. With a dedicated team of four hardworking individuals in our office, we've made it our mission to also give back. In the past years, we proudly contributed 10k to various charities. This isn't just our story; it's a collaborative journey. 
              </div>
              <div className=" flex flex-col xl:flex-row items-center xl:items-start xl:justify-between">
                <div className=" w-[80%] sm:w-[60%] flex flex-col items-center xl:items-start justify-between">
                  <div className=" flex text-center justify-between w-[90%] mb-5  ">
                    <div>
                      <div className="text-2xl h-8 font-bold">
                        <Text words={"2018"} speed={0.1} />
                      </div>
                      <div className="text-base text-gray">
                        Founded
                      </div>
                    </div>
                    <div>
                      <div className="  text-2xl h-8  font-bold">
                        <Text words={"5000"} speed={0.1} />
                      </div>
                      <div className="text-base   text-gray">
                        Families
                      </div>
                    </div>
                    <div>
                      <div className="  text-2xl h-8  font-bold">
                        <Text words={"10K"} speed={0.1} />
                      </div>
                      <div className="text-base   text-gray">
                        Charity
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" xl:w-[70%] xs:w-1/2">
                      <Link  to="/waitlist"><Button word={"JOIN US"} style={' flex justify-center py-3 px-12  whitespace-nowrap'} /></Link>
                    </div>
                  </div>
                </div>
                <div className=" relative xl:my-0 my-10">
                  <div className=" w-[90px] whitespace-nowrap h-[90px] 2xl:w-[137px] 2xl:h-[137px] relative ml-[30px] mr-[50px] my-0 animate-[spins_12s_linear_infinite] transition-all cursor-pointer">
                    <img src="/circle.svg" />
                    <svg
                      className=" overflow-visible absolute w-20 h-20 -translate-x-2/4 -translate-y-2/4 rotate-[-33deg] left-2/4 top-2/4 lg:w-[60px] lg:h-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 150 150"
                      version="1.1"
                    >
                      <path
                        className=" fill-none"
                        id="textPath"
                        d="M 0,75 a 75,75 0 1,1 0,1 z"
                      ></path>
                      <text className=" fill-black dark:fill-[#fff] uppercase text-[28px]  font-semibold tracking-[3px] ">
                        <textPath href="#textPath" className=' '>the glosoap family</textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:block flex justify-center mb-5" ref={refs}>
          <div className=' w-full flex justify-center '>
                    <div className=' relative w-[200px] sm:w-[300px] lg:w-[400px] group cursor-pointer   h-[300px] sm:h-[400px] lg:h-[530px]'  ><img src={'/cuz2.jpeg'} onMouseEnter={()=>{stim(false)}} onMouseLeave={()=>{stim(true)}} className=' w-[200px] sm:w-[300px] lg:w-[400px] rounded-lg relative z-20  dark:border-white border-black border-[2px]'/>
                    <div className=' transition-all ease-in-out duration-300 absolute group-hover:top-5 group-hover:-right-5 sm:group-hover:-right-10 top-10 -right-10 sm:-right-20 w-[200px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[400px] lg:h-[530px] rounded-md dark:border-white border-black border-[2px]'></div></div>
                </div>
          </div>
        </div>
      </div>)
}

export default Third