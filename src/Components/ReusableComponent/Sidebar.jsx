import React, { useContext, useEffect } from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdBarChart } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { RiLogoutBoxLine } from "react-icons/ri";
import Cookies from 'js-cookie';


const Sidebar = () => {

    const handleLogout = () => {
        Cookies.remove("isLoggedIn")
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
                            <NavLink to={"/home"} end className="nav-link rounded">
                                <span className='pe-4 '><RxDashboard className='fs-5' /></span>
                                Add client
                            </NavLink>
                        </li>
                        <li className='col-12'>
                            <NavLink to={"/home/update_client"} className="nav-link rounded">
                                <span className='pe-4'><BsBoxSeam className='fs-5' /></span>
                                Update client
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







