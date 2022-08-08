import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
export default function UserPage() {
  return (
    <div>
      <Header />
      <div className="bg-white2 max-w-7xl mx-auto xxl:px-50 xl:px-50 lg:px-10 md:px-5 sm:px-3 ssm:px-3 smm:px-3">
        <Outlet />
      </div>
    </div>
  );
}
