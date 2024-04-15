import React from "react";
import CloseIcon from "@mui/icons-material/Close";
export const EditEmp = ({ notShow }) => {
  return (
    <React.Fragment>
      <div className="md:w-[30%] w-[50%]  md:h-96 h-[400px] m-10 border border-gray-100 bg-white">
        <form className="md:p-5 p-4">
          <div className="flex justify-between ">
            <h1 className="text-xl font-bold text-black">Edit Employee</h1>
            <CloseIcon onClick={notShow} className="" />
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label>Job Role</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <button className="bg-blue-950 w-full p-2 rounded-lg text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
