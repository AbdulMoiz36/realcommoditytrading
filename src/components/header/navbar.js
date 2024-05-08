import React, { useState } from "react";
import { IoMdMenu, IoIosClose, IoMdArrowDropdown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between lg:justify-center items-center gap-5 w-full mx-auto p-2 px-10 md:px-32 lg:px-16 bg-white drop-shadow-xl">
      <div>
        <NavLink to='/'>
        <img
          src={logo}
          alt="Logo"
          className="w-56"
        />
        </NavLink>
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
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw]"
              to={"/about"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              PETROLEUM
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Crude Oil</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>EN590</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>LCO</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>LNG/LPG</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>A1/JP54</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              METAL
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Copper</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Aluminum</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Gold</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Used Rail</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Iron Ores</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              AGRI/MEAT
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Soybean</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Sugar</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Seed Oils</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Beef</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Chicken</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Pork</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              FINANCE
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Project Finance</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Project Finance</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Bank Instruments</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              SERVICE
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Escrow Lawyer</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Shipping</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Storage</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Banking</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Q&A
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>PETROLEUM</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>METAL</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>AGRI/MEAT</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>FINANCE</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="hover:text-green-500 font-semibold lg:font-medium lg:text-[1vw] flex items-center gap-1"
              href="#"
            >
              Inquiry
              <IoMdArrowDropdown />
            </NavLink>
            <ul>
              <li>
                <NavLink href="#">
                  <p>Verified Offers</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Website Issues</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Partner Program</p>
                </NavLink>
              </li>
              <li>
                <NavLink href="#">
                  <p>Others</p>
                </NavLink>
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
