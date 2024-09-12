import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import Cookies from "js-cookie";
import { SiGoogledocs } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const Header = () => {

  const handleLogout = () => {
    Cookies.remove("token")
  }

  return (
    <div className="header-component">
      <nav className="navbar navbar-expand-lg header-nav-tag  py-2 ">
        <div className="container-fluid px-3 justify-content-end w-100">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <Link to={"/home"} className="col-8">
            <img
              src={require('../Images/modelrocket_ai_logo.png')}
              alt='modelRocket-logo'
              className="header-logo me-0 mt-2"
            />
          </Link>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="row">
            <div className="container px-4">
              <ul className="nav align-content-start nav_list p-0">
                <li className='col-12'>
                  <NavLink to={"/home"} end className="nav-link rounded">
                    <span className='pe-4 '><FaUserPlus className='fs-5' /></span>
                    Add client
                  </NavLink>
                </li>
                <li className='col-12'>
                  <NavLink to={"/home/update_client"} className="nav-link rounded">
                    <span className='pe-4'><FaEdit className='fs-5' /></span>
                    Edit clients info
                  </NavLink>
                </li>
                <li className='col-12'>
                  <NavLink to={"/home/view_onboarding_submission"} className="nav-link rounded">
                    <span className='pe-4'><FaCloudUploadAlt className='fs-5' /></span>
                    View Onboarding submission
                  </NavLink>
                </li>
                <li className='col-12'>
                  <NavLink to={"/home/view_live_customers"} className="nav-link rounded">
                    <span className='pe-4'><FaUsers className='fs-5' /></span>
                    Live&nbsp;clients
                  </NavLink>
                </li>
                <li className='col-12'>
                  <NavLink to={"/home/mr_api_docs"} className="nav-link rounded">
                    <span className='pe-4'><SiGoogledocs className='fs-5' /></span>
                    MR API docs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="offcanvas-footer">
          <div className="logout-container text-center ">
            <div className="container px-4">
              <NavLink
                to="/"
                className="btn btn-danger w-100"
                onClick={handleLogout}
              >
                <span className="pe-4">
                  <RiLogoutBoxLine className="fs-5" />
                </span>
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
