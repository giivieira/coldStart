import React from "react";
import './style.css'
import react from '../../../assets/react.png'
import vite from '../../../assets/vite.png'
import figma from '../../../assets/figma.png'
import next from '../../../assets/next.png'
import fastapi from '../../../assets/fastapi.png'

function Technologies () {
  return (
    <div className='technologies' 
    style={{ width: '100vw', height: '350px', backgroundColor: '#0067C7' }}>
      <div className='title'>
        <h1>TECHNOLOGIES USED</h1>
      </div>
      <div className='imagensTecnologias'>
        <img id='react' src={react} alt="react"></img>
        <img id='vite' src={vite} alt="vite"></img>
        <img id='figma' src={figma} alt="figma"></img>
        <img id='next' src={next} alt="next"></img>
        <img id='fastapi' src={fastapi} alt="fastapi"></img>
      </div>
    </div>



  )
}

export default Technologies;
