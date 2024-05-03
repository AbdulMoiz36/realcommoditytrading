import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./navbar";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [topBarData, setTopBarData] = useState([]);
  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://realcommoditytradingbackend.vercel.app/businessinsider"
        );
        const jsonData = await response.json();
        setTopBarData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Fetch user data using the stored user ID
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      fetch(`https://realcommoditytradingbackend.vercel.app/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Set the user's first name
          setUserName(data.first_name);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleLogout = () => {
    // Show confirmation modal
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    // Hide modal
    setShowModal(false);
    // Redirect to homepage
    navigate("/");
    // Show toast
    toast.success('Logged out successfully!');
  };

  return (
    <>
      <div className="top-bar bg-blue-600 text-white h-7 overflow-x-hidden ">
        <div className="marquee-div flex flex-row gap-8">
          {topBarData.map((item, index) => (
            <div key={index} className="flex text-nowrap items-center">
              <p className="mr-2 font-bold text-sm">{item.name}</p>
              <p>{item.unit}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-600 text-white grid gap-3 p-2 px-[5%] grid-cols-1 md:grid-cols-3">
        <div className="mx-auto text-center flex items-center">
          <p className="font-bold text-md quick-guide">Quick Guide</p>
        </div>

        <div className="col-span-full md:col-span-1 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border border-white pr-8 placeholder:text-yellow-100 focus:outline-yellow-300 px-3 py-1"
          />
          <FaSearch className="absolute right-2 top-2 cursor-pointer text-white" />
        </div>

        <div className="mx-auto text-center grid grid-cols-2 place-items-center">
            {sessionStorage.getItem("userId") ? (
              <div className="flex flex-row items-center gap-1 cursor-pointer py-">
              <IoPersonCircleSharp className="text-xl"/>
              <ul className="navigation-list">
                <li>
                <p className="capitalize">{userName}</p>
                  <ul className="z-50 text-black ">
                    <li onClick={handleLogout}>Logout</li> {/* Add onClick event to handleLogout */}
                  </ul>
                </li>
              </ul>
              <IoMdArrowDropdown className="mt-1"/>
              </div>
            ) : (
              <NavLink to="/login">
              <p>Login/Register</p>
              </NavLink>
            )}
          <div className="translation-div py-1 bg-transparent font-medium mt-2 md:mt-0 text-white">
            <div
              id="google_translate_element"
              className="border border-white bg-transparent"
            ></div>
          </div>
        </div>
      </div>
      <Navbar />

      {/* Modal */}
      {showModal && (
        <div className="fixed z-[3333] inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Heroicon name: exclamation */}
                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.787-1.24 2.787-2.773V8.773C21.709 7.24 20.462 6 18.922 6h-3.883c-.42-1.341-1.622-2.273-3.039-2.273s-2.619.932-3.039 2.273H5.167C3.627 6 2.38 7.24 2.38 8.773v10.454c0 1.533 1.247 2.773 2.787 2.773z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Logout</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Are you sure you want to log out?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleConfirmLogout} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Yes
                </button>
                <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
};

export default Header;
