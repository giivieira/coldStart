import React from "react";
import './style.css'
import react from '../../../assets/react.png'
import vite from '../../../assets/vite.png'
import figma from '../../../assets/figma.png'

function Container3 () {
  return (
    <div className='container3' 
    style={{ width: '100vw', height: '500px', backgroundColor: '#0067C7' }}>
      <div className='title'>
        <h1>TECHNOLOGIES USED</h1>
      </div>
      <div className='imagensTecnologias'>
        <img src={react} alt="react"></img>
        <img src={vite} alt="vite"></img>
        <img src={figma} alt="figma"></img>
      </div>
    </div>

      
    
  )
}

export default Container3;