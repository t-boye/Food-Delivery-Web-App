import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginPage from "./Pages/Login";
import RegistrationPage from "./Pages/Registration";
import ContactUs from "./Pages/ContactUs";
import Chat from "./Pages/Chat";
import DashboardMain from "./Pages/DashboardMain";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-[#001a33] opacity-100">
          <div className="flex items-center space-x-2">
            <span className="font-head text-lg text-white pr-8">
              My Food App
            </span>
            <ClipLoader size="50px" color="#007bff" />
            <span className="text-blue-900 text-lg pl-4">Loading...</span>
          </div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<DashboardMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
