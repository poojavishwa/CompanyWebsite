import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Search } from "@mui/icons-material";
export const AssignDevice = ({ notShow }) => {
  return (
    <React.Fragment>
      <div className="p-4 border border-gray-200 w-80 h-auto space-y-4 bg-white ">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Assign</h1>
          <CloseIcon onClick={notShow} />
        </div>
        <div className="space-y-4">
          <div>
            <label>Assign</label>
            <select
              className="border border-gray-200 p-2 rounded-md w-full"
              onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;">
              <option value="search" selected disabled>
                Assignee
                <input type="text" className="border border-black" />
              </option>
              <option value="one">one</option>
              <option value="two">two</option>
              <option value="three">three</option>
            </select>
          </div>
          <div>
            <label>Device</label>
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
        </div>
        <button className="bg-blue-950 w-full p-2 rounded-lg text-white">
          Assign
        </button>
      </div>
    </React.Fragment>
  );
};
