/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode,setLogout } from "../redux/user/userSlice.js";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar