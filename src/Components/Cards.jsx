import React from "react";
import project from "../ass/img/project.jpg";
import project3 from "../ass/img/project3.jpeg";
import project2 from "../ass/img/project2.jpg";
// import ReactCardSlider from 'react-card-slider-component';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import project3 from "../ass/img/project3.jpg";

const Cards = () => {
  return (
    <>
      <div className="py-[40px] bg-[#C6CEFF] text-center rounded-tr-[100px] " id="card">
      <h2 className="inline mb-[70px] text-center p-[20px] relative mb-[10px] italic font-bold font-bold text-4xl">PROJECT</h2>
        <div className=" max-w-[1240px]   mx-auto mx-[15px] md:grid grid-cols-3  md:flex  mt-[40px] ">
   
        <div className=" mt-[20px] max-w-xs rounded overflow-hidden shadow-lg mt-2 my-2 m-2 mx-auto">
            <img
              className="w-full"
              src={project}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-white">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veritatis rem est itaque facere!
                Consectetur labore, perspiciatis maxime fuga fugit illum.
              </p>
            </div>
          </div>

          <div className=" mt-[20px] max-w-xs rounded overflow-hidden shadow-lg mt-2 my-2 m-2 mx-auto">
            <img
              className="w-full"
              src={project}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-white">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veritatis rem est itaque facere!
                Consectetur labore, perspiciatis maxime fuga fugit illum.
              </p>
            </div>
          </div>

          <div className=" mt-[20px] max-w-xs rounded overflow-hidden shadow-lg mt-2 my-2 m-2 mx-auto">
            <img
              className="w-full"
              src={project2}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 bg-white">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Veritatis rem est itaque facere!
                Consectetur labore, perspiciatis maxime fuga fugit illum.
              </p>
            </div>
          </div>

        </div>
      
      </div>




     

 
    </>
  );
};

export default Cards;
