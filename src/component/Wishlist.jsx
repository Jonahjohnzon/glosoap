import React, { useEffect,useState } from 'react'
import Button from './Button'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import {motion, AnimatePresence} from 'framer-motion'
import { Priceapi } from '../Tabapi';
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";
import Tab from './Frontomponent/Tab';
import { Formik } from 'formik';

const Wishlist = () => {
  const [load, setload] = useState(true);
  const [result, setresult] = useState(false);
  const [wording, setwording] = useState("");

    const [openIndex, setOpenIndex] = useState(null);
    const schema = yup.object({
      firstname: yup.string().required().max(100),
      email: yup.string().required().max(100),
      lastname: yup.string().required().max(100),
    });
    useEffect(()=>{
        window.scrollTo({
          top: 0,
        });
      },[])

      const Tabs = ({ans}) =>{
        const e = Priceapi[ans]
        return(
            <div className=' w-full'>
                <Tab e={e}/>    
            </div>
        )
      }
      const FAQItem = ({ question, answer, index, openIndex, setOpenIndex }) => {
        const isAnswerVisible = index === openIndex;
      
        const toggleAnswerVisibility = () => {
          setOpenIndex(isAnswerVisible ? null : index);
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
              type: 'tween',
              duration: 0.3,
              stiffness: 400,
            },
          },
        };
      
        return (
          <div className='w-[100%] pb-8'>
            <div
              onClick={toggleAnswerVisibility}
              className='cursor-pointer mb-1 text-sm sm:text-xl flex justify-between items-center w-full'
            >
              <p>{question}</p> {isAnswerVisible ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {isAnswerVisible && (
                <motion.p
                  className='text-sm sm:text-base mb-1 w-full cursor-pointer'
                  variants={anim}
                  initial='hidden'
                  animate='animate'
                  exit='hidden'
                >
                  <Tabs ans={answer} />
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      };
  useEffect(()=>{
if(result)
{
  setTimeout(()=>{
    setresult(false)
  },5000)
}

  },[result])
  return (
    <div className=' xl:min-h-[100vh] pt-32 pb-40 font-Noto'>
        <div className=' flex justify-center'>
            <div className=' flex justify-between flex-col xl:flex-row w-[90%] sm:w-[80%] xl:h-[850px] border-white border-[1px] rounded-md overflow-hidden'>
                <div className=' w-full h-full '>
                <div style={{backgroundImage:'url("/Cuz 1.jpeg")'}} className=' relative h-full w-full bg-cover bg-center flex flex-col items-end '>
                    <div className=' absolute h-full bg-opacity-20 w-full bg-black z-10'></div>
                    <div className=' text-white w-[95%] xl:w-[80%] relative z-20 pt-10 pr-8'>
                       <h1 className=' font-bold  text-7xl mb-2'>GLOSOAP</h1> 
                       <h4 className=' text-xl mb-2'>See Cleanliness, Not Dirt!</h4>
                       <div  className=' text-lg mb-10'>GloSoap is the only soap that shows kids when their hands are fully clean. GloSoap shines under black light and makes the area of the skin the soap touches glow vibrantly. The brightly colored skin allows kids to see the areas that are clean and the areas where they need to scrub more (no glow). The fun and memorable experience ingrains hand washing habits at a young age so they can have a glowing future!</div>
                       <h2 className=' text-2xl font-bold'>Give a kid a soap and they will wash for a day. Teach a kid how to wash with GloSoap and they will wash for a lifetime</h2>
                       <div className=' pt-8'>
                            <FAQItem question={"The Starter ($10)"} answer={0} openIndex={openIndex} index={1} setOpenIndex={setOpenIndex}/>
                            <FAQItem question={"The Classic ($30)"} answer={1} openIndex={openIndex} index={2} setOpenIndex={setOpenIndex}/>
                            <FAQItem question={"The Too Many Kids ($55)"} answer={2} openIndex={openIndex} index={3} setOpenIndex={setOpenIndex}/>
                            
                       </div>
                    </div>
                </div>
                </div>
                <Formik
                initialValues={{email:"",firstname:"",lastname:""}}
                validationSchema={schema}
                onSubmit={(form,{resetForm})=>{
                  setload(false);
                  emailjs
                    .send(
                      "service_hvd65xv",
                      "template_768eyge",
                      form,
                      "MULnVs7OlxcLyqqL5",
                    )
                    .then(
                      (result) => {
                        setload(true);
                        setwording("Congrats, Details sent 🎉🎉🎉");
                        setresult(true);
                        resetForm()
                      },
                      (error) => {
                        setwording("Something went wrong 😿😿😿");
                        setload(true);
                        setresult(true);
                      },
                    );
                }}
                >
                  {(probs)=>{
                    return( 
                    <div className=' bg-[#080808] h-full text-white p-10 w-[100%] xl:w-[60%] cursor-default'>
                    <h1 className=' text-3xl sm:text-5xl font-bold mb-10'>SIGN UP FOR THE WAITLIST!</h1>
                    <div className=" text-red-500 text-sm">
                        {probs.touched.email && probs.errors.email}
                      </div>
                    <div className=' flex flex-col items-start mb-5'>
                        <label htmlFor='email' className=' '>Email</label>
                        <input type='email' id='email' value={probs.values.email} onChange={probs.handleChange('email')}  className=' w-[100%] py-3 sm:font-bold px-2 text-black rounded-md ' />
                    </div>
                    <div className=" text-red-500 text-sm">
                        {probs.touched.firstname && probs.errors.firstname}
                      </div>
                    <div className=' flex flex-col items-start mb-5'>
                        <label htmlFor='first' className=' '>First Name</label>
                        <input type='text' id='first' value={probs.values.firstname} onChange={probs.handleChange('firstname')} className=' w-[100%] py-3 sm:font-bold px-2 text-black rounded-md ' />
                    </div>
                    <div className=" text-red-500 text-sm">
                        {probs.touched.firstname && probs.errors.firstname}
                      </div>
                    <div className=' flex flex-col items-start mb-5'>
                        <label htmlFor='last' className=' '>Last Name</label>
                        <input type='text' id='last' value={probs.values.lastname} onChange={probs.handleChange('lastname')} className=' w-[100%] text-black py-3 px-2  sm:font-bold rounded-md ' />
                    </div>
                    <div className=' sm:text-base text-sm w-[100%]'>
                        <p>Glosoap needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our Privacy Policy.</p>
                    </div>
                    {load ? (
                    <input
                      type="submit"
                      value="Send"
                      className="  px-9 py-3 mt-4 border-black border-[1px] dark:border-0 border-opacity-20  bg-gradient-to-tr relative dark:from-white text-black from-[#FF0067] to-[#FF00E7] font-Inter font-semibold dark:to-slate-200  transition-colors group overflow-hidden  rounded-3xl cursor-pointer flex items-center"
                      onClick={probs.handleSubmit}
                    />
                  ) : (
                    <ReactLoading
                      type="spin"
                      color={"#00FF7B"}
                      height={"4%"}
                      width={"4%"}
                      className=" mt-2 ml-2"
                    />
                  )}
                    {result && (
                    <div className=' flex '>
                      <div className=" rounded-md font-bold  bg-[#00FF7B] py-5 px-3 text-black mt-5">{wording}</div>
                    </div>
                  )}
                </div>)}}</Formik>
            </div>
        </div>
    </div>
  )
}

export default Wishlist