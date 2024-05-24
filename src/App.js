// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import { Footer } from './components/footer/footer';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Aboutus from './pages/about/aboutus';
import MemberRegistration from './pages/member-registration';
import PartnerRegistration from './pages/partner-registration/partner-registration';
import ProductOffers from './pages/productOffers/productOffers';
import { UserProvider } from './context/userProvider';
// chek

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
          <Route path="/member-registration" element={<MemberRegistration />} />
          <Route path="/partner-registration" element={<PartnerRegistration />} />
          <Route path="/product-offers/:id" element={<ProductOffers />} />
        </Routes>
        <Footer/>
      </UserProvider>
    </Router>
  );
};

export default App;
