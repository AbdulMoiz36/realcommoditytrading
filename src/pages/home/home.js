import React from "react";
import Button from "../../components/button";

const home = () => {
  return (
    <>
     <div className="banner h-[80vh] w-full flex justify-center items-center">
  <div className="text-white flex flex-col justify-center items-start mx-8 md:mx-28 lg:pr-[30%] gap-8 ">
    <h2 className="font-bold text-4xl md:text-6xl ">Global Partners Network for Commodity Trading Business</h2>
    <h4 className="font-semibold text-lg">We help finding qualified RWA sellers and buyers through our network of partners for companies who request us with Previous Records, Proof of Products or Funds.</h4>
    <Button text="Join Us As A Partner" color="yellow" link="/example" /> 
  </div>
</div>

    </>
  );
};

export default home;
