import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
  const [data, setData] = useState([]);
    
    const fetchData = async () => {
        try {
          const response = await fetch(
            `https://realcommoditytradingbackend.vercel.app/categories/id/${id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setData(data);
    
        } catch (error) {
          console.error("Error:", error);
          // Handle error, show error message or retry logic
        }
      };
      useEffect(()=>{
        fetchData();
      },[id])
  return (
    <>
    <p>Post Details</p>
    <p>{id}</p>
    </>
    
  )
}

export default PostDetails