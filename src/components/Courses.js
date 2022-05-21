import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard/dashboard.css";
import "./styles/main.css";

const courses = [];

export default function Courses() {
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
          <div className="link">
            <span>Log Out</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="intro-section">
          <p>Courses</p>
        </div>
      </div>
    </div>
  );
}
