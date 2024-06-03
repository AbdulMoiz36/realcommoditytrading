import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [postUser, setPostUser] = useState([]);
  const [email, setEmail] = useState([]);
  const [userName, setUserName] = useState([]);
  const [totalComments, setTotalComments] = useState([4]);

  const getTextColor = (offerStatus) => {
    if (offerStatus === "buyer") {
      return "#001fe7"; // blue for buyer
    } else if (offerStatus === "seller") {
      return "red"; // red for seller
    } else if (offerStatus === "finance") {
      return "green"; // green for finance
    } else if (offerStatus === "announcement") {
      return "black"; // black for announcement
    } else {
      return "inherit";
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/post/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
      fetchPostUser(data.user_id);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message or retry logic
    }
  };
  const fetchPostUser = async (u_id) => {
    const userId = u_id;
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/users/id/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const postUser = await response.json();
      setPostUser(postUser);
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message or retry logic
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="w-full flex justify-center items-center p-4">
        <div className="lg:p-16 md:p-10 py-10 px-3 shadow-xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center lg:items-start gap-10">
          <div className="w-full">
            <div className="flex justify-between ">
              <p className="font-semibold text-blue-600 text-2xl">Offer Post</p>
              <div className="flex items-center gap-2 text-xl">
                <FaRegHeart className="text-red-600" />
                <p>Likes</p>
              </div>
            </div>

            <div className="bg-gray-100 p-10 text-lg flex flex-col gap-2 ">
              <p className="font-semibold text-2xl mb-3" style={{
                color: getTextColor(
                  data.offer_status
                ),
              }}>{data.post_title}</p>
              <div className="flex ">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500 text-wrap">Offer From</p>
                <p className="flex-grow capitalize" style={{
                  color: getTextColor(
                    data.offer_status
                  ),
                }}>{data.offer_status}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Origin</p>
                <p className="flex-grow">{data.goods_market_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Type/Grade/ Specification</p>
                <p className="flex-grow">{data.type_specification}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Quantity</p>
                <p className="flex-grow">{data.quantity_min_and_max === "NULL" ? "" : data.quantity_min_and_max}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Contract</p>
                <p className="flex-grow">{data.duration_of_contract}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Discharging Port</p>
                <p className="flex-grow">{data.discharging_port_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Loading Port</p>
                <p className="flex-grow">{data.loading_port_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Payment</p>
                <p className="flex-grow">{data.payments === "NULL" ? "" : data.payments}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Performance Bond</p>
                <p className="flex-grow">{data.performance_bond}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Inspection</p>
                <p className="flex-grow">{data.inspection}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Incoterms</p>
                <p className="flex-grow">{data.loading_port_incoterms_inspection}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Price</p>
                <p className="flex-grow">{data.price === "NULL" ? "" : data.price}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Commission paid by</p>
                <p className="flex-grow">{data.paid_by === "NULL" ? "" : data.paid_by}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Total of</p>
                <p className="flex-grow">{data.total_of === "NULL" ? "" : data.total_of}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Description</p>
                <p className="flex-grow h-40 overflow-y-auto">{data.description}</p>
              </div>
              <div className="flex border-t-2 mt-5">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Commodity</p>
                <p className="flex-grow">{data.post_category_selection}, {data.post_subtitle}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Finance Company Name</p>
                <p className="flex-grow font-bold text-red-500">Could Not Be Found By Developer</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Contact</p>
                <p className="flex-grow">{postUser.first_name} {postUser.last_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Email</p>
                <p className="flex-grow">{postUser.email}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Mobile Number</p>
                <p className="flex-grow">{postUser.phone}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">Telephone</p>
                <p className="flex-grow font-bold text-red-500">Could Not Be Found By Developer</p>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="font-semibold text-xl">Comment: {totalComments}</h2>
                <form>
                  <div className="flex gap-5 justify-center">
                  <div className="flex flex-col">
                  <label htmlFor="userName">Name:</label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="Name"
                    className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                    value={userName}
                    />
                    </div>
                    <div className="flex flex-col">
                  <label htmlFor="userEmail">Email:</label>
                  <input
                    type="text"
                    id="userEmail"
                    placeholder="Email"
                    className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                    value={email}
                    />
                    </div>
                  </div>
                  <div className="flex">

                    <div className="flex flex-col">
                  <label htmlFor="userEmail">Comment:</label>
                  <input
                    type="text"
                    id="userEmail"
                    placeholder="Email"
                    className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                    value={email}
                    />
                    </div>
                    </div>
                </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
