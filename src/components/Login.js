import { useState } from "react";
import Validation from "./Validation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation({ email, password });
    console.log(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setError(
        validationErrors.general ||
          validationErrors.email ||
          validationErrors.password
      );
    } else {
      onSubmit({ email, password });
      setEmail("");
      setPassword("");
      setError("");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <div className="space-y-2 ">
            <h1 className="text-2xl font-bold">Hello Again!</h1>
            <h1>Welcome Back</h1>
          </div>
          <div className=" space-y-4 p-1 ">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 p-2 w-72 rounded-md"
              />
            </div>
            <div className="flex flex-col relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 p-2 w-72 rounded-md "
              />
              {showPassword ? (
                <VisibilityIcon
                  onClick={toggleIcon}
                  className="absolute right-3 top-8"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={toggleIcon}
                  className="absolute right-3 top-8"
                />
              )}
            </div>
            <div className=" space-y-3">
              <Link to="/dashboard">
                <button className="bg-blue-950 w-72 p-2 rounded-md text-white">
                  Login
                </button>
              </Link>
              {error && <p className="text-red-500 w-52 text-xs">{error}</p>}
              <Link to="/forgotpassword">
                <p className="cursor-pointer mt-3">Forgot Password?</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
