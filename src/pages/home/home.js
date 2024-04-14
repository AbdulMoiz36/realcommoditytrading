import React from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const home = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="banner h-[80vh] w-full flex justify-center items-center">
        <div className="text-white flex flex-col justify-center items-start mx-8 md:mx-28 lg:pr-[30%] gap-8 ">
          <h2 className="font-bold text-4xl md:text-6xl ">
            Global Partners Network for Commodity Trading Business
          </h2>
          <h4 className="font-semibold text-lg">
            We help finding qualified RWA sellers and buyers through our network
            of partners for companies who request us with Previous Records,
            Proof of Products or Funds.
          </h4>
          <Button text="Join Us As A Partner" color="yellow" link="/#" />
          <p className="font-bold quick-guide">
            Win $100,00 <a href="#"> Find More &gt;</a>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col  mx-auto ">
          <div className="bg-blue-500 w-5/5  md:w-3/5 text-center rounded-t-3xl mt-14 p-6 mx-2 md:mx-auto">
            <h2 className="font-bold text-5xl text-white">Verified Offers</h2>
          </div>
          <div className=" w-5/5 md:w-3/5 mx-2 md:mx-auto text-center p-7 border-x-2 border-blue-500 bg-white">
            <div>
              <p className="mb-7 sm:text-sm md:text-lg">
          Verified offers are created by our company only if Previous Record(s), Proof of Product(s), or Proof of Fund(s) is provided to us.
              </p>
           {/* <Button text={"Request a Verified Offer Post"} color={"yellow"} link={"#"}></Button>       */}
            </div>
          </div>
      </div>
      <div className=" px-10 md:mx-12 lg:mx-32 border-y-4 border-blue-500 rounded-lg mt-[-0.5rem] z-10 ">
      <Slider {...settings} >
        <Card
          title="Article Title"
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        <Card
          title="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        <Card
          title="Article Title"
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        <Card
          title="Article Title"
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        <Card
          title="Article Title"
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        <Card
          title="Article Title"
          category="Technology"
          likes={25}
          views={100}
          comments={5}
          date="April 12, 2024"
        />
        </Slider>
        <div className="text-center mt-10 mb-5">
        <Button text={"Request a Verified Offer Post"} color={"yellow"} link={"#"}></Button>
        </div>
      </div>
      <div className="p-32">

      </div>
    </>
  );
};

export default home;
