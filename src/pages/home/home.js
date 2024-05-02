import React, { useEffect, useState } from "react";
import Button from "../../components/button";
// import Card from "../../components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faqImage from "../../images/faq.png";
import Accordion from "../../components/accordion";
// import axios from 'axios';
import { NavLink } from "react-router-dom";
import DataTable from "../../components/datatable";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

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
          Find more at
          https://realcommoditytrading.com/service-fees-and-commision.
        </p>
      </>
    ),
  },
  {
    title: "What is the benefit of becoming a partner?",
    content: (
      <>
        <p>
          When you join us as a Partner you become a part of our team and
          network, which helps you find qualified matching companies. You are
          more trusted by clients now, as our name is associated with you. The
          commission from your valuable hard work is more secure when we work
          together as a team.
        </p>
        <br />
        <p>
          Our dedicated partners will be rewarded for their invaluable
          contribution to our ongoing success. Their efforts have helped propel
          us forward, and we are thrilled to recognize them with fitting
          rewards!
        </p>
        <br />
        <p>
          <b>Join Us at</b> :
          https://realcommoditytrading.com/partner-registration
        </p>
      </>
    ),
  },
  {
    title: "What is the wallet?",
    content:
      "By becoming a partner or contributing to the company, partners can store their hard-earned credits in this handy wallet for later use.",
  },
];

const Home = () => {
  const [vOffers, setvOffers] = useState([]);

  useEffect(() => {
    fetchVerifiedOffers();
  }, []);

  const fetchVerifiedOffers = async () => {
    try {
      const response = await fetch(
        "https://realcommoditytradingbackend.vercel.app/verified_offers/",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setvOffers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      Header: "Title",
      accessor: "offer_title",
    },
    {
      Header: () => (
        <div>
          <FaRegHeart className="mx-auto" />
        </div>
      ),
      accessor: "h",
      Cell: () => "hello",
    },
    {
      Header: () => (
        <div>
          <FaRegCommentAlt className="mx-auto" />
        </div>
      ),
      accessor: "hw",
      Cell: () => "Hello",
    },
    {
      Header: () => (
        <div>
          <FaRegEye className="mx-auto" />
        </div>
      ),
      accessor: "visitors_count",
    },
    {
      Header: "Type",
      accessor: "offer_type",
    },
    {
      Header: "Offer Date",
      accessor: "created_at",
      Cell: ({ value }) => {
        const date = new Date(value);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear().toString().slice(-2);
        return `${day}-${month}-${year}`;
      },
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="banner h-[80vh] w-full flex justify-center items-center">
        <div className="text-white flex flex-col justify-center items-start mx-8 md:mx-28 lg:pr-[30%] gap-8 ">
          <h2 className="font-bold text-4xl ">
            Global Partners Network for Commodity Trading Business
          </h2>
          <h4 className="font-semibold text-lg">
            We help finding qualified RWA sellers and buyers through our network
            of partners for companies who request us with Previous Records,
            Proof of Products or Funds.
          </h4>
          <Button text="Join Us As A Partner" color="yellow" link="/#" />
          <p className="font-bold quick-guide">
            Win $100,00 <NavLink href="#"> Find More &gt;</NavLink>
          </p>
        </div>
      </div>
      {/* Verified Offers Section */}
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-16 lg:mx-28 my-24">
        <div className="verified-offers md:w-2/6 md:mr-4 mb-4 md:mb-0">
          <div className="bg-blue-500 rounded-t-lg py-8">
            <h2 className="font-semibold text-white lg:text-5xl md:text-4xl text-4xl text-center md:text-left lg:px-8 md:px-6">
              Verified Offers
            </h2>
          </div>
          <div className="border-blue-500 bg-white p-6">
            <p className="text-md">
              Verified offers are created by our company only if Previous
              Record(s), Proof of Product(s), or Proof of Fund(s) is provided to
              us.
            </p>
          </div>
          <div className="text-center mt-4">
            <NavLink to="/#">
              <button className="btn-yellow text-white font-bold py-4 px-6 text-md rounded-lg hover:shadow-lg transition-all ease-in-out duration-500">
                Request a Verified Offer Post
              </button>
            </NavLink>
          </div>
        </div>
        <div className="overflow-x-auto rounded-t-2xl w-full">
          <DataTable columns={columns} data={vOffers} color={"blue"} />
        </div>
      </div>
      {/* Offers Section */}
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-16 lg:mx-28 my-24">
        <div className="verified-offers md:w-2/6 md:mr-4  md:mb-0">
          <div className="bg-green-500 rounded-t-lg py-8">
            <h2 className="font-semibold text-white lg:text-5xl md:text-4xl text-4xl text-center md:text-left lg:px-8 md:px-6">
              Offers
            </h2>
          </div>
          <div className="border-green-500 bg-white p-6">
            <p className="text-md">
              Offers are created by our members but without Previous Record(s),
              Proof of Product(s), or Proof of Fund(s).
            </p>
          </div>
          <div className="text-center mt-4">
            <NavLink to="/#">
              <button className="btn-yellow text-white font-bold py-4 px-6 text-md rounded-lg hover:shadow-lg transition-all ease-in-out duration-500">
                Create An Offer Post
              </button>
            </NavLink>
          </div>
        </div>
        <div className="overflow-x-auto rounded-t-2xl w-full">
          <DataTable columns={columns} data={vOffers} color={"green"} />
        </div>
      </div>

      {/* Faq */}
      <div className="flex justify-center p-10">
        <img src={faqImage} alt="Faq" />
      </div>
      <div className=" mx-10 md:mx-40">
        <Accordion items={accordianItems} />
      </div>
      <div className="p-32"></div>
    </>
  );
};

export default Home;
