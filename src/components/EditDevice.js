import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputFileUpload from "./FileUpload";
export const EditDevice = () => {
  return (
    <div className="m-20 p-4 border border-black w-80 h-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Edit Device</h1>
        <CloseIcon />
      </div>
      <div className=" space-y-5">
        <div className="flex flex-col">
          <lable>Name</lable>
          <input
            type="text"
            placeholder="name"
            className="border border-gray-200 rounded-md p-2 w-auto "
          />
        </div>
        <div className="flex flex-col">
          <label>Category</label>
          <select
            className="border border-gray-200 p-2 rounded-md w-full"
            onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
            <option selected disabled>
              Category
            </option>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </div>
        <InputFileUpload />
        <button className="bg-blue-950 w-full p-2 rounded-lg text-white">
          Add
        </button>
      </div>
    </div>
  );
};
