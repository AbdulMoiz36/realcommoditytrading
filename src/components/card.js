import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdHeart, IoMdEye  } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "./button";

const Card = ({ title, category, likes, views, comments, date }) => {
  return (
    <>
      <div className="card-div rounded-xl p-3 md:p-5 mx-3 md:mx-8 my-6 h-96 flex flex-col justify-between shadow-lg shadow-neutral-300 border-amber-400 border-2 ">
        <div className= "flex justify-between">
            <p className="underline font-medium text-gray-600 p-2 text-sm">{date}</p>
            <p className="text-white bg-red-600 py-2 px-2 md:px-7 rounded-md text-sm self-center">{category}</p>
        </div>
        <h3 className=" my-4 font-bold text-2xl overflow-auto">{title}</h3>
        <div className="flex lg:justify-around justify-between gap-1 border-b-4 p-2 md:p-4 border-t-4 border-gray-500 rounded-md">
          <div className="flex items-center">
            <button className="bg-blue-500 px-1 md:px-2 py-2 text-white font-semibold rounded-md ">Read More</button>
          </div>
          <div className="flex gap-2 md:gap-4">
            <div className="flex flex-col justify-center items-center text-center">
              <IoMdHeart className="text-red-600"/>
              <p>{likes}</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
            <BiMessageDetail />
              <p>{comments}</p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
            <IoMdEye className="text-blue-600"/>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
