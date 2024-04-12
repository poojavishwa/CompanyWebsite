import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import ViewDeviceTable from "./ViewDeviceTable";
import deviceData from "../utils/deviceData";
import { AddDevice } from "./AddDevice";
const Device = () => {
  const [showDeviceComp, setShowDeviceComp] = useState(false);
  const handleShow = () => {
    setShowDeviceComp(true);
  };
  const handleNotShow = () => {
    setShowDeviceComp(false);
  };

  return (
    <React.Fragment>
      <div className="">
        <div className=" flex  flex-col sm:flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">Device</h1>
            <p className="text-gray-400 text-sm">44 Devices</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                className="w-full sm:w-auto rounded-lg px-3 py-2 bg-gray-100"
              />
              <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={handleShow}
              className="bg-red-500 ml-4 py-2 px-3 rounded-xl text-white hover:bg-red-400 flex items-center">
              <NoteAddOutlinedIcon sx={{ color: "white" }} />
              <span className="ml-1">Add Device</span>
            </button>
          </div>
        </div>
        <ViewDeviceTable deviceData={deviceData} />
      </div>
      {showDeviceComp && (
        <div className="fixed inset-0 bg-gray-700 opacity-90 flex justify-center items-center ">
          <AddDevice notShow={handleNotShow} />
        </div>
      )}
    </React.Fragment>
  );
};
export default Device;
