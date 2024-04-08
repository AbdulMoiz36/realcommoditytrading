import React from "react";
import { Link } from "react-router-dom";
import { ReactCountryFlag } from "react-country-flag";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <div className="bg-blue-700 text-white h-7">
        <marquee>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit
          hic ipsam expedita exercitationem dignissimos magnam non reprehenderit
          debitis adipisci porro ratione quidem sequi, iusto laborum, totam
          veritatis quaerat harum.{" "}
        </marquee>
      </div>

      <div className="bg-green-600 text-white grid gap-5 p-2 px-[5%] grid-cols-2 md:grid-cols-3">
  <div className="order-1 mx-auto text-center flex items-center">
    <p className="font-bold quick-guide">Quick Guide</p>
  </div>

  <div className="order-3 md:order-2 col-span-full md:col-span-1 ">
    <input
      type="text"
      placeholder="Search..."
      className="w-full bg-transparent border border-white placeholder:text-gray-200 focus:outline-yellow-300 p-3"
    />
  </div>

  <div className="order-2 md:order-3 mx-auto text-center md:flex md:items-center md:gap-3">
    <Link to="/login" className="" >
      <p className="font-medium">Login/Register</p>
    </Link>
    <select name="" id="" className="px-6 py-1 bg-transparent outline-none border font-medium mt-2 md:mt-0 text-white">
      <option value="English" className="text-black " selected> English</option>
    </select>
  </div>
</div>

      <Navbar />
    </>
  );
};

export default Header;
