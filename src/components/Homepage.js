import React from 'react'
import { Link } from "react-router-dom";
import './Homepage/index.css';
import './styles/main.css';

export default function Homepage() {
  return (
    <div className="body">
      <div className="left">
        <h1>Sign up to DIGITAL STUDY</h1>
        <p>An E-Learning Platform</p>
        <div className="blocks">
          <Link className='route' to="/teacher-login">
            <div className="login_block">
              <h3>I am a teacher.</h3>
              <h6>
                Includes administrator, professors and non-teaching members
              </h6>
            </div>
            </Link>
            <Link className='route' to="/student-login">
            <div className="login_block">
              <h3>I am a student.</h3>
              <h6>Includes BTech, MTech, and PHD students</h6>
            </div>
            </Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
