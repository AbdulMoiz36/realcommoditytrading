import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart, FaReply, FaHeart } from "react-icons/fa";
import { useUser } from "../../context/userProvider";
import { IoPerson } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VofferDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [postUser, setPostUser] = useState([]);
  const [postUserId, setPostUserId] = useState();
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
        `http://localhost:9001/verified_offers/${id}`
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch data");
      }
  
      const data = await response.json();
      setData(data);
      fetchPostUser(data.user_id);
      setPostUserId(data.user_id);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };
  
  const fetchPostUser = async (u_id) => {
    const userId = u_id;
    try {
      const response = await fetch(
        `http://localhost:9001/users/id/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to Fetch Post User data");
      }
      const postUser = await response.json();
      setPostUser(postUser);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };
 
  useEffect(() => {
    fetchData();
    // fetchPostComments(id);
    // fetchPostLikes();
  }, [id]);

  return (
    <>
    <div>VofferDetails</div>
    <p>{id}</p>
    <p>{postUserId} sdamn</p>
    </>
  )
}

export default VofferDetails