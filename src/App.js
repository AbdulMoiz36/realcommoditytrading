// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import { Footer } from './components/footer/footer';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Aboutus from './pages/about/aboutus';
import MemberRegistration from './pages/member-registration/member-registration';
import PartnerRegistration from './pages/partner-registration/partner-registration';
import ProductOffers from './pages/productOffers/productOffers';
import PostDetails from './pages/postdetails/postdetails';
import VofferDetails from './pages/vofferdetails/vofferdetails';
import InquiryOthers from './pages/inquiry/inquiry-others';
import InquiryPartnerProgram from './pages/inquiry/inquiry-partner-program';
import InquiryVOffer from './pages/inquiry/inquiry-verified-offers';
import InquiryWebsiteIssues from './pages/inquiry/inquiry-website-issues';
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
          <Route path="/member-registration" element={<MemberRegistration />} />
          <Route path="/partner-registration" element={<PartnerRegistration />} />
          <Route path="/product-offers/:id" element={<ProductOffers />} />
          <Route path="/post-details/:id" element={<PostDetails />} />
          <Route path="/v-post-details/:id" element={<VofferDetails />} />
          <Route path="/inquiry-verified-offers" element={<InquiryVOffer />} />
          <Route path="/inquiry-partner-program" element={<InquiryPartnerProgram />} />
          <Route path="/inquiry-website-issues" element={<InquiryWebsiteIssues />} />
          <Route path="/inquiry-others" element={<InquiryOthers />} />
        </Routes>
        <Footer/>
      </UserProvider>
    </Router>
  );
};

export default App;
