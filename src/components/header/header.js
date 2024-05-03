import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [topBarData, setTopBarData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://realcommoditytradingbackend.vercel.app/businessinsider"
        );
        const jsonData = await response.json();
        setTopBarData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Fetch user data using the stored user ID
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      fetch(`http://localhost:9001/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Set the user's first name
          setUserName(data.first_name);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
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
        <div className="mx-auto text-center flex items-center">
          <p className="font-bold text-md quick-guide">Quick Guide</p>
        </div>

        <div className="col-span-full md:col-span-1 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border border-white pr-8 placeholder:text-yellow-100 focus:outline-yellow-300 px-3 py-1"
          />
          <FaSearch className="absolute right-2 top-2 cursor-pointer text-white" />
        </div>

        <div className="mx-auto text-center grid grid-cols-2 place-items-center">
          <NavLink to="/login">
            {userName ? (
              <div className="flex flex-row items-center gap-1">
              <IoPerson />
              <p className=" text-md capitalize">{userName}</p>
              <IoMdArrowDropdown className="mt-1"/>
              </div>
            ) : (
              <p className=" text-md ">Login/Register</p>
            )}
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
