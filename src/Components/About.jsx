import React from "react";
import about from "../ass/img/about.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();

 
  return (
    <>
     

      <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2' id="about">
        <div className=" col-span-1  md:w-[80%] text-center"> 
        <img src={about} className="inline"/>
        </div>
        <div className=" col-span-1 flex flex-col justify-center">
        <h2 className="text-[#06142E] font-bold text-3xl my-2 m-2">vinay YaDav</h2>
        <p className="m-2 my-2 text-justify"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            qui est non autem atque amet voluptas molestiae possimus maxime hic
            veritatis. Vero ipsam quae nemo dolorum voluptatibus commodi, totam
            autem.
          </p>
          <button className="bg-[#06142E] md:w-[30%] font-bold rounded text-[#fff] italic p-3 m-2"> <a href="VIKASH_RESUME_ (1).pdf" download>Download Resume</a></button>
       
           </div>
      </div>
    </>
  );
  
};

export default About;
