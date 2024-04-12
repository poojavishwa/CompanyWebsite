import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Logo.png";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { USER_IMG } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import MainOptions from "./MainOptions";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <React.Fragment>
      <div className="bg-blue-950 relative px-4">
        <div className="flex justify-between px-4 py-2 sm:px-6 lg:px-5">
          <div className="flex items-center space-x-3 lg:space-x-7">
            <MenuIcon
              fontSize="large"
              sx={{ color: "white" }}
              onClick={() => handleToggle()}
              className="lg:hidden cursor-pointer"
            />

            <img
              src={Logo}
              className="w-32 h-auto lg:w-42 lg:h-16 brightness-0 invert"
            />
          </div>
          <div className="hidden lg:flex  items-center space-x-4 ">
            <div className="flex items-center space-x-1">
              <HelpOutlineOutlinedIcon sx={{ color: "white" }} />
              <span className="text-white">Help</span>
            </div>
            <span className="text-5xl text-white mb-4">|</span>
            <div className="flex items-center space-x-1">
              <img src={USER_IMG} className="w-8 h-8 rounded-full " />
              <p className="text-white">Pooja</p>
              <ArrowDropDownIcon
                sx={{ color: "white", cursor: "pointer" }}
                onClick={() => handleShow()}
              />
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="ml-[85%]  absolute -mt-[1%] z-10">
          <MainOptions />
        </div>
      )}
    </React.Fragment>
  );
};
export default Header;
