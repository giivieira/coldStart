import React from 'react';
import Container1 from '../container1';
import Container2 from '../container2';
// import Container3 from '../container3';
import './style.css'

function AllContainers () {
  return (
    
    <div className='allcontainers'>
      <Container1/>
      <Container2/>
      {/* <Container3/> */}
    </div>
  )
}

export default AllContainers;