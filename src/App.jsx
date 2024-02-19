import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Components/Auth-Components/Login";
import Registration from "./Components/Auth-Components/Registration";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-out" element={<Registration />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
