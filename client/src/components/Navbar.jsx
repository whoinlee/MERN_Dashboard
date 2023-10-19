import React from "react";
import { useDispatch } from "react-redux";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
//   ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  // Button,
  // Box,
  // Typography,
  // Menu,
  // MenuItem,
  useTheme,
} from "@mui/material";
import FlexBetBox from "components/styled/FlexBetweenBox";
// import profileImage from "assets/profile.jpg";
import { setMode } from "state/globalSlice";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left */}
        <FlexBetBox>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetBox
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetBox>
        </FlexBetBox>

        {/* right */}
        <FlexBetBox gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
        </FlexBetBox>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
