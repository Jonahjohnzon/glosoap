import React, { useState , useEffect} from "react";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const Second = () => {
  const [load, setload] = useState(true);
  const [result, setresult] = useState(false);
  const [wording, setwording] = useState("");
  const schema = yup.object({
    name: yup.string().required().max(100),
    email: yup.string().required().max(100),
    comment: yup.string().required(),
  });
  useEffect(()=>{
    if(result)
    {
      setTimeout(()=>{
        setresult(false)
      },5000)
    }
    
      },[result])
  return (
    <div className=" text-black dark:text-white bg-white dark:bg-black font-Inter flex justify-center py-10">
      <div className=" w-[95%] lg:w-[70%]">
        <div>
          <div className=" text-3xl sm:text-4xl font-bold mb-1 text-center lg:text-left">
            CONTACT
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between items-center">
          <div className=" w-[90%] text-center lg:text-left">
            <div className=" text-sm sm:text-xl mb-3">
              Send us an email we will respond
            </div>
            <div>
              <ul className=" text-gray font-medium mb-10">
                <li className=" text-lg font-bold mb-5 text-black dark:text-white">
                  INFORMATION
                </li>
                <li className=" mb-2 text-sm  xs:text-base">
                +1 234 567 8901
                </li>
                <li className=" mb-2 text-sm  xs:text-base">
                shopglosoaps@gmail.com
                </li>
                <li className=" mb-2 text-sm  xs:text-base">1234 Main Street, Toronto, ON, M12 345, Canada</li>
              </ul>
            </div>
          </div>
          <Formik
            className="flex flex-col  justify-center w-[90%] pb-5"
            initialValues={{ name: "", email: "", comment: "" }}
            validationSchema={schema}
            onSubmit={(forms,{resetForm}) => {
              setload(false);
              emailjs
                .send(
                  "service_hvd65xv",
                  "template_zdb9f1x",
                  forms,
                  "MULnVs7OlxcLyqqL5",
                )
                .then(
                  (result) => {
                    setload(true);
                    setwording("Mail sent 🎉🎉🎉");
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
            {(props) => {
              return (
                <div className=" flex-col w-full ">
                  <Form className=" flex flex-col md:flex-row justify-between mb-5 w-full">
                    <div className=" w-full">
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className=" px-2 w-[95%] dark:bg-transparent border-[2px] border-black dark:border-white border-solid py-3 mb-4 md:mb-0 rounded-lg"
                        value={props.values.name}
                        onChange={props.handleChange("name")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.name && props.errors.name}
                      </div>
                    </div>
                    <div className=" w-full flex-col flex md:items-end">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className=" px-2 w-[95%] dark:bg-transparent border-[2px] border-black dark:border-white border-solid py-3 rounded-lg"
                        value={props.values.email}
                        onChange={props.handleChange("email")}
                      />
                      <div className=" text-red-500 text-sm">
                        {props.touched.email && props.errors.email}
                      </div>
                    </div>
                  </Form>
                  <div>
                    <Field
                      as="textarea"
                      name="comment"
                      className="w-[100%] dark:bg-transparent border-[2px] border-black dark:border-white  border-solid h-44 p-2 rounded-lg"
                      placeholder="Comment*"
                      value={props.values.comment}
                      onChange={props.handleChange("comment")}
                    />
                    <div className=" text-red-500 text-sm">
                      {props.touched.comment && props.errors.comment}
                    </div>
                  </div>
                  {load ? (
                    <input
                      type="submit"
                      value="Send"
                      className="  px-9 py-3 mt-4 border-black border-[1px] dark:border-0 border-opacity-20  bg-gradient-to-tr relative dark:from-white text-black from-[#FF0067] to-[#FF00E7] font-Inter font-semibold dark:to-slate-200  transition-colors group overflow-hidden  rounded-3xl cursor-pointer flex items-center"
                      onClick={props.handleSubmit}
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
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Second;