import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ChangePassword = () => {
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
      <div className="flex justify-center items-center bg-slate-300 h-screen">
        <div className=" bg-white w-1/3">
          <form onSubmit={handleSubmit} className=" p-6 shadow-2xl">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Change Password</h1>
              <CloseIcon />
            </div>
            <div className="space-y-5">
              <p className="w-80">
                Must include al least one symbol or number and have at least 8
                character
              </p>
              <div className="relative">
                <div>
                  <label>
                    New Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type={showPassword1 ? "text" : "password"}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    className="border border-gray-400 p-2 w-full rounded-md"
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
                <div>
                  <label>
                    Confirm Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type={showPassword2 ? "text" : "password"}
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                    }}
                    className="border border-gray-400 p-2 w-full rounded-md"
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
              {error && <p className="text-red-500">{error}</p>}
              <button className="bg-blue-950 w-full p-2 rounded-md text-white mt-6">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ChangePassword;
