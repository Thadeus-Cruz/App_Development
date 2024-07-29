import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Auth/registration.jsx';
import Login from './Pages/Auth/login.jsx';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/User/homepage.jsx';
import Tutorial from './Pages/User/tutorial.jsx';
import Community from './Pages/User/community.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Services from './Pages/User/services.jsx';
import Product from './Pages/User/Product.jsx';
import Repairs from './Pages/User/Repairs.jsx';
import AboutUs from './Pages/User/AboutUs.jsx';
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx';
import AdminLogin from './Pages/Admin/adminlogin.jsx';
import AdminRegistration from './Pages/Admin/adminreg.jsx';

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration setRegistrations={setRegistrations} />} />
        <Route path="/login" element={<Login registrations={registrations} />} />
        {/* <Route path="/nav" element={<NavBar />} /> */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/repair" element={<Repairs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path='/adminreg' element={<AdminRegistration setAdminRegistrations={setRegistrations} />}/>
        <Route path="/adminlogin" element={<AdminLogin adminRegistrations={registrations} />} />
      </Routes>
    </Router>
  );
};

export default App;
