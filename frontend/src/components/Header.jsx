import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logedInUser, reset } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { IoMdNotifications } from 'react-icons/io';
import { MdAdd } from 'react-icons/md';

import "./header.css"
import { allNotifications } from '../features/notification/notificationSlice';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
  const { notifications,count } = useSelector(state => state.notifications)

  useEffect(() => {

    dispatch(logedInUser())
    dispatch(reset())
    dispatch(allNotifications())
  }, [dispatch])
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    if (!isSuccess) {
      toast.success("loged out successfully!", {
        style: {
          // background: "#00ff00" ,
          color: 'green',
          fontSize: "18px"

          // Set the desired background color here
        },
        position: toast.POSITION.TOP_CENTER
      });
      navigate('/');

    }
  }
  return (
    <header className="nav d-flex">
      <ul className="nav navbar-fixed-top bg-light shadow w-100 d-flex justify-content-end py-3">
        <li className="nav-item">
          <Link style={{ fontSize: "20px" }} className="nav-link text-dark" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link style={{ fontSize: "20px" }} className="nav-link text-dark" to="/properties">
            Properties
          </Link>
        </li>
        {user &&(

        <li className="nav-item dropdown">
          <div className="dropdown-button">
            <span style={{ fontSize: "20px" }} className="nav-link text-dark">
              Profile &#9662;
            </span>
            <ul className="dropdown-menu bg-light">
              <li>
                <Link className="dropdown-item text-success" to="/myProfile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-success" to="/myproperties">
                  My Properties
                </Link>
              </li>
                {user && (
          <li className=" ">
            <Link to="/add-property" className="dropdown-item text-success"><MdAdd style={{fontSize:'25px'}}/>Add Property
            </Link>
          </li>
        )}
              <li>
                <a className="dropdown-item text-success" style={{ fontSize: "20px", cursor: "pointer" }}   onClick={handleLogout}>
                  Log Out            </a>
              </li>
            </ul>
          </div>
        </li>
        )}
        {!user && (
          <li className="nav-item">
            <Link style={{ fontSize: "20px" }} className="nav-link text-dark" to="/login">
              Login
            </Link>
          </li>
        )}
        {user && (
          <li className="nav-item">
            <Link style={{ fontSize: "20px" }} className="nav-link text-dark" to="/login">
              <IoMdNotifications style={{fontSize:"25px",color:"blue"}} />
              <sup>
                {count}
              </sup>
            </Link>
          </li>
        )}
    
      </ul>
    </header>


  )
}

export default Header