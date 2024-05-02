import React from "react";
import Button from "../../components/button";
import "./aboutus.css";
import video from '../../videos/aboutus.mp4'
const Aboutus = () => {
  return (
    <>
      {/* Banner */}
      <div className="about-banner h-[90vh] w-full flex justify-center items-center">
      <video muted autoPlay loop src={video} title="About Us video"></video>
        <div className="text-white flex flex-col justify-center items-start mx-8 md:mx-28 lg:pr-[30%] gap-8 ">
          <h2 className="font-bold text-4xl md:text-6xl ">ABOUT US</h2>
          <h4 className="font-semibold text-lg">
            Global Intelligence Network of Commodity Trading Businesses. Create
            the Better World with Our Good Partners. Together, We are Stronger.
          </h4>
          <Button text="Join Us As A Partner" color="yellow" link="/#" />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
