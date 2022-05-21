import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import "./Dashboard/dashboard.css";
import "./styles/main.css";

export default function Dashboard() {

  const { currentUser, logOut } = useAuth();

  const signout = () => {
    logOut();
  };

  return (
    <div className="body">
      <div className="sidebar">
        <div className="sidebar_top">
          <div className="logo">
            <a href="#">Digital Study</a>
          </div>
          <div className="links">
            <div className="link">
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            </div>
            <div className="link">
              <Link to="/courses">
                <span>My Courses</span>
              </Link>
            </div>
            {/* <div className="link">
              <span>Attendance</span>
            </div>
            <div className="link">
              <span>Resources</span>
            </div> */}
          </div>
        </div>
        <div className="sidebar_bottom">
          <div className="link" onClick={signout}>
            <span>Log Out</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="intro-section">
          <div className="left">
            <div className="welcome">
              <div className="top">
                <h3>Welcome {currentUser.email}</h3>
                <p>
                  Get the power of Online portal
                  <br />
                  plans to next level
                </p>
              </div>
              <div className="bottom">
                <a href="#" className="blue">
                  Open Profile
                </a>
                <a href="#" className="white">
                  Settings
                </a>
              </div>
            </div>
            <h3>Upload File</h3>
            <div className="upload">
              <h4>Drap and Drop PDF file here</h4>
              <a href="#">Upload Here</a>
              <h5>Maximum Size is 5Mb.</h5>
            </div>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <div className="datalists">
              <div className="data">
                <h4>Total</h4>
                <h5>15</h5>
              </div>
              <div className="data">
                <h4>Completed</h4>
                <h5>10</h5>
              </div>
              <div className="data">
                <h4>Late</h4>
                <h5>5</h5>
              </div>
              <div className="data">
                <h4>Missed</h4>
                <h5>0</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
