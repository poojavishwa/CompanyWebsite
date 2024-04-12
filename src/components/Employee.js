import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import ViewEmployeeTable from "./ViewEmployeeTable";
import AddEmployee from "./AddEmployee";
import employeeData from "../utils/employeeData";

const Employee = () => {
  const [showEmpComp1, setShowEmpComp1] = useState(false);
  const handleShow1 = () => {
    setShowEmpComp1(true);
  };
  const handleNotShow1 = () => {
    setShowEmpComp1(false);
  };

  return (
    <React.Fragment>
      <div className="">
        <div className=" flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">Employee</h1>
            <p className="text-gray-400 text-sm">110 Employee</p>
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
              onClick={handleShow1}
              className="bg-red-500 ml-4 py-2 px-3 rounded-xl text-white hover:bg-red-400 flex items-center">
              <NoteAddOutlinedIcon sx={{ color: "white" }} />
              <span className="ml-1">Add Employee</span>
            </button>
          </div>
        </div>
        <ViewEmployeeTable
          employeeData={employeeData}
          notShow1={handleNotShow1}
        />
      </div>
      {showEmpComp1 && (
        <div className="fixed inset-0 bg-gray-700 opacity-90 flex justify-center items-center ">
          <AddEmployee notShow1={handleNotShow1} />
        </div>
      )}
    </React.Fragment>
  );
};
export default Employee;
