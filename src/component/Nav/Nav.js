import React from "react";
import "./Nav.css";
import companyLogo from "../Nav/companyLogo.jpeg";
// import companyLogo from "../src/images/companyLogo.jpeg";
function Nav() {
  return (
    <div className="nav">
      <div className="logoContainer">
        <img src={companyLogo} alt="" className="logo" />
      </div>
      <div className="verticalLine"></div>
      <div  className="navname">
        <p>STORIES</p>
      </div>
      <div className="course">
        <button >Courses</button>
      </div>
    </div>
  );
}

export default Nav;
