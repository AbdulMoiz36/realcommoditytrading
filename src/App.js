// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import { Footer } from './components/footer/footer';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Aboutus from './pages/about/aboutus';
import { UserProvider } from './context/userProvider';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Footer/>
      </UserProvider>
    </Router>
  );
};

export default App;
