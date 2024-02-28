import React from 'react';
import Container1 from '../container1';
import Container2 from '../container2';
import './style.css'

function BothContainers () {
  return (
    <div className='bothcontainers'>
      <Container1/>
      <Container2/>
    </div>
  )
}

export default BothContainers;