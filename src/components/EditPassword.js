import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const EditPassword = ({ notShow }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const toggleIcon1 = () => {
    setShowPassword1(!showPassword1);
  };
  const toggleIcon2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };
  return (
    <React.Fragment>
      <div className="w-[30%] bg-white h-96 m-10 border border-gray-100 p-4  ">
        <div className=" space-y-3">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Change Password</h1>
            <CloseIcon onClick={notShow} />
          </div>
          <p>
            must include atleast one symbol or number and have atleast 8
            character
          </p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <div className="flex flex-col mt-5">
              <label>
                New Password<span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword1 ? "text" : "password"}
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="New Password*"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="absolute right-3 top-8">
              {showPassword1 ? (
                <VisibilityIcon onClick={toggleIcon1} />
              ) : (
                <VisibilityOffIcon onClick={toggleIcon1} />
              )}
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col">
              <label>
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword2 ? "text" : "password"}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm Password*"
                className="border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="absolute right-3 top-8">
              {showPassword2 ? (
                <VisibilityIcon onClick={toggleIcon2} />
              ) : (
                <VisibilityOffIcon onClick={toggleIcon2} />
              )}
            </div>
          </div>
          <button className="bg-blue-950 w-full p-2 rounded-lg text-white">
            Save
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
