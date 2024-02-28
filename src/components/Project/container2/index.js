import React from "react";
import './style.css';
import computador from '../../../assets/computador-calendario.png';
import simbolo from '../../../assets/simbolo.png';

function Container2() {
  return (
    <div className='container2'>

      <div className='imagem-computador'>
        <img src={computador} alt="computador"></img>
      </div>

      <div className='imagem-simbolo'>
        <img src={simbolo} alt="simbolo"></img>
        <img src={simbolo} alt="simbolo"></img>
        <img src={simbolo} alt="simbolo"></img>
      </div>

      <div className='informacoes'>
        <p>100% digitalized container temperature control</p>
        <p>Scheduling for the use of each container</p>
        <p>Notification through Teams to save time</p>
      </div>


    </div>
  )
}

export default Container2; 