import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddEmployee = ({ notShow1 }) => {
  return (
    <React.Fragment>
      <div className="md:w-[30%] w-[50%] h-96 m-10 border border-gray-100 bg-white">
        <form className="p-5">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-blue-950">Add Employee</h1>
            <CloseIcon onClick={notShow1} />
          </div>
          <div className="mt-5 md:space-y-4 space-y-2">
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
export default AddEmployee;
