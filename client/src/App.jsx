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
  const [authenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null); // Store auth token

  useEffect(() => {
    // Check for existing token in local storage (replace with actual storage mechanism)
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthToken(storedToken);
      setAuthenticated(true); // Simulate logged-in state based on token
    }
    handleLoading();
  }, []);

  useEffect(() => {
    // Handle token expiration or refresh (implement based on your backend)
  }, [authToken]);

  const handleLoading = async () => {
    setIsLoading(true);
    try {
      // Simulate loading (replace with your actual asynchronous operations)
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setAuthToken(data.token);
      setAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
    setAuthenticated(false);
    localStorage.removeItem("authToken"); // Remove token from storage
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
          <Route
            path="/sign-in"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/register" element={<RegistrationPage />} />{" "}
          <Route
            path="/"
            element={
              authenticated ? <Home /> : <Navigate to="/sign-in" replace />
            }
          />
          <Route
            path="/Home"
            element={
              authenticated ? <Home /> : <Navigate to="/sign-in" replace />
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/chat"
            element={
              authenticated ? <Chat /> : <Navigate to="/sign-in" replace />
            }
          />
          <Route
            path="/dashboard"
            element={
              authenticated ? (
                <DashboardMain />
              ) : (
                <Navigate to="/sign-in" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
