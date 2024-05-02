import React from "react";
import Button from "../../components/button";
import "./aboutus.css";
import video from "../../videos/aboutus.mp4";
import about1 from "../../images/about-1.png";
import about2 from "../../images/about-2.png";
import about3 from "../../images/about-3.jpg";
const Aboutus = () => {
  return (
    <>
      {/* Banner */}
      <div className="about-banner h-[90vh] w-full flex justify-center items-center">
        <video muted autoPlay loop src={video} title="About Us video"></video>
        <div className="text-white flex flex-col justify-center items-start mx-8 md:mx-28 lg:pr-[30%] gap-8 ">
          <h1 className="font-bold text-5xl ">ABOUT US</h1>
          <h4 className="font-semibold text-md">
            Global Intelligence Network of Commodity Trading Businesses. Create
            the Better World with Our Good Partners. Together, We are Stronger.
          </h4>
          <Button text="Join Us As A Partner" color="yellow" link="/#" />
        </div>
      </div>
      {/* Sections */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="about"
              className="lg:w-1/2 w-1/2 mx-auto lg:h-auto md:h-64 object-cover object-center rounded"
              src={about1}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col items-center gap-10 justify-center">
              <h2 className="text-green-600 font-bold text-3xl ">
                Who we are
              </h2>
              <p>
                Good Partners World Co., Ltd. is your global path to success!
                Our impressive unparalleled network of experienced partners span
                far and wide - from USA to Russia and China to Brazil; Europe,
                Africa, Middle East all way through Asia. Our team has a wealth
                of knowledge and experience that enables us to make smart
                international commodity trades while benefitting everyone
                involved. This trading powerhouse will open up endless
                possibilities for you!
              </p>
              <Button text="Request a Verified Offer Post" color="green" link="/#" />
            </div>
          </div>
        </div>
      </section>
      {/* Second */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img
              alt="about"
              className="lg:w-1/2 w-1/2 mx-auto lg:h-auto md:h-64 object-cover object-center rounded md:order-2"
              src={about2}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col items-center justify-center md:order-1">
              <h2 className="text-blue-600 font-bold text-3xl text-center ">
                How we help our members
              </h2>
              <p className="my-12">
                Our vast professional network gives our members access to
                reliable business partners. They can safely invest in various
                commodities, allowing them to amplify their success without
                taking on extra risk and worry. On top of that, we provide
                comprehensive solutions tailored specifically for individual
                business needs - check out our website today and find the
                perfect solution!
              </p>
              <Button text="Request a Verified Offer Post" color="blue" link="/#" />
            </div>
          </div>
        </div>
      </section>
      {/* Third */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="about"
              className="lg:w-1/2 w-1/2 mx-auto lg:h-auto md:h-64 object-cover object-center rounded"
              src={about3}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col items-center justify-center">
              <h2 className="text-yellow-500 font-bold text-3xl ">
                How It Works
              </h2>
              <p className="my-12">
                Navigating the commodity trading market can be challenging due
                to time and risk management. That's why we're here! Our teams of
                partners bring buyers, sellers, financiers, and verified offers
                together in one place. With our verification process
                (confirmation on Previous Records, Proofs of Product, Proof of
                Funds), relief is just a few clicks away - no more worrying
                about unsubstantiated opportunities or scams taking up your
                valuable resources. Jump over now to see what options are
                available on the VERIFIED OFFERS page – but don't forget: you
                must provide us Previous Record, Proof of Product, or Proof of
                Fund before further communication takes off!
              </p>
              <Button text="Request a Verified Offer Post" color="yellow" link="/#" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
