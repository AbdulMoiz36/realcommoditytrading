import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../context/userProvider';

const GoogleSignInButton = () => {
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleSuccess = async (credentialResponse) => {
    try {
      setIsCheckingEmail(true);
      const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
      console.log(credentialResponseDecoded);

      const { email, given_name: firstName, family_name: lastName } = credentialResponseDecoded;

      const existingUsersResponse = await axios.get('http://localhost:9001/users');
      const existingUsersData = existingUsersResponse.data;

      const existingUser = existingUsersData.find(user => user.email === email);

      if (existingUser) {
        // User exists, log them in
        toast.success('Login successful! Redirecting to home...');
        sessionStorage.setItem("userId", existingUser._id); // Assuming the user ID is stored in _id
        sessionStorage.setItem("token", existingUser.token); // Assuming the user token is stored in token
        setUserName(existingUser.firstName); // Set the user's first name
        navigate('/'); // Redirect to home page
      } else {
        // User does not exist, register them
        const response = await axios.post('http://localhost:9001/users/register', {
          email,
          firstName,
          lastName
        });

        if (response.status !== 201) {
          throw new Error(response.data.msg || 'Failed to register user!');
        } else {
          toast.success('Registered successfully!');
          sessionStorage.setItem('userToken', response.data.token);
          setUserName(firstName);
          navigate('/home');
        }
      }
    } catch (error) {
      console.error('Error handling Google sign-in:', error.message);
      toast.error(error.message);
    } finally {
      setIsCheckingEmail(false);
    }
  };

  const handleError = () => {
    console.log('Login Failed');
    toast.error('Google Sign-In failed!');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        isCheckingEmail={isCheckingEmail}
      />
    </div>
  );
}; 

export default GoogleSignInButton;
