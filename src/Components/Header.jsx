import React, { useState } from "react";
// import'../Components/App.css'
import { Link } from "react-scroll";
import LoadingBar from "react-top-loading-bar";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const [progress, setProgress] = useState(100);

  return (
    <>
      <LoadingBar
        color="red"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(100)}
        loaderSpeed={2000}
      />
      <div className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[5px]"></div>
      <nav className="bg-[#06142E] w-full p-5 {`app ${isSticky ? 'sticky' : ''}`}" >
        <div className="max-w-[1240px] my-[]  items-center flex   mx-[10px] justify-between  mx-auto">
          <div className="text-[#F5D7DB] text-3xl font-bold">VinayYaDav</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => settoggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => settoggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}
          <ul className="hidden md:flex gap-10 pl-10px text-[20px]">
            <li>
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href=""
                className="text-[#F5D7DB]"
                onClick={() => setProgress(100)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-43}
                duration={700}
                href=""
                className="text-[#F5D7DB]"
                onClick={() => setProgress(100)}
              >
                About
              </Link>
            </li>
            <li>
            <Link
                to="card"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                href=""
                className="text-[#F5D7DB]"
                onClick={() => setProgress(100)}
              >
                Project
              </Link>
            </li>
            <li>
            <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
                href=""
                className="text-[#F5D7DB]"
                onClick={() => setProgress(100)}
              >
                Skills
              </Link>
            </li>
          </ul>

          {/* responsive menu */}
          <ul
            className={` duration-300  md:hidden  w-full h-screen fixed bg-[#BD83BB]  mr-20px top-[88px] ${
              toggle ? "left-[0]" : "left-[-100%]"
            } `}
          >
            <li className="p-5">
              <a
                href=""
                className="text-[#06142E]"
                onClick={() => setProgress(100)}
              >
                Home
              </a>
            </li>
            <li className="p-5">
              <a
                href="#about"
                className="text-[#F5D7DB]"
                onClick={() => setProgress(100)}
              >
                About
              </a>
            </li>
            <li className="p-5">
              <a
                href=""
                className="text-[#06142E]"
                onClick={() => setProgress(100)}
              >
                Home
              </a>
            </li>
            <li className="p-5">
              <a
                href=""
                className="text-[#06142E]"
                onClick={() => setProgress(100)}
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
//  box shadow shadow-[0_3px_10px_rgb(0,0,0,0.2)]
export default Header;
