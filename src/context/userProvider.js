import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      fetch(`https://realcommoditytradingbackend.vercel.app/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          // Set the user's first name
          setUserName(data.first_name);
          setUserEmail(data.email);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>

  );
};
