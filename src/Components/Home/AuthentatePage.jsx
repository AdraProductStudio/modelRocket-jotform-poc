import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../ReusableComponent/Sidebar";
import { Toaster } from "react-hot-toast";
import Header from "../ReusableComponent/Header";
import Cookies from "js-cookie";

const AuthentatePage = () => {
  const auth = {
    token: Cookies.get("token")
  };

  return (
    <>
      {auth.token ? (
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Toaster />
            <div className="col p-0 overflow-auto">
              <Header />
              <div className="main-content-height overflow-auto px-3 pt-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AuthentatePage;
