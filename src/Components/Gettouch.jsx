import React from "react";
import "./App.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Gettouch = () => {
  const style = { color: "red", fontSize: "1.5em", marginTop: "5px" };
  return (
    <>
   
      <div className=" py-[40px] bg-[#f4f6ff] rounded-tr-[100px]  ">
        <div className="max-width">
          <h2 className="title mb-[20px] before:content-[''] before:absolute   before:m-[0px] before:ml-[50%] before:w-[200px]before:h-[3px] before:bg-[#0d0404] before:transform -translate-y-1/2 "></h2>
          <div className="p-[10px] mx-[10] justify-between  mx-auto md:flex md:mx-[40px]  ">
            <div className="left  ">
              <div className=" from-slate-400 font-bold text-3xl text-justify ">
                Get touch in
              </div>
              <p className="tracking-normal text-[18px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt

              </p>
              <div className="icons my-[28px] ">
                <div className="row flex mt-[10px] ">
                  <FaUserLarge style={style} />
                  <div className="info ml-[25px] text-[18px] ">
                    <div>Name</div>
                    <div>Vinay Yadav</div>
                  </div>
                </div>
                <div className=" flex mt-[10px] ">
                  <FaLocationDot style={style} />
                  <div className="info ml-[25px] text-[18px]">
                    <div>Address</div>
                    <div>Phadni , Rewari</div>
                  </div>
                </div>
                <div className=" flex mt-[10px]  ">
                  <MdEmail style={style} />
                  <div className="info ml-[25px] text-[18px]">
                    <div>Email</div>
                    <div>ydvvinay1248@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right md:w-[65%]">
              <div className="text text-[#06142E] font-bold text-3xl text-justify mb-[10px] ">Message</div>
              <form action="#">
                <div className="field md:flex    ">
                  <div className="name h-[45px] mr-[10px] md:w-[50%] md:w-[full] justify-between mb-[15px] ">
                    <input type="text" placeholder="Name" required="" className="h-[90%] w-[100%] border border-[1px] border-lightgray rounded-[6px] px-[15px] text-[15px]  " />
                  </div>
                  <div className="email  h-[45px] md:w-[50%] justify-between mb-[15px]">
                    <input type="email" placeholder="Email" required="" className=" frist h-[90%] w-[100%] border border-[1px] border-lightgray rounded-[6px] px-[15px] text-[15px" />
                  </div>
                </div>
                <div className="fields  ">
                  <input type="text" placeholder="Subject" required="" className="h-[full] w-[100%] border border-[1px] border-lightgray rounded-[6px] px-[15px] py-[10px] text-[15px] mb-[15px]" />
                </div>
                <div class="field textarea w-[full] h-[80%]">
                  <textarea
                    name=""
                    cols="40"
                    rows="5"
                    placeholder="Describe project..."
                    required="" className="w-full border border-[1px] border-lightgray rounded-[6px] px-[15px] py-[10px] text-[15px] mb-[15px] "
                  ></textarea>
                </div>
                <div class="button">
                <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-[5px] ">Submit</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[8px] "></div>
    </>
  );
};

export default Gettouch;
