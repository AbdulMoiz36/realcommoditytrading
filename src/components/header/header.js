import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <div className="bg-blue-600 text-white h-7">
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero fugit
          hic ipsam expedita exercitationem dignissimos magnam non reprehenderit
          debitis adipisci porro ratione quidem sequi, iusto laborum, totam
          veritatis quaerat harum.{" "}
        </div>
      </div>

      <div className="bg-green-700 text-white grid gap-3 p-2 px-[5%] grid-cols-1 md:grid-cols-3">
  <div className=" mx-auto text-center flex items-center">
    <p className="font-bold text-lg quick-guide">Quick Guide</p>
  </div>

  <div className="col-span-full md:col-span-1 ">
    <input
      type="text"
      placeholder="Search..."
      className="w-full bg-transparent border border-white placeholder:text-gray-200 focus:outline-yellow-300 p-3"
    />
  </div>

  <div className="mx-auto text-center grid grid-cols-2 place-items-center">
    <NavLink to="/login" className="" >
      <p className="font-medium ">Login/Register</p>
    </NavLink>
    <select name="" id="" defaultValue="English" className="px-6 py-1 bg-transparent outline-none border font-medium mt-2 md:mt-0 text-white">
      <option value="English" className="text-black "> English</option>
    </select>
  </div>
</div>
      <Navbar />
    </>
  );
};

export default Header;
