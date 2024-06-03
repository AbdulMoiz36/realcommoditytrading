import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InquiryWebsiteIssues = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const userId = sessionStorage.getItem("userId");
  const inquiryType = "inquiry-website-issue";

  useEffect(() => {
    if (userId) {
      fetch(`https://realcommoditytradingbackend.vercel.app/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.first_name + " " + data.last_name);
          setEmail(data.email);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inquiry){

      try {
        const response = await fetch('https://realcommoditytradingbackend.vercel.app/inquiries', {
          method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          inquiry_type: inquiryType,
          user_name: name,
          user_email: email,
          inquiry_text: inquiry,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }
      const result = await response.json();
      console.log('Inquiry submitted successfully:', result);
      toast.success("Inquiry Sent");
      // Optionally, reset the form or show a success message
      setInquiry("");
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  }else{
    toast.error("Submit Failed! Fill all fields.");
  }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-20 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-5/6 lg:w-4/6 flex flex-col md:items-center gap-10">
        <h1 className="text-center text-3xl m-5  md:text-4xl font-bold mb-3">Inquiry On Website Issues</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row md:justify-evenly m-5 gap-8'>
            <div className='w-full md:w-1/2 flex flex-col justify-center gap-2'>
              <label htmlFor="name" className='font-semibold'>Your Name: <span className='text-red-600'>*</span></label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-center gap-2'>
              <label htmlFor="email" className='font-semibold'>Email Address: <span className='text-red-600'>*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='mt-7 mx-5'>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor="inquiry" className='font-semibold'>Inquiry Description: <span className='text-red-600'>*</span></label>
              <textarea
                id="inquiry"
                placeholder="Please describe your inquiry in as much detail as possible. Our team will get back to you soon with a response."
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full"
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
              />
            </div>
            <div className='flex justify-center mt-7'>
              <input type="submit" value="Submit" className='bg-lime-500 hover:bg-lime-600 cursor-pointer px-10 py-3 rounded-lg text-white font-semibold text-lg' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryWebsiteIssues;
