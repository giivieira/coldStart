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
        <a
          href="https://www.linkedin.com/in/%C3%A2ngelo-carnevale-649ba2229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="linkedinAngelo" src={linkedin} alt="linkedin"></img>
        </a>

        <img id="diego" src={diego} alt="diego"></img>
        <a
          href="https://www.linkedin.com/in/diego-castan-lopes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="linkedinDiego" src={linkedin} alt="linkedin"></img>
        </a>

        <img id="giovanna" src={giovanna} alt="giovanna"></img>
        <a
          href="https://www.linkedin.com/in/giovanna-vieira-b35676266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="linkedinGiovanna" src={linkedin} alt="linkedin"></img>
        </a>
      </div>

      <div className="nomes">
        <p id="name">Ângelo Carnevale</p>
        {/* <p id='function'>Fullstack Developer</p> */}
        <p id="name">Diego Castan</p>
        {/* <p id='function'>BackEnd Developer</p> */}
        <p id="name">Giovanna Vieira</p>
        {/* <p id='function'>UX/UI Designer</p> */}
      </div>
    </div>
  );
}

export default TheTeam;
