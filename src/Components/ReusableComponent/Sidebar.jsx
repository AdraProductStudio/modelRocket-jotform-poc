import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from "react-icons/ri";
import Cookies from 'js-cookie';
import { SiGoogledocs } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";



const Sidebar = () => {

    const handleLogout = () => {
        Cookies.remove("token")
    }

    return (
        <div className='sidebar-width d-none d-lg-block border-end'>
            <div className="container">
                <div className="row">
                    <div className='sidebar-top-logo d-flex flex-wrap align-items-center justify-content-center'>
                        <Link to={"/home"} className="w-100">
                            <img src={require('../Images/modelrocket_ai_logo.png')} alt='modelRocket-logo' className='sidebar-logo' />
                        </Link>
                    </div>

                    <ul className="sidebar-middle-links nav align-content-start nav_list p-0">
                        <li className='col-12'>
                            <NavLink to={"/home"} end className="nav-link rounded pe-0">
                                <span className='pe-4'><FaUserPlus className='fs-5' /></span>
                                <span>Add client</span>
                            </NavLink>
                        </li>
                        <li className='col-12'>
                            <NavLink to={"/home/update_client"} className="nav-link rounded pe-0">
                                <span className='pe-4'><FaEdit className='fs-5' /></span>
                                Edit configurations
                            </NavLink>
                        </li>
                        <li className='col-12'>
                            <NavLink to={"/home/view_onboarding_submission"} className="nav-link rounded pe-0">
                                <span className='pe-4'><FaCloudUploadAlt className='fs-5' /></span>
                                Onboarding&nbsp;submission
                            </NavLink>
                        </li>
                        <li className='col-12'>
                            <NavLink to={"/home/view_live_customers"} className="nav-link rounded pe-0">
                                <span className='pe-4'><FaUsers className='fs-5' /></span>
                                Live&nbsp;clients
                            </NavLink>
                        </li>
                        <li className='col-12'>
                            <NavLink to={"/home/mr_api_docs"} className="nav-link rounded pe-0">
                                <span className='pe-4'><SiGoogledocs className='fs-5' /></span>
                                MR API docs
                            </NavLink>
                        </li>
                    </ul>
                    <div className="logout-container pt-3">
                        <NavLink to="/" className="btn btn-danger w-100" onClick={handleLogout}>
                            <span className='pe-4'><RiLogoutBoxLine className='fs-5' /></span>
                            Logout
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar







