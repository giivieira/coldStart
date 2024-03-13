import React from "react";
import './style.css';
import DownloadButton from '../download';

function Container1() {
  return (
    <div className="container1">
      <div className="o-projeto">
        <h1>THE PROJECT</h1>
        <p>Cold Start is a platform that was developed for PS/EC, 
          at the Bosch plant in Campinas. The platform aims to offer
           better visualization of the data obtained in tests 
           carried out in the containers used by the area, in addition
            to allowing employees to make their daily lives easier 
            with the use of new functions, now fully digitalized.
          </p>
          <DownloadButton/>
      </div>
    </div>
    
  );
}

export default Container1;