import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const OtpPage = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center bg-slate-300 h-screen">
        <div className=" bg-white w-1/4 ">
          <div className=" p-5 shadow-2xl">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">OTP Varification</h1>
              <Link to="/">
                <CloseIcon />
              </Link>
            </div>
            <p className="w-40">Enter OTP sent to - Poojaaa@gmail.com</p>
            <div className="space-x-6 m-5 ml-10">
              <input
                type="text"
                className="w-10 p-2.5 rounded-lg bg-gray-200 "
              />
              <input
                type="text"
                className="w-10 p-2.5 rounded-lg bg-gray-200 "
              />
              <input
                type="text"
                className="w-10 p-2.5 rounded-lg bg-gray-200 "
              />
              <input
                type="text"
                className="w-10 p-2.5 rounded-lg bg-gray-200 "
              />
            </div>
            <p>
              Don't receive code?
              <span className="text-blue-950 font-bold">Re-send</span>
            </p>
            <Link to="/changepassword">
              <button className="bg-blue-950 w-full p-2 rounded-md text-white mt-5">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OtpPage;
