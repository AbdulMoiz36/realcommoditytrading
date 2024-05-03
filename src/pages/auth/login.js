import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from '../../context/userProvider';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setUserName } = useUser();
  const navigate = useNavigate(); // Import useNavigate hook
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://realcommoditytradingbackend.vercel.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "Failed to login");
      }
      // Show success toast message
      toast.success("Login Successful");
      // Set user ID and token in session storage
      sessionStorage.setItem("userId", data.userId);
      sessionStorage.setItem("token", data.token);
      // Clear input fields
      setEmail("");
      setPassword("");
      // Fetch user data using the stored user ID
      const userId = data.userId;
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
      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Show error toast message
      toast.error(error.message || "Failed to Login");
      // Set error message received from the server
      setErrorMessage(error.message || "Failed to login");
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:p-10 md:p-10 py-10 px-3 shadow-2xl border-2 my-10 w-5/6 md:w-4/6 lg:w-3/6 flex flex-col items-center gap-10">
        <div>
          <h1 className="text-center text-4xl font-bold mb-3">Login</h1>
          <p>
            Don't have an account?{" "}
            <NavLink to={"/register"}>
              <span className="text-green-600 ml-1 font-semibold underline">
                Register
              </span>
            </NavLink>
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md w-full md:w-96"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="px-3 py-4 border border-green-500 outline-yellow-500 rounded-md pr-12 w-full md:w-96"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordVisible ? (
                <FaEyeSlash
                  className="absolute right-3 top-[35%] cursor-pointer text-lime-800"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-[35%] cursor-pointer text-lime-800"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="px-5 py-4 text-white bg-lime-500 rounded-md font-semibold hover:bg-lime-600 transition ease-in-out duration-300 hover:drop-shadow-xl "
            >
              Sign In
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

export default Login;
