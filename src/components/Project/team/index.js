import React from "react";
import "./style.css";
import angelo from "../../../assets/angelo.png";
import giovanna from "../../../assets/giovanna.png";
import diego from "../../../assets/diego.png";
import linkedin from "../../../assets/linkedin.png";

function TheTeam() {
  return (
    <div className="containerTeam">
      <h1>THE TEAM</h1>
      <div className="fotos">
        <img id="angelo" src={angelo} alt="angelo"></img>
        <img id="linkedinAngelo" src={linkedin} alt="linkedin"></img>

        <img id="diego" src={diego} alt="diego"></img>
        <img id="linkedinDiego" src={linkedin} alt="linkedin"></img>

        <img id="giovanna" src={giovanna} alt="giovanna"></img>
        <img id="linkedinGiovanna" src={linkedin} alt="linkedin"></img>
      </div>

      {/* <div className="nomes"></div> */}
    </div>
  );
}

export default TheTeam;
