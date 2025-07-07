import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

const App = () => {
  const [facultyID, setFacultyID] = useState("");
  const [password, setPassword] = useState("");
  const [isFaculty, setIsFaculty] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", facultyID, password);
  };

  return (
   
      <div className="row w-100 shadow rounded overflow-hidden f_3" style={{ maxWidth: "1250px", height: "90vh " }}>

        {/* Left Side */}
      <div className="col-md-5 bg-primary text-white d-flex flex-column justify-content-center p-5 f_2"
      >
       
          <h2 className="fw-bold mb-4">CAMPUS CORE</h2>
          <p className="lead">Welcome to Your Academic Journey</p>
          <p className="small mb-4">
            Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
          </p>
          <div className="d-flex justify-content-between mb-4">
            <div className="text-center d-1">
              <div>📘</div>
              <small>Course Management</small>
            </div>
            <div className="text-center d-1">
              <div>🕒</div>
              <small>Schedule Tracking</small>
            </div>
            <div className="text-center d-1">
              <div>📊</div>
              <small>Progress Analytics</small>
            </div>
          </div>
          <small className="fst-italic">
            "As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week."
            <br />– Dr. Michael T., Engineering Faculty
          </small>
        </div>

        {/* Right Side */}
        <div className="col-md-6 d-flex flex-column p-5  f-5">
          <div className="d-flex justify-content-center mb-5 b-1">
            <button
              className={`btn me-2 ${!isFaculty ? "btn-primary" : "btn-outline-none std"}`}
              onClick={() => setIsFaculty(false)}
            >
              Student
            </button>
            <button
              className={`btn ${isFaculty ? "btn-primary" : "btn-outline-none fact"}`}
              onClick={() => setIsFaculty(true)}
            >
              Faculty
            </button>
          </div>

          <h4 className="mb-4">Logging in as {isFaculty ? "Faculty" : "Student"}</h4>

          {/* Grows to fill space and push footer */}
          <div className="flex-grow-1 d-flex flex-column justify-content-space-between">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">{isFaculty ? "Faculty" : "Student"} ID or Email</label>
                <input
                  type="text"
                className="form-control"
                placeholder="Enter your Faculty ID or email"
                
                  value={facultyID}
                  onChange={(e) => setFacultyID(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                value={password}
                placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="text-end">
                  <small className="text-primary" style={{ cursor: "pointer" }}>
                    Forgot password?
                  </small>
                </div>
              </div>

              <div className="form-check mb-3 rem">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label rem-1" htmlFor="remember">Remember me</label>
              </div>

              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>

            <div className="text-center mt-4 b-2">
              <small className="text-muted">-------------or continue with------------</small>
              <div className="text-center mt-4">
                <button className="btn btn-outline-secondary d-flex align-items-center mx-auto log">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  Log In with Google
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Footer stays at bottom */}
         
        </div>
         <footer className="text-center text-muted small pt-4 mt-4 border-top f_1" >
         <div> Designed and developed by ZoroTeam</div>
         <div>SAURABH SINGH</div>
           <div>© 2025 Zoro innovations</div>
          </footer>
      </div>
    
  );
};

export default App;
