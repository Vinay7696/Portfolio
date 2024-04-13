import React from "react";

const Skills = () => {
  return (
    <>
      <div className="py-[40px] bg-[]  text-[#000]" id="skill">
        <h2 className="  text-center p-[20px] relative mb-[10px] text-center italic font-bold font-bold text-4xl">
          SKILLS
        </h2>
        <div className=" p-[10px] mx-[10] mx-auto md:flex md:mx-[40px]  ">
          <div className=" w-full  justify-between ">
            <h2 className="text-[#06142E] font-bold text-3xl my-2 m-2">
              vinay YaDav
            </h2>
            <p className="m-2 my-2 ">
              Equipped with a solid foundation in front-end development and a
              passion for creating visually appealing and user-friendly
              websites, I am eager to contribute to innovative projects and
              continue learning and growing in a professional environment..
              Equipped with a solid foundation in front-end development and a
              passion for creating visually appealing and user-friendly
              websites, I am eager to contribute to innovative projects and
              continue learning and growing in a professional environment.
            </p>
            <button className="inline bg-[#06142E] before:z-999 md:w-[30%] font-bold rounded text-[#fff] italic p-3 m-2">
              Read More
            </button>
          </div>

          <div className="w-full  mt-[15px]">
            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">HTML</span>
                <span className="text-[20px]">90%</span>
              </div>
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%]  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[90%]"></div>
            </div>

            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">CSS</span>
                <span className="text-[20px]">80%</span>
              </div>
              
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%] before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[80%]"></div>
            </div>

            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">JAVASCRIPT</span>
                <span className="text-[20px]">70%</span>
              </div>
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%]  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[70%]"></div>
            </div>
            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">BOOTSTRAP</span>
                <span className="text-[20px]">80%</span>
              </div>
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%]  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[80%]"></div>
            </div>
            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">REACT JS</span>
                <span className="text-[20px]">20%</span>
              </div>
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%]  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[20%]"></div>
            </div>

            <div className="bars m-[0] p-[0]">
              <div className="info flex mb-[5px] text-center justify-between">
                <span className="text-[20px]">TAILWIND CSS</span>
                <span className="text-[20px]">50%</span>
              </div>
              <div className=" h-[5px] w-full bg-[lightgrey] relative before:content-[''] before:absolute before:h-[100%]  before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:w-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Skills;
