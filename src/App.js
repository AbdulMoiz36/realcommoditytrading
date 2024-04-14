import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import { Footer } from './components/footer/footer';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
