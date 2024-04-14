import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faqImage from "../../images/faq.png";
import Accordion from "../../components/accordion";
import Slider from "react-slick";
import axios from 'axios';


const accordianItems = [
  {
    title: "How to win $100,000 or more in credit",
    content: (
      <>
        <p>
          Our Partners have the opportunity to earn up to U$10,000 in credit*
          for each verified seller, buyer, or financier registration they
          complete. All associated documents, such as Previous Records, Proof of
          Products or Funds, Letter of Intent (LOI), Soft Corporate Offer (SCO)
          must also be included for verification purposes.
        </p>
        <br />
        <p>
          Our dedicated Partners also have options to work closely with shipping
          agents responsible for export/import processes and are involved in
          essential loading/unloading activities via an established inspection
          agency. Service fee will be paid to our partners once the work is
          finished.
        </p>
        <br />
        <p>
          * Our partner earns more than just commission when the involved
          transaction is completed. Rewarded credit is also cashed out with some
          restrictions. Make sure you take advantage of every opportunity with
          us and get rewarded today. Find more at{" "}
          <a href="https://realcommoditytrading.com/service-fees-and-commision">
            https://realcommoditytrading.com/service-fees-and-commision
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "What is the difference between offers and verified offers?",
    content: (
      <>
        <p>
          Verified offers are only created by our company after a detailed
          verification process, which confirms the authenticity of the offer
          through Previous Record(s), Proofs of Product(s) or Fund(s). This
          helps protect our members from receiving fake offers/services or
          fraudulent payments. When transactions complete successfully in this
          section, there is also an associated service fee charged by us.
        </p>
        <br />
        <p>
          Offers created by our member on the other hand do not require proof
          for authentication and therefore no service fee will be incurred when
          listed at our websites.
        </p>
      </>
    ),
  },
  {
    title: "How to create an offer post?",
    content: `Crafting the perfect offer post is easy and efficient! Simply log in, register, and click "Create New Offer Post" - quickly fill out the form with all details of your proposal.Make sure it's totally accurate - once you hit 'Submit,' only its creator can modify their offering afterwards - except for the title.`,
  },
  {
    title: "How to request a verified offer post?",
    content: `Requesting a Verified offer post is easy! Simply click "Request a Verified Offer Post” and fill out the form with all of your request information. Be sure to include Previous Records, Proof of Products or Funds. Once received, our team will swiftly verify these documents before posting the offer and finding matching companies for your request through our partners all around the world.`,
  },
  {
    title: "What happens to the documents that I share?",
    content:
      "Your documents are secure with us - they remain securely encrypted and stored offline only. We guarantee that your documents won't ever become public without your expressed permission. They will immediately be destroyed upon your request.",
  },
  {
    title: "What are an inquiry and counteroffer on a Verified Offer Post?",
    content:
      "If you find a Verified Offer that suits your needs, it's easy to send us an inquiry or even counteroffer directly through us. All you need is Previous Record(s), Proof of Product(s), or evidence of available funds - just submit the form and we'll take care of the rest!",
  },
  {
    title: "What is the cost of service charges?",
    content: (
      <>
        <p>
          To ensure the efficient completion of verified offer posts, a service
          fee will be charged for each successful transaction. For transactions
          up to USD10 million, service fee is 3%, then 2% for those between
          USD10M-50M; 1% for trades between USD50M-100M; and just 0.5 % above
          USD100M. Don't be shy about discussing rates: negotiations are always
          welcome here at our trading platform!
        </p>
        <p>
        Find more at https://realcommoditytrading.com/service-fees-and-commision.
        </p>
      </>
    ),
  },
  {
    title: "What is the benefit of becoming a partner?",
    content: <>
    <p>
    When you join us as a Partner you become a part of our team and network, which helps you find qualified matching companies. You are more trusted by clients now, as our name is associated with you. The commission from your valuable hard work is more secure when we work together as a team.
    </p>
<br />
    <p>
Our dedicated partners will be rewarded for their invaluable contribution to our ongoing success. Their efforts have helped propel us forward, and we are thrilled to recognize them with fitting rewards!
    </p>
<br />
<p>
<b>Join Us at</b> : https://realcommoditytrading.com/partner-registration
</p>

    </>,
  },
  {
    title: "What is the wallet?",
    content: "By becoming a partner or contributing to the company, partners can store their hard-earned credits in this handy wallet for later use.",
  },
];

const Home = () => {
  const [offers, setOffers] = useState([]);
  const backend = "localhost:9001";
  useEffect(() => {
    const fetchVerifiedOffers = async () => {
      try {
        const response = await axios.get(`https://realcommoditytradingbackend.vercel.app/verified_offers/`);
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching verified offers:', error);
      }
    };
    fetchVerifiedOffers();
  }, []);

  
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
        style={{ ...style, display: "block" }}
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
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };
  return (
    
    <>
      {/* Banner */}
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
      {/* Verified Offers Section */}
      <div className="verified-offers w-full flex flex-col  mx-auto ">
        <div className="bg-blue-500 w-5/5  md:w-3/5 text-center rounded-t-3xl mt-14 p-6 mx-2 md:mx-auto">
          <h2 className="font-bold text-5xl text-white">Verified Offers</h2>
        </div>
        <div className=" w-5/5 md:w-3/5 mx-2 md:mx-auto text-center p-7 border-x-2 border-blue-500 bg-white">
          <div>
            <p className="mb-7 sm:text-sm md:text-lg">
              Verified offers are created by our company only if Previous
              Record(s), Proof of Product(s), or Proof of Fund(s) is provided to
              us.
            </p>
          </div>
        </div>
      </div>
      <div className="verified-offers-cards px-10 md:mx-12 lg:mx-32 border-y-4 border-blue-500 rounded-lg mt-[-0.5rem] z-10 ">
        <Slider {...settings}>
        {offers.map((offer, index) => (
            <Card
              key={index}
              title={offer.offer_title}
              category={offer.offer_type}
              likes={10}
              views={offer.visitors_count}
              comments={10}
              date={new Date(offer.created_at).toLocaleDateString()}
            />
          ))}
        </Slider>
        <div className="text-center mt-10 mb-5">
          <Button
            text={"Request a Verified Offer Post"}
            color={"yellow"}
            link={"#"}
          ></Button>
        </div>
      </div>
      {/* Offers Section */}
      <div className="offers w-full flex flex-col  mx-auto ">
        <div className="bg-green-500 w-5/5  md:w-3/5 text-center rounded-t-3xl mt-14 p-6 mx-2 md:mx-auto">
          <h2 className="font-bold text-5xl text-white">Offers</h2>
        </div>
        <div className=" w-5/5 md:w-3/5 mx-2 md:mx-auto text-center p-7 border-x-2 border-green-500 bg-white">
          <div>
            <p className="mb-7 sm:text-sm md:text-lg">
              Offers are created by our members but without Previous Record(s),
              Proof of Product(s), or Proof of Fund(s).
            </p>
          </div>
        </div>
      </div>
      <div className="offers-cards px-10 md:mx-12 lg:mx-32 border-y-4 border-green-500 rounded-lg mt-[-0.5rem] z-10 ">
        <Slider {...settings}>
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
          <Button
            text={"Create An Offer Post"}
            color={"yellow"}
            link={"#"}
          ></Button>
        </div>
      </div>
      {/* Faq */}
      <div className="flex justify-center p-10">
        <img src={faqImage} alt="Faq Image" />
      </div>
      <div className=" mx-10 md:mx-40">
        <Accordion items={accordianItems} />
      </div>
      <div className="p-32"></div>
    </>
  );
};

export default Home;
