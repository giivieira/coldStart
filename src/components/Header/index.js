import React from "react";
import "./style.css";
import bosch from "../../assets/logo-Bosch.png";
import degrade from "../../assets/degrade.png";
import breakpoints from '../../styles/breakpoints';

function Header() {
  return (
    <div className="container">

      <div className="degrade-header">
        <img src={degrade} alt="degrade"></img>
      </div>

      <div className="header">
        <h1>COLD START</h1>
        <img src={bosch} alt="bosch"></img>
      </div>
    </div>
  );
}

export default Header;
