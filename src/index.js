import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
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
import ProtectedRoute from './pages/auth/authentication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <UserProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Header /><Outlet/><Footer /></>} >
          <Route path="" index element={<><Home /></>} />
          <Route path="/register" element={<><Register /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/about" element={<><Aboutus /></>} />
          <Route path="/member-registration" element={<><ProtectedRoute><MemberRegistration /></ProtectedRoute></>} />
          <Route path="/partner-registration" element={<><ProtectedRoute><PartnerRegistration /></ProtectedRoute></>} />
          <Route path="/product-offers/:id" element={<><ProtectedRoute><ProductOffers /></ProtectedRoute></>} />
          <Route path="/post-details/:id" element={<><ProtectedRoute><PostDetails /></ProtectedRoute></>} />
          <Route path="/v-post-details/:id" element={<><ProtectedRoute><VofferDetails /></ProtectedRoute></>} />
          <Route path="/inquiry-verified-offers" element={<><InquiryVOffer /></>} />
          <Route path="/inquiry-partner-program" element={<><InquiryPartnerProgram /></>} />
          <Route path="/inquiry-website-issues" element={<><InquiryWebsiteIssues /></>} />
          <Route path="/inquiry-others" element={<><InquiryOthers /></>} />
          </Route>

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
