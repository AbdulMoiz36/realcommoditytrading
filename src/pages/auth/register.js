import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
          <form className="flex flex-col gap-5">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md pr-12 w-72 md:w-96"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              placeholder="Confirm Password"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-72 md:w-96"

              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="flex items-center w-72 md:w-96">
              <input
                type="checkbox"
                id="agree-terms"
                name="agree-terms"
                className="mr-2 h-4 w-4 accent-lime-500"
              />
              <label htmlFor="agree-terms" className="text-sm">While creating a website account: I agree to abide by the realcommoditytrading.com <NavLink><span className="font-bold">Member Agreement</span></NavLink> - Willing to receive emails from realcommoditytrading.com</label>
            </div>
            <button
              type="submit"
              className="px-5 py-4 text-white bg-lime-500 rounded-md font-semibold hover:bg-lime-600 transition ease-in-out duration-300 hover:drop-shadow-xl "
            >
              Sign Up
            </button>
          </form>
        </div>
        <div>
          <p className="text-lg">Or</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
