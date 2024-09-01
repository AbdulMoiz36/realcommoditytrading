import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaReply, FaHeart } from "react-icons/fa";
import { useUser } from "../../context/userProvider";
import { IoPerson } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [postUser, setPostUser] = useState([]);
  const [postLikes, setPostLikes] = useState([]);
  const [likeStatus, setLikeStatus] = useState(0);
  const [likeId, setLikeId] = useState();
  const [postComments, setPostComments] = useState([]);
  const [comment, setComment] = useState([]);
  const { userName, userEmail } = useUser();
  // Comments
  const [totalComments, setTotalComments] = useState([]);
  const [commentsToShow, setCommentsToShow] = useState(5);
  // Reply
  const [replyingTo, setReplyingTo] = useState(null); // Track which comment is being replied to
  const [replyText, setReplyText] = useState("");
  const handleReplyClick = (commentId) => {
    setReplyingTo(commentId); // Set the comment ID that is being replied to
    setReplyText(""); // Clear any previous reply text
  };

  const handleSendReply = async (commentId) => {
    // Prepare the reply object
    const newReply = {
      post_id: id, // The post ID to which the comment belongs
      user_id: sessionStorage.getItem("userId"), // Fetch the user ID from session storage or state
      user_name: userName, // Assume userName is fetched from state or props
      comment_text: replyText, // The text of the reply
      reply_id: commentId, // The ID of the parent comment to which this is a reply
    };

    try {
      const response = await fetch(
        "https://realcommoditytradingbackend.vercel.app/post_comments_n_socials/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReply), // Send the reply data to the backend
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send reply");
      }

      // Optionally, show a success message
      toast.success("Reply added successfully!");

      // Clear the reply state and hide the reply input
      setReplyingTo(null);
      setReplyText("");

      // Optionally, refresh comments to show the new reply
      fetchPostComments(id); // Fetch updated comments list after reply is added
    } catch (error) {
      console.error("Error sending reply:", error);
      // Handle error, show error message or retry logic
    }
  };

  // Function to fetch post likes and determine if the user has liked the post
  const fetchPostLikes = async () => {
    const postId = id;
    const userId = sessionStorage.getItem("userId");

    try {
      // Fetch likes for the post to count total likes
      const response = await fetch(
        `http://realcommoditytradingbackend.vercel.app/post_like_tbl/post/${postId}`
      );
      if (!response.ok) {
        setPostLikes(0); // Set to 0 if fetch fails
        throw new Error("Failed to fetch post likes");
      }

      const postLikes = await response.json();

      // Set the total number of likes
      setPostLikes(Object.keys(postLikes).length);

      // Check if the user has liked the post
      const userLikeResponse = await fetch(
        `http://realcommoditytradingbackend.vercel.app/post_like_tbl/user_post/${userId}/${postId}`
      );

      if (userLikeResponse.ok) {
        const userLikeData = await userLikeResponse.json();
        console.log(userLikeData.length);

        // Ensure the data structure is as expected
        if (userLikeData.length > 0) {
          setLikeStatus(1); // Set likeStatus to 1 if the user has liked the post
          setLikeId(userLikeData._id); // Save the like ID
        } else {
          setLikeStatus(0); // Set likeStatus to 0 if no like ID is found in the response
          setLikeId(null);
        }
      } else if (userLikeResponse.status === 404) {
        // User has not liked the post
        setLikeStatus(0);
        setLikeId(null);
      } else {
        throw new Error("Failed to check user's like status");
      }
    } catch (error) {
      console.error("Error:", error);
      setLikeStatus(0); // Ensure likeStatus is reset in case of error
    }
  };

  // Function to handle adding a like
  const saveLike = async () => {
    const post_id = id;
    const user_id = sessionStorage.getItem("userId");

    try {
      const requestBody = { post_id, user_id };

      const response = await fetch("http://realcommoditytradingbackend.vercel.app/post_like_tbl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to create a new like entry");
      }

      // Upon successful creation, update the state to reflect the new like
      const newLikeData = await response.json();
      setLikeStatus(1);
      setLikeId(newLikeData._id); // Save new like ID
      toast.success("You liked this post");

      // Optionally refetch likes
      fetchPostLikes(); // Refresh to reflect updated likes
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while liking the post");
    }
  };

  // Function to handle removing a like
  const deleteLike = async () => {
    const post_id = id;
    const user_id = sessionStorage.getItem("userId");

    if (likeStatus === 0) return; // No like to delete

    try {
      const response = await fetch(
        `http://realcommoditytradingbackend.vercel.app/post_like_tbl/${user_id}/${post_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        toast.error("Like failed to be removed from this post");
        throw new Error("Failed to delete like");
      }

      // Update state to reflect the like removal
      setLikeStatus(0);
      setLikeId(null);
      toast.success("Like removed from this post");

      // Optionally refetch likes
      fetchPostLikes(); // Refresh to reflect updated likes
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while removing the like");
    }
  };

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
  // Comments Posting
  const handleAddComment = async () => {
    try {
      const newComment = {
        post_id: id,
        user_id: sessionStorage.getItem("userId"),
        user_name: userName,
        comment_text: comment,
      };

      const response = await fetch(
        "https://realcommoditytradingbackend.vercel.app/post_comments_n_socials/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      // Optionally, clear the comment text and/or update the UI
      toast.success("Comment Added");
      setComment("");
      fetchPostComments(id);

      // Call any function to refresh the comments list, if needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message or retry logic
    }
  };

  const loadMoreComments = () => {
    setCommentsToShow((prevCount) => prevCount + 5); // Increment by 5
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
      // console.error("Error:", error);
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
      // console.error("Error:", error);
      // Handle error, show error message or retry logic
    }
  };
  const fetchPostComments = async (p_id) => {
    const postId = p_id;
    try {
      const response = await fetch(
        `https://realcommoditytradingbackend.vercel.app/post_comments_n_socials/post/${postId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const allComments = await response.json();
  
      const mainComments = allComments.filter(comment => !comment.reply_id);
      const replies = allComments.filter(comment => comment.reply_id);
  
      const commentsWithReplies = mainComments.map(comment => ({
        ...comment,
        reply: replies.find(reply => reply.reply_id === comment._id) || null, 
      }));
  
      setPostComments(commentsWithReplies);
      setTotalComments(allComments.length); 
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
    fetchPostComments(id);
    fetchPostLikes();
  }, [id]);

  return (
    <>
      <div className="flex justify-center">
        <div className="lg:p-16 md:p-10 py-10 px-3 shadow-xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col items-center lg:items-start gap-10">
          <div className="w-full">
            <div className="flex justify-between ">
              <p className="font-semibold text-blue-600 text-2xl">Offer Post</p>
              {likeStatus > 0 ? (
                <div
                  className="flex items-center gap-2 text-xl cursor-pointer"
                  onClick={() => {
                    console.log("Deleting like...");
                    deleteLike();
                  }}
                >
                  <FaHeart className="text-red-600" />
                  <p>{postLikes > 0 ? postLikes : 0}</p>
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 text-xl cursor-pointer"
                  onClick={() => {
                    console.log("Saving like...");
                    saveLike();
                  }}
                >
                  <FaRegHeart className="text-red-600" />
                  <p>{postLikes > 0 ? postLikes : 0}</p>
                </div>
              )}
            </div>

            <div className="bg-gray-100 p-10 text-lg flex flex-col gap-2 ">
              <p
                className="font-semibold text-2xl mb-3"
                style={{
                  color: getTextColor(data.offer_status),
                }}
              >
                {data.post_title}
              </p>
              <div className="flex ">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500 text-wrap">
                  Offer From
                </p>
                <p
                  className="flex-grow capitalize"
                  style={{
                    color: getTextColor(data.offer_status),
                  }}
                >
                  {data.offer_status}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Origin
                </p>
                <p className="flex-grow">{data.goods_market_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Type/Grade/ Specification
                </p>
                <p className="flex-grow">{data.type_specification}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Quantity
                </p>
                <p className="flex-grow">
                  {data.quantity_min_and_max === "NULL"
                    ? ""
                    : data.quantity_min_and_max}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Contract
                </p>
                <p className="flex-grow">{data.duration_of_contract}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Discharging Port
                </p>
                <p className="flex-grow">{data.discharging_port_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Loading Port
                </p>
                <p className="flex-grow">{data.loading_port_name}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Payment
                </p>
                <p className="flex-grow">
                  {data.payments === "NULL" ? "" : data.payments}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Performance Bond
                </p>
                <p className="flex-grow">{data.performance_bond}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Inspection
                </p>
                <p className="flex-grow">{data.inspection}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Incoterms
                </p>
                <p className="flex-grow">
                  {data.loading_port_incoterms_inspection}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Price
                </p>
                <p className="flex-grow">
                  {data.price === "NULL" ? "" : data.price}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Commission paid by
                </p>
                <p className="flex-grow">
                  {data.paid_by === "NULL" ? "" : data.paid_by}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Total of
                </p>
                <p className="flex-grow">
                  {data.total_of === "NULL" ? "" : data.total_of}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Description
                </p>
                <p className="flex-grow h-40 overflow-y-auto">
                  {data.description}
                </p>
              </div>
              <div className="flex border-t-2 mt-5">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Commodity
                </p>
                <p className="flex-grow">
                  {data.post_category_selection}, {data.post_subtitle}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Finance Company Name
                </p>
                {/* <p className="flex-grow font-bold text-red-500">Could Not Be Found By Developer</p> */}
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Contact
                </p>
                <p className="flex-grow">
                  {postUser.first_name} {postUser.last_name}
                </p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Email
                </p>
                <p className="flex-grow">{postUser.email}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Mobile Number
                </p>
                <p className="flex-grow">{postUser.phone}</p>
              </div>
              <div className="flex">
                <p className="flex-shrink-0 w-1/4 font-semibold text-amber-500">
                  Telephone
                </p>
                {/* <p className="flex-grow font-bold text-red-500">Could Not Be Found By Developer</p> */}
              </div>
            </div>

            <div className="w-full bg-lime-50 p-4 border-t-2 border-gray-400">
              <h2 className="font-semibold text-xl">
                Comments: {totalComments}
              </h2>
              {postComments.slice(0, commentsToShow).map((comment, index) => (
                <div className="mt-5 flex flex-col gap-2 group" key={index}>
                  <div className="flex">
                    <IoPerson className="rounded-full bg-gray-300 text-4xl p-1 text-gray-600 mt-2" />
                    <div className="ml-2">
                      <p className="font-semibold text-lg capitalize">
                        {comment.user_name}
                      </p>
                      <p className="text-sm flex items-center">
                        <LuCalendarClock className="text-lime-800 mt-1 mr-1" />
                        {new Date(comment.created_at).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}{" "}
                        {new Date(comment.created_at).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                      <div className="mt-1 text-lg">{comment.comment_text}</div>
                      {!comment.reply && (
                        <div className="mt-2">
                          <button
                            className="text-yellow-700 font-semibold hidden group-hover:flex"
                            onClick={() => handleReplyClick(comment._id)}
                          >
                            <FaReply className="mt-1 mr-1 " /> Reply
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {comment.reply && (
                    <div className="ml-12 mt-3 p-2 bg-amber-100 rounded-md border border-gray-300">
                      <div>
                        
                      </div>
                      <p className="font-semibold text-sm capitalize flex">
                      <IoPerson className="rounded-full bg-gray-300 text-4xl p-1 text-gray-600" />
                        <span className="mt-1.5 ml-1">{comment.reply.user_name}</span>
                      </p>
                      <p className="text-sm flex items-center ml-10">
                        <LuCalendarClock className="text-lime-800 mt-1 mr-1" />
                        {new Date(comment.reply.created_at).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}{" "}
                        {new Date(comment.reply.created_at).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                      <div className="mt-1 text-lg ml-10">
                        {comment.reply.comment_text}
                      </div>
                    </div>
                  )}
                  {replyingTo === comment._id && (
                    
                    <div className=" container mt-2">
                      <textarea
                        className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full "
                        rows="3"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply..."
                      ></textarea>
                      <button
                        className="bg-lime-600 hover:bg-lime-700 text-white px-3 py-1 mt-2 rounded"
                        onClick={() => handleSendReply(comment._id)}
                      >
                        Send Reply
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {commentsToShow < postComments.length && (
                <div className="flex justify-center mt-5">
                  <button
                    onClick={loadMoreComments}
                    className="bg-gray-500 text-white font-semibold py-2 px-5 text-md rounded-lg hover:bg-lime-500 hover:shadow-lg transition-all ease-in-out duration-500"
                  >
                    Load More Comments...
                  </button>
                </div>
              )}
            </div>

            <div className="mt-5 container">
              <form>
                <div className="flex gap-5 justify-center">
                  <div className="flex flex-col">
                    <label htmlFor="userName">Name:</label>
                    <input
                      type="text"
                      id="userName"
                      placeholder="Name"
                      className="px-3 py-4 border border-green-500 outline-yellow-500 text-gray-500 capitalize rounded-md w-full md:w-96"
                      value={userName}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="userEmail">Email:</label>
                    <input
                      type="text"
                      id="userEmail"
                      placeholder="Email"
                      className="px-3 py-4 border border-green-500 outline-yellow-500 text-gray-500 rounded-md w-full md:w-96"
                      value={userEmail}
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="container px-20">
                    <label htmlFor="comment-box">Comment:</label>
                    <textarea
                      type="text"
                      id="comment-box"
                      placeholder="Comment"
                      className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full "
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
              <div className="w-full pt-5 flex justify-center">
                <button
                  className="btn-yellow text-white font-semibold py-3 px-7 text-md rounded-lg hover:shadow-lg transition-all ease-in-out duration-500"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
