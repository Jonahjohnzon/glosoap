import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Text from '../../Text';
import {motion, AnimatePresence} from 'framer-motion'

const FAQItem = ({ question, answer }) => {
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  const anim = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        stiffness: 400,
      },
    },

  };
  return (
    <div className=' w-[90%] lg:w-[40%] pb-12  '>
      <div onClick={toggleAnswerVisibility} className=' cursor-pointer mb-5 text-sm sm:text-xl flex justify-between items-center w-full'><p>{question}</p> {isAnswerVisible?<FaChevronUp/>:<FaChevronDown />}</div>
      <AnimatePresence>
      {isAnswerVisible && <motion.p  className='text-sm sm:text-base mb-2 cursor-pointer'   variants={anim}
          initial="hidden"
          animate="animate"
          exit="hidden"
          >{answer}</motion.p>}</AnimatePresence>
    </div>
  );
};

const FAQList = () => {
  return (
    <div className=' dark:text-white font-Noto  flex flex-col items-center justify-center py-20'>
            <div className=' mb-5 font-bold'><h1><Text words={"YOU MAY NEED TO KNOW"}/></h1></div>
        <div><h1 className=' text-lg sm:text-2xl lg:text-5xl font-bold mb-10 '>FREQUENTLY ASKED QUESTIONS</h1></div>
      <FAQItem
        question="Does it really glow like in the pictures?"
        answer="Absolutely! The intensity will vary depending on how much soap you use, and how far away the black light is, so be sure to keep it no more than 2ft away."
      />
      <div className=' h-[2px] dark:bg-white bg-black w-[90%] lg:w-[40%] mb-5'></div>
            <FAQItem
        question="Is it safe??"
        answer="Yes! The special dye we use is FDA approved! Plus we try to use the least amount of ingredients to keep our soaps as pure as possible for your little ones!"
      />
      <div className=' h-[2px] dark:bg-white bg-black w-[90%] lg:w-[40%] mb-5'></div>
            <FAQItem
        question="Will my kids like it?"
        answer="Yes! We have many families that have incorporated our soaps as part of their daily lives. After soccer practice, before bedtime, and all others, any time is GloSoap Time!"
      />
      <div className=' h-[2px] dark:bg-white bg-black w-[90%] lg:w-[40%] mb-5'></div>
            <FAQItem
        question="Where can I buy it?!"
        answer="We are currently selling only online. Just order with the link and join the GloSoap Family!"
      />
    </div>
  );
};

export default FAQList;
