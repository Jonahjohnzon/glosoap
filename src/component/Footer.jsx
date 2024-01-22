import React from "react";
import Text from "../Text";
import { Link } from "react-router-dom";

const Footer = ({load}) => {
  return (
    <footer className=" dark:bg-black bg-[#080808] text-white font-Noto  pt-20 flex justify-center cursor-default" >
      <div className=" w-full flex flex-col items-center justify-between ">
        <div className=" flex flex-col items-center">
          <h1 className=" text-xl xs:text-3xl md:text-5xl mb-5 ">
            PICK AN ADVENTURE
          </h1>
          <div className=" text-center">
            <div
              className=" text-black text-[50px] sm:text-[90px] capitalize  font-extrabold     leading-[0.85] m-0   "
              style={{
                textShadow:
                  "-1px 1px 0 #fff,1px 1px 0 #fff,1px -1px 0 #fff,-1px -1px 0 #fff",
              }}
            >
              <Text words="GLOSOAP" />
            </div>
          </div>
          <>
        
          </>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between  mt-10 w-5/6">
          <div>
            <ul className=" text-gray font-medium mb-10">
              <li className=" text-lg font-bold mb-5 text-white">
                INFORMATION
              </li>
              <li className=" mb-2 text-sm  xs:text-base">+1 234 567 8901</li>
              <li className=" mb-2 text-sm  xs:text-base">
              shopglosoaps@gmail.com
              </li>
              <li className=" mb-2 text-sm  xs:text-base">Toronto, Canada</li>
            </ul>
          </div>
          <div>
            <ul className=" flex flex-col lg:items-center text-lg lg:font-semibold mb-10">
              <li>
            
              <Link to={"/"} onClick={()=>load(true)}><div className="flex justify-start xl:justify-center mb-5 items-center">
                  <img src="/Logo.webp" className=" w-[70px] xl:w-[30%] " />
                </div></Link>
              </li>
              <>
              <Link to={"/about"} onClick={()=>load(true)}><li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  ABOUT
                </li></Link>
              </>
              <>
                 <Link to={"/contact"} onClick={()=>load(true)}><li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  CONTACT
                </li></Link>
              </>
              <>
              <Link to={"/product"} onClick={()=>load(true)}><li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  PRODUCT
                </li></Link>
              </>
            </ul>
          </div>
          <div>
            <ul className=" text-gray font-medium mb-10">
              <li className=" text-lg font-bold mb-5 text-white">FOLLOW US</li>
              <>
                <Link to={"https://www.tiktok.com/glosoap"}><li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  Tiktok
                </li>
                </Link>
              </>
              <>
                <Link to={"https://twitter.com/GloSoaps"}> <li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  Twitter
                </li>
                </Link>
              </>
              <>
                <Link to={"https://www.instagram.com/glosoap/"}><li className=" mb-2 text-sm  xs:text-base cursor-pointer hover:text-cream">
                  Instagram
                </li>
                </Link>
              </>
            </ul>
          </div>
        </div>
        <div className=" h-[50px] bg-dark w-full flex flex-col md:flex-row justify-around items-center">
          <div className=" text-[9px] xs:text-xs font-bold text-gray md:mb-0 mb-1">
            COPYRIGHT © 2024 - ALL RIGHTS RESERVED BY{" "}
            <span className=" text-green">GLOSOAP</span>
          </div>
          <>
            <div className=" text-gray font-bold flex items-center">
                <p className="text-[9px] xs:text-xs font-bold text-gray md:mb-0 mb-1">DESIGNED BY MIDNIGHT</p>
            </div>
          </>
        </div>
      </div>
    </footer>
  );
};

export default Footer;