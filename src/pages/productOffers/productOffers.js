import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import DataTable from "../../components/datatable";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const ProductOffers = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);
  const [vOffers, setvOffers] = useState([]);
  const [posts, setposts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/categories/id/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCategory(data);

    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message or retry logic
    }
  };
  const fetchVerifiedOffers = async () => {
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/verified_offers/all_data/subcat/${id}`,
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
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/post/all_data/subcat/${id}`,
        {
          method: "GET",
        }
      );
      const postdata = await response.json();
      setposts(postdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    fetchData();
    fetchVerifiedOffers();
    window.scrollTo(0, 0);
  },[id]);

  const verifiedPostColumns = [
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
      accessor: "totalLikes",
    },
    {
      Header: () => (
        <div>
          <FaRegCommentAlt className="mx-auto" />
        </div>
      ),
      accessor: "totalComments",
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
  const postColumns = [
    {
      Header: "Title",
      accessor: "post_title",
    },
    {
      Header: () => (
        <div>
          <FaRegHeart className="mx-auto" />
        </div>
      ),
      accessor: "totalLikes",
    },
    {
      Header: () => (
        <div>
          <FaRegCommentAlt className="mx-auto" />
        </div>
      ),
      accessor: "totalComments",
    },
    {
      Header: () => (
        <div>
          <FaRegEye className="mx-auto" />
        </div>
      ),
      accessor: "post_visitors_count",
    },
    {
      Header: "Type",
      accessor: "offer_status",
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
      <div className="w-full flex justify-center items-center p-4">
        <div className="lg:p-16 md:p-10 py-10 px-3 shadow-xl border-2 my-10 w-6/6 md:w-5/6 lg:w-5/6 flex flex-col items-center gap-10">
          <div className="flex justify-between w-full ">
            <Button
              text={`${category.name} Verified Offers`}
              color="yellow"
              link="#"
            />
            <Button
              text="Request a verified offer post"
              color="blue"
              link="#"
            />
          </div>
          <div className="overflow-x-auto rounded-t-2xl w-full mt-20 md:mt-0">
          <DataTable columns={verifiedPostColumns} data={vOffers} color={"blue"} />
          </div>
          <div className="flex justify-between w-full mt-10 ">
            <Button
              text={`${category.name} Offers`}
              color="green"
              link="#"
            />
            <Button
              text="Create a New Offer Post"
              color="yellow"
              link="#"
            />
          </div>
          <div className="overflow-x-auto rounded-t-2xl w-full mt-20 md:mt-0">
          <DataTable columns={postColumns} data={posts} color={"green"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOffers;
