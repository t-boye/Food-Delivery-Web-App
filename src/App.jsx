import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Auth-Components/Login";
import Registration from "./Components/Auth-Components/Registration";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-out" element={<Registration />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
