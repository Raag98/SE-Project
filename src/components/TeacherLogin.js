import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from "../context/AuthContext";
import "./Login/login.css";
import "./styles/main.css";

export default function TeacherLogin() {

    const navigate = useNavigate();

    const { signIn } = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          await signIn(email, password);
          navigate("/dashboard");
          console.log("Login Successful!");
        }
        catch (error) {
          console.log("Login Failed!");
        }        
    }

    return (
      <div className="body">
        <section className="section main">
          <div className="main-data">
            <div className="icon">
              <a>TEACHER PORTAL</a>
            </div>
            <div className="form">
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="email icon-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="password icon-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="clearfix">
                  <input
                    type="button"
                    className="submit"
                    name="sign_up-submit"
                    value="LOGIN"
                    onClick={handleLogin}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="section bg">
          <div className="bg-data" />
        </section>
      </div>
    );
}
