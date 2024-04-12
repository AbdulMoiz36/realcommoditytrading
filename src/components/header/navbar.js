import React, { useState } from "react";
import { IoMdMenu, IoIosClose , IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full mx-auto p-2 px-10 md:px-32 lg:px-16 ">
      <div className="">
        <img src="https://realcommoditytrading.com/frontend/new_assets/img/logo.svg" alt="Logo" className="w-auto" />
      </div>

      <div className={`nav-links lg:static  lg:min-h-fit absolute shadow shadow-black lg:shadow-transparent bg-white flex flex-col  gap-5 min-h-screen ${isOpen ? 'left-0 transition-all duration-300' : 'left-[-100%] transition-all duration-300'} top-0 lg:w-auto md:w-[50%] w-[75%] flex items-start`}>
        <div className="bg-green-700 p-8 flex items-center justify-center w-full lg:hidden">
          <img src="https://realcommoditytrading.com/frontend/new_assets/img/logo.svg" alt="Logo" className="w-auto h-auto" />
          <IoIosClose onClick={toggleIcon} className="text-3xl cursor-pointer lg:hidden absolute top-0 right-0 text-white" />
        </div>
        <ul className="flex lg:flex-row flex-col lg:items-center gap-5 lg:gap-[2vw] px-8">
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw]" href="#">Home</a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw]" href="#">About Us</a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">PETROLEUM<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">METAL<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">AGRI/MEAT<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">FINANCE<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">SERVICE<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">Q&A<IoMdArrowDropdown /></a>
          </li>
          <li>
            <a className="hover:text-green-500 font-semibold lg:text-[1.1vw] flex items-center gap-1" href="#">Inquiry<IoMdArrowDropdown /></a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6 lg:hidden">
        {isOpen ? (
          <IoIosClose onClick={toggleIcon} className="text-3xl cursor-pointer lg:hidden" />
        ) : (
          <IoMdMenu onClick={toggleIcon} className="text-3xl cursor-pointer lg:hidden" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
