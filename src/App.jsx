import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth-Components/Login";
import Registration from "./Components/Auth-Components/Registration";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div className="bg-red">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-out" element={<Registration />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
