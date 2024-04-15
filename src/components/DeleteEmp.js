import React from "react";

export const DeleteEmp = ({ notShow }) => {
  return (
    <React.Fragment>
      <div className=" bg-white border border-gray-100 sm:w-1/4 w-2/3 sm:h-44 h-48  m-10 p-5 space-y-6">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Delete Employee</h1>
          <p>Are you sure you want to delete this Employee?</p>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="text-gray-400" onClick={notShow}>
            Cancel
          </button>
          <button className="text-black font-bold">Delete</button>
        </div>
      </div>
    </React.Fragment>
  );
};
