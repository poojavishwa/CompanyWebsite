import React from "react";
import {
  GridViewOutlined as GridViewOutlinedIcon,
  GroupOutlined as GroupOutlinedIcon,
  MeetingRoomOutlined as MeetingRoomOutlinedIcon,
  DevicesOutlined as DevicesOutlinedIcon,
  RocketLaunchOutlined as RocketLaunchOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from "@mui/icons-material";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if (!isMenuOpen) return null;
  return (
    <React.Fragment>
      <div
        className={`w-${
          isMenuOpen ? "1/5" : "14"
        } min-h-screen overflow-y-auto hidden sm:block transition-all duration-300 shadow-lg `}>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-y-2 ">
            {isMenuOpen && (
              <>
                <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                  <GridViewOutlinedIcon />
                  Dashboard
                </li>
                <Link to="/meetingroom">
                  <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                    <MeetingRoomOutlinedIcon />
                    Meeting Room
                  </li>
                </Link>
                <Link to="/dashboard">
                  <li className="hover:bg-gradient-to-r from-gray-300 p-5 pt-1 cursor-pointer">
                    <GroupOutlinedIcon />
                    Employee
                  </li>
                </Link>
                <Link to="/device">
                  <li className="hover:bg-gradient-to-r from-gray-300 p-5 pt-1 cursor-pointer ">
                    <DevicesOutlinedIcon />
                    Device
                  </li>
                </Link>
                <Link to="/projects">
                  <li className="hover:bg-gradient-to-r from-gray-300 p-5 pt-1 cursor-pointer">
                    <RocketLaunchOutlinedIcon />
                    Project
                  </li>
                </Link>
                <Link to="/setting">
                  <li className="hover:bg-gradient-to-r from-gray-300 p-5 pt-1 cursor-pointer">
                    <SettingsOutlinedIcon />
                    Setting
                  </li>
                </Link>
              </>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <GridViewOutlinedIcon />
              </li>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <MeetingRoomOutlinedIcon />
              </li>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <GroupOutlinedIcon />
              </li>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <DevicesOutlinedIcon />
              </li>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <RocketLaunchOutlinedIcon />
              </li>
            )}
            {!isMenuOpen && (
              <li className="hover:bg-gradient-to-r from-gray-300 p-5 cursor-pointer">
                <SettingsOutlinedIcon />
              </li>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
