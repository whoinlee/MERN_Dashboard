import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";



const Dashboard = () => {

  return (
    <Box m="1.5rem 2.5rem">
      {/* <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}
      <Box flexGrow={1}>
        {/* <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        /> */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard
