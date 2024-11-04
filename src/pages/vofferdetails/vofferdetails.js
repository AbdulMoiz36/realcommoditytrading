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

  return (
    <>
    <div>VofferDetails</div>
    <p>{id}</p>
    </>
  )
}

export default VofferDetails