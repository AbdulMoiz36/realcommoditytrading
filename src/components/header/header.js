import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
const Header = () => {
  const [topBarData, setTopBarData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://realcommoditytradingbackend.vercel.app/businessinsider`);
        const jsonData = await response.json();
        setTopBarData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="top-bar bg-blue-600 text-white h-7 overflow-x-hidden ">
        <div className="marquee-div flex flex-row gap-8">
        {topBarData.map((item, index) => (
          <div key={index} className="flex text-nowrap items-center">
          <p className="mr-2 font-bold text-sm">{item.name}</p>
          <p>{item.unit}</p>
          <p>{item.price}</p>
        </div>
      ))}
      </div>
      </div>

      <div className="bg-green-600 text-white grid gap-3 p-2 px-[5%] grid-cols-1 md:grid-cols-3">
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
          <NavLink to="/login" className="">
            <p className="font-medium ">Login/Register</p>
          </NavLink>
          <div className="translation-div py-1 bg-transparent font-medium mt-2 md:mt-0 text-white">
            <div
              id="google_translate_element"
              className="border border-white bg-transparent"
            ></div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
