// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
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

  return (

    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
