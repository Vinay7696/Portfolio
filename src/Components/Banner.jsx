import React from "react";
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <div className="bg-[#06142E] w-full py-[20px] ">
        <div className="max-w-[1240px]  my-[70px] mx-auto text-center font-bold">
          <div className=" sm:text-[50px] md:text-[40px] text-[#F1916D] mt-4">
            Hello, my name is
          </div>
          <h2 className="text-[#F5D7DB] md:text-[40px] mt-4">Vinay YaDav</h2>
          <div className="mt-4 text-[20px] md:text-[50px]  text-[#e56b6f]  ">
            And I'm a
            <ReactTyped className="pl-3 text-[#F1916D] "
              strings={["Developer", "Desginer", "Freelancer"]}
              typeSpeed={200}
              loop={true}
              backSpeed={200}             
            />
          </div>
          <button className="bg-[#F1916D] mb-[10px] italic rounded text-[25px] p-3"> Hire Me</button>
        </div>
      </div>
    </>
  );
};

// #06142E
// #183358
// #473E66
// #BD83BB
// #F5D7DB
// #F1916D
export default Banner;
