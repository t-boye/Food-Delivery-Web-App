import React, { useState, useEffect } from "react";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Components/Auth-Components/Login";
import Registration from "./Components/Auth-Components/Registration";
import ContactUs from "./Pages/ContactUs";
import Chat from "./Pages/Chat";
import DashboardMain from "./Pages/DashboardMain";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loading on component mount
    handleLoading();
  }, []);

  const handleLoading = async () => {
    setIsLoading(true);
    try {
      // Simulate loading (replace with your actual asynchronous operations)
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } finally {
      setIsLoading(false);
    }
  };
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
<<<<<<< HEAD
          <Route index element={<Home />} />
=======
>>>>>>> parent of 3415d44 (login and Register (1) commit)
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-out" element={<Registration />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<DashboardMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
