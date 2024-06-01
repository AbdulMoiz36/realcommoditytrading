import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import GoogleSignInButton from "./GoogleSignInButton";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Get the navigate function
  const userId = sessionStorage.getItem('userId');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false); // New state for agreeTerms checkbox

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validation checks
      if (!formData.email || !formData.password || !formData.confirmPassword || !formData.firstName || !formData.lastName ) {
        throw new Error("All fields are required!");
      }
  
      // Additional validation checks, e.g., password match
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match!");
      }
      
      if(!agreeTerms){
        throw new Error("Please confirm the Terms!");
      }
  
      const response = await fetch('https://realcommoditytradingbackend.vercel.app/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, agreeTerms }), // Include agreeTerms in form data
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.msg || 'Failed to create user!');
      } else {
        // Show success toast message
        toast.success('Registered successfully!');
        // Clear the form data
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        });
        // Reset the agreeTerms checkbox
        setAgreeTerms(false);
        // Redirect to the login page
        navigate('/login');
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
      toast.error(error.message);
    }
  };
  
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

    // Render the registration form only if the userId is not stored in the session
    if (userId) {
      return (
        <div className="w-full flex justify-center items-center">
          <div className="lg:p-20 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-4/6 lg:w-3/6 flex flex-col items-center gap-10">
            <h1 className="text-center text-red-500 text-4xl font-bold mb-3">Please Logout First!</h1>
          </div>
        </div>
      );
    }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-6/6 md:w-4/6 lg:w-3/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">Register</h1>
          <p>
            Already have an account?
            <NavLink to={"/login"}>
              <span className="text-green-600 ml-1 font-semibold underline">Login</span>
            </NavLink>
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md pr-12 w-72 md:w-96"
                value={formData.password}
                onChange={handleChange}
              />
              {passwordVisible ? (
                <FaEyeSlash
                  className="absolute right-[3%] top-[35%] cursor-pointer text-lime-800"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute right-[3%] top-[35%] cursor-pointer text-lime-800"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First Name"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last Name"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={formData.lastName}
              onChange={handleChange}
            />
            <div className="flex items-center w-72 md:w-96">
              <input
                type="checkbox"
                id="agree-terms"
                name="agreeTerms"
                className="mr-2 h-4 w-4 accent-lime-500"
                checked={agreeTerms}
                onChange={handleCheckboxChange} // Handle checkbox change
              />
              <label htmlFor="agree-terms" className="text-sm">While creating a website account: I agree to abide by the realcommoditytrading.com <NavLink><span className="font-bold">Member Agreement</span></NavLink> - Willing to receive emails from realcommoditytrading.com</label>
            </div>
            <button
              type="submit"
              className="px-5 py-4 text-white bg-lime-500 rounded-md font-semibold hover:bg-lime-600 transition ease-in-out duration-300 hover:drop-shadow-xl "
            >
              Sign Up
            </button>
            <p className="text-lg text-center">Or</p>
            <GoogleSignInButton />
          </form>
        </div>
              
      </div>
    </div>
  );
};

export default Register;
