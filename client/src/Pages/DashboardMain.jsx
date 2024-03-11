import React from "react";
import { useState } from "react";
import Header from "../Components/Dashboard-Components/Header";
import Sidebar from "../Components/Dashboard-Components/Sidebar";
import Home from "../Components/Dashboard-Components/Home";

const DashboardMain = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Home />
      </div>
    </>
  );
};

export default DashboardMain;
