import React, { useState } from "react";
import { IoMdMenu, IoIosClose, IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between lg:justify-center items-center gap-5 w-full mx-auto p-2 px-10 md:px-32 lg:px-16 bg-white">
      <div className="">
        <img
          src="https://realcommoditytrading.com/frontend/new_assets/img/logo.svg"
          alt="Logo"
          className="w-auto"
        />
      </div>

      <div
        className={`nav-links lg:static  lg:min-h-fit absolute shadow shadow-black lg:shadow-transparent bg-white flex flex-col  gap-5 min-h-screen ${
          isOpen
            ? "left-0 transition-all duration-300"
            : "left-[-100%] transition-all duration-300"
        } top-0 lg:w-auto md:w-[50%] w-[75%] flex items-start`}
      >
        <div className="bg-green-700 p-8 flex items-center justify-center w-full lg:hidden">
          <img
            src="https://realcommoditytrading.com/frontend/new_assets/img/logo.svg"
            alt="Logo"
            className="w-auto h-auto"
          />
          <IoIosClose
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden absolute top-0 right-0 text-white"
          />
        </div>
        <ul className="navigation-list px-10 flex lg:flex-row flex-col lg:items-center gap-5 lg:gap-[1vw] ">
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              PETROLEUM
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Crude Oil</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>EN590</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>LCO</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>LNG/LPG</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>A1/JP54</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              METAL
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Copper</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Aluminum</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Gold</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Used Rail</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Iron Ores</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              AGRI/MEAT
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Soybean</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Sugar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Seed Oils</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Beef</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Chicken</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Pork</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              FINANCE
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Project Finance</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Project Finance</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Bank Instruments</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              SERVICE
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Escrow Lawyer</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Shipping</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Storage</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Banking</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Q&A
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>PETROLEUM</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>METAL</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>AGRI/MEAT</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>FINANCE</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Inquiry
              <IoMdArrowDropdown />
            </a>
            <ul>
              <li>
                <a href="#">
                  <p>Verified Offers</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Website Issues</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Partner Program</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Others</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6 lg:hidden">
        {isOpen ? (
          <IoIosClose
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden"
          />
        ) : (
          <IoMdMenu
            onClick={toggleIcon}
            className="text-3xl cursor-pointer lg:hidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
