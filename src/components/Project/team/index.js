import React from "react";
import "./style.css";
import angelo from "../../../assets/angelo.png";
import giovanna from "../../../assets/giovanna.png";
import diego from "../../../assets/diego.png";
import linkedin from "../../../assets/linkedin.png";


const teamMembers = [
  {
    name: 'Ângelo Carnevale',
    function: 'Fullstack Developer',
    photo: angelo,
    linkedin: 'https://www.linkedin.com/in/%C3%A2ngelo-carnevale-649ba2229/',
  },
  {
    name: 'Diego Castan',
    function: 'BackEnd Developer',
    photo: diego,
    linkedin: 'https://www.linkedin.com/in/diego-castan-lopes/',
  },
  {
    name: 'Giovanna Vieira',
    function: 'UX/UI Designer',
    photo: giovanna,
    linkedin: 'https://www.linkedin.com/in/giovanna-vieira-b35676266/',
  },
];

function TheTeam() {
  return (
    <div className="containerTeam">
      <h1>THE TEAM</h1>
      <div className="fotos">
        {teamMembers.map((member, index) => (
          <div key={index} className="teamMember">
            <div className="imageContainer">
              <img src={member.photo} id='foto' alt={member.name}></img>
              <a href={member.linkedin}  target="_blank" rel="noopener noreferrer">
                <img className="linkedinIcon" src={linkedin} alt="linkedin"></img>
              </a>
            </div>
            <div className={`info${member.name.split(' ')[0]}`}>
              <p id='name'>{member.name}</p>
              <p id='function'>{member.function}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheTeam;
