import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Components/Auth-Components/Login";
import Registration from "./Components/Auth-Components/Registration";
import ContactUs from "./Pages/ContactUs";
import Chat from "./Pages/Chat";
import DashboardMain from "./Pages/DashboardMain";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
