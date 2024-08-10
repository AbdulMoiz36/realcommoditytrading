import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import reportWebVitals from './reportWebVitals';
import Layout from './admin/pages/layout';
import Dashboard from './admin/pages/dashboard';
import Users from './admin/pages/users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/register" element={<><Header /><Register /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/about" element={<><Header /><Aboutus /><Footer /></>} />
          <Route path="/member-registration" element={<><Header /><MemberRegistration /><Footer /></>} />
          <Route path="/partner-registration" element={<><Header /><PartnerRegistration /><Footer /></>} />
          <Route path="/product-offers/:id" element={<><Header /><ProductOffers /><Footer /></>} />
          <Route path="/post-details/:id" element={<><Header /><PostDetails /><Footer /></>} />
          <Route path="/v-post-details/:id" element={<><Header /><VofferDetails /><Footer /></>} />
          <Route path="/inquiry-verified-offers" element={<><Header /><InquiryVOffer /><Footer /></>} />
          <Route path="/inquiry-partner-program" element={<><Header /><InquiryPartnerProgram /><Footer /></>} />
          <Route path="/inquiry-website-issues" element={<><Header /><InquiryWebsiteIssues /><Footer /></>} />
          <Route path="/inquiry-others" element={<><Header /><InquiryOthers /><Footer /></>} />

          {/* Admin Routes */}
          {/* <Route path="/admin" element={<><Navbar /><Dashboard /></>} /> */}
          <Route path="/admin" element={<><Layout/></>}>
          <Route path="" index element={<><Dashboard/></>} />
          <Route path="users" index element={<><Users/></>} />
          </Route>
          {/* Add other admin routes here */}
        </Routes>
      </UserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
