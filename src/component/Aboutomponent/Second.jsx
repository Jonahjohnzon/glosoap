import React from "react";
import Box from "./Box";
import Text from "../../Text";

const Second = () => {
  return (
    <div className=" bg-white dark:bg-black font-Noto  dark:text-white text-black  flex justify-center pt-40 pb-24">
      <div className=" w-[93%] 2xl:w-[70%] flex xl:flex-row flex-col justify-between">
        <div className=" flex flex-col sm:flex-row  xl:flex-col items-center md:items-start justify-between lg:w-[40%] mb-10 lg:mb-0">
          <div className=" font-light text-3xl text-center md:text-start xl:text-6xl lg:text-5xl 2xl:text-6xl xl:w-[80%] lg:w-80 mb-4 lg:mb-0">
            GLOSOAP{" "}
            <span className=" font-bold text-[#DD00FF] dark:text-[#00FF62] ">
              AND
            </span>{" "}
            THE<span className=" font-bold"> TEAM</span>
          </div>
          <div className=" flex lg:w-full justify-end">
            <div className=" relative">
              <div className=" w-[90px] h-[90px] 2xl:w-[137px] 2xl:h-[137px] relative ml-[30px] mr-[50px] my-0 animate-[spins_12s_linear_infinite] transition-all cursor-pointer">
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
                  <text className=" fill-[#fff] uppercase text-[28px]  font-semibold tracking-[3px] ">
                    <textPath
                      href="#textPath"
                      className=" fill-black  dark:fill-white"
                    >
                      THE GLOSOAP FAMILY
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col-reverse items-center lg:items-start lg:flex-row relative overflow-hidden">
            <div className=" lg:absolute md:z-20 w-[90%] min-h-[300px] overflow-hidden   sm:min-h-[200px] left-14 md:-bottom-6 bg-white dark:bg-black flex justify-center items-center">
              <div className="  w-full flex flex-wrap m-2  text-black  dark:text-white sm:text-lg ">
                <Text
                  words={
                    "GloSoap is the only soap that shows kids when their hands are fully clean. GloSoap shines under black light and makes the area of the skin the soap touches glow vibrantly. The brightly colored skin allows kids to see the areas that are clean and the areas where they need to scrub more (no glow). The fun and memorable experience ingrains hand washing habits at a young age so they can have a glowing future! "
                  }
                  speed={0.006}
                />
              </div>
            </div>
            <div className=" lg:mr-6  lg:h-full overflow-hidden   lg:mb-0 mb-20">
              <img src="/2.jpg" className=" w-[500px] rounded-md " />
            </div>
            <div className="   lg:h-full overflow-hidden mb-10 lg:md-0">
              <img src="/3.jpeg" className="w-[700px] rounded-md" />
            </div>

            <div className=" absolute z-30 w-[20%] right-0 h-20 top-0 bg-white dark:bg-black">
              <div className=" pl-3 pt-3">
                <Box no={5} />
                <Box no={8} />
                <Box no={8} />
                <Box no={8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
