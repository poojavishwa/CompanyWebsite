import React from "react";
import Logo from "../assets/Logo.png";
import Login from "./Login";
const MainPage = () => {
  const handleLogin = ({ email, password }) => {
    console.log("Logging in with:", email, password);
  };
  return (
    <React.Fragment>
      <div className="md:flex md:flex-row h-screen space-y-5">
        <div className="bg-blue-950 md:w-1/2 w-full p-10 flex justify-center items-center">
          <img src={Logo} className="w-[500px] " />
        </div>
        <div className=" flex justify-center items-center lg:w-1/2">
          <Login onSubmit={handleLogin} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainPage;
