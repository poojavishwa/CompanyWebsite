import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputFileUpload from "./FileUpload";
import DatePicker from "react-datepicker";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "react-datepicker/dist/react-datepicker.css";

const monthNameFormatter = (date) => {
  const options = { month: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const AddDevice = ({ notShow }) => {
  const [purchasedDate, setPurchasedDate] = useState(new Date());
  const [warrantyStartDate, setWarrantyStartDate] = useState(new Date());
  const [warrantyYear, setWarrantyYear] = useState(new Date());
  const [warrantyMonth, setWarrantyMonth] = useState(new Date());
  return (
    <React.Fragment>
      <div className="w-[450px] h-[500px] overflow-auto shadow-2xl p-5 space-y-4 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-xl font-bold ">Add Device</h1>
          <CloseIcon onClick={notShow} />
        </div>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              className="border border-gray-200 p-2 rounded-md"
              placeholder="Name"
            />
          </div>
          <div>
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
          <div className="flex flex-col">
            <label>Vendor Name</label>
            <input
              type="text"
              className="border border-gray-200 p-2 rounded-md"
              placeholder="Vendor Name"
            />
          </div>
          <div className="flex flex-col relative">
            <label>Purchased date</label>
            <DatePicker
              selected={purchasedDate}
              onChange={(date) => setPurchasedDate(date)}
              dateFormat="dd MMMM yyyy"
              className="border border-gray-200 p-2 rounded-md w-full"
              monthYearDropdownItem={monthNameFormatter}
            />
            <div className="absolute left-[360px] top-1/2 ">
              <CalendarMonthOutlinedIcon />
            </div>
          </div>
          <div className="flex flex-col relative">
            <label>Warranty start date</label>
            <DatePicker
              selected={warrantyStartDate}
              onChange={(date) => setWarrantyStartDate(date)}
              dateFormat="dd MMMM yyyy"
              className="border border-gray-200 p-2 rounded-md w-full"
            />
            <div className="absolute left-[360px] top-1/2  ">
              <CalendarMonthOutlinedIcon />
            </div>
          </div>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col relative">
              <label>Warranty Year</label>
              <DatePicker
                selected={warrantyYear}
                onChange={(date) => setWarrantyYear(date)}
                dateFormat="y"
                className="border border-gray-200 p-2 rounded-md w-full"
              />
              <div className="absolute left-40 top-1/2  ">
                <CalendarMonthOutlinedIcon />
              </div>
            </div>
            <div className="flex flex-col relative">
              <label>Warranty Month</label>
              <DatePicker
                selected={warrantyMonth}
                onChange={(date) => setWarrantyMonth(date)}
                dateFormat="MM"
                className="border border-gray-200 p-2 rounded-md w-full"
              />
              <div className="absolute left-40 top-1/2 ">
                <CalendarMonthOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <InputFileUpload />
            <InputFileUpload />
          </div>
          <h1 className="text-gray-300 text-lg font-bold">
            Auto Generated Name
          </h1>
          <button className="bg-blue-950 w-full p-2 rounded-lg text-white">
            Add
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
