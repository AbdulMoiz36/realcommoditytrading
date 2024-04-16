import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex justify-center items-center w-full py-12 md:py-12">
        <div className="shadow-lg shadow-slate-400 w-5/6 md:w-4/6 rounded-lg p-12 border-2 border-green-400">
          <h1 className="text-center font-bold text-2xl md:text-4xl text-green-600 p-1 md:p-5 border-b-2 border-gray-400">
            Register
          </h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
              <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" className=" " />
              </div>
              <div>
              <label htmlFor="password">Password:</label>
              <div className="flex">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="focus:outline-none"
              >
                {showPassword ? (
                    <IoIosEyeOff />
                ) : (
                    <IoIosEye />
                )}
              </button>
              </div>
              </div>
              <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              </div>
              <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" name="firstName" id="firstName" />
              </div>
              <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
