import React, { useRef, useCallback, useState, useEffect } from "react";
import { TbArrowBadgeLeftFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import Text from "../../Text";

const Fourth = () => {
    const data = [
        {image:'/1.jpg'},
        {image:'/2.jpg'},
        {image:'/3.jpeg'},
        {image:'/4.jpg'},
        {image:'/5.jpg'},
    ]
    const swipes = useRef(null);
    const [view, setView] = useState(4);
  
    /**
     * slider button control
     */


    const handleNext = useCallback(() => {
      if (!swipes.current) return;
      swipes.current.swiper.slideNext();
    }, []);
    return (
      <div className="   relative bg-white dark:bg-[#080808] dark:bg-opacity-70">
        <div className="flex flex-col md:flex-row md:justify-between text-black dark:text-white font-barlow items-center">
          <div className=" md:w-[40%] flex justify-end">
            <div className="flex flex-col md:flex-row mt-10 md:mt-0 sm:h-52 md:w-3/4 justify-between items-center">
              <div className=" text-center flex flex-col items-center xl:items-start md:text-start">
                <div className=" text-3xl sm:text-5xl font-extrabold mb-2 m:mb-5">
                  CL<span className="dark:text-[#00FF62] text-[#DD00FF] ">E</span>AN <span className="dark:text-[#00FF62] text-[#DD00FF] ">H</span>ANDS
                </div>
                <div className=" font-bold text-green h-9 ">
                  <Text words={"OUR LATEST GALLERY"} />
                </div>
              </div>
              <div className=" group flex cursor-pointer " onClick={handleNext}>
                <TbArrowBadgeLeftFilled className=" dark:text-white text-black animate-pulses_ text-7xl -mr-10 group-hover:animate-none dark:group-hover:text-white group-hover:text-black " />
                <TbArrowBadgeLeftFilled className=" dark:text-white text-black text-7xl animate-pulses group-hover:animate-none group-hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" w-[98%] md:w-[60%] p-10 md:pt-10  text-white ">
            <div className=" flex w-full">
              <Swiper
                ref={swipes}
                modules={[Navigation, Pagination, Scrollbar]}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
            
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                scrollbar={{
                  draggable: true,
                }}
              >
                {data.map((e,i) => {
                  //returning images
                  return (
                    <SwiperSlide key={i}>
                        <div className=" min-h-[80px]">
                      <img
                        key={i}
                        src={e.image}
                        loading="lazy"
                        className=" rounded-md h-[90%] w-96"
                        
                      />
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className=" h-10"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Fourth