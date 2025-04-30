import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Payment from './components/Payment';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        {/* Define routes for each section */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="*" element={<Navigate to="/" />} />  {/* Add this */}
</Routes>


        {/* Footer is usually global, so render it on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
