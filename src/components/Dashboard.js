import React from "react";
import Employee from "./Employee";
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="absolute w-[84%] sm:m-4 m-0">
        <Employee />
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
