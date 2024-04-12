import React from "react";
import Logo from "../assets/Logo.png";
import Login from "./Login";
const MainPage = () => {
  const handleLogin = ({ email, password }) => {
    console.log("Logging in with:", email, password);
  };
  return (
    <React.Fragment>
      <div className="flex">
        <div className="bg-blue-950 w-1/2 h-screen flex justify-center items-center">
          <img src={Logo} className="w-[500px]" />
        </div>
        <div className="flex m-44">
          <Login onSubmit={handleLogin} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainPage;
