import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Validation";

const ForgotPassword = ({ onsubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(email, true);
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors.general || validationErrors.email);
    } else {
      onsubmit({ email });
      setEmail("");
      setError("");
      // navigate("/otppage");
    }
  };
  return (
    <React.Fragment>
      <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className=" bg-white w-[450px] ">
          <form onSubmit={handleSubmit} className="  space-y-3 p-6 shadow-2xl">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Forgot Password</h1>
              <Link to="/">
                <CloseIcon />
              </Link>
            </div>
            <p>
              Enter your email address we'll send you a link to reset your
              password
            </p>
            <div className="flex flex-col">
              <label>
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 p-2 w-full rounded-md"
              />
              <Link to="/otppage">
                <button
                  type="submit"
                  className="bg-blue-950 w-full p-2 rounded-md text-white mt-6">
                  Send
                </button>
              </Link>
              {error && <p className="text-red-500 w-52">{error}</p>}
              <Link to="/">
                <p className="mt-3">
                  Back to <span>LOG IN</span>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ForgotPassword;
