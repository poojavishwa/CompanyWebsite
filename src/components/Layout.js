import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className=" w-[85%] m-4">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
