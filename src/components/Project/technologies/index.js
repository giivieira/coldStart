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

      <a href="https://pt-br.legacy.reactjs.org/" target="_blank" rel="noopener noreferrer">
        <img id='react' src={react} alt="react"></img>
      </a>

      <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
        <img id='vite' src={vite} alt="vite"></img>
      </a>

      <a href="https://www.alura.com.br/artigos/figma" target="_blank" rel="noopener noreferrer">
        <img id='figma' src={figma} alt="figma"></img>
      </a>

      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <img id='next' src={next} alt="next"></img>
      </a>

      <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
        <img id='fastapi' src={fastapi} alt="fastapi"></img>
      </a>


      </div>
    </div>



  )
}

export default Technologies;
