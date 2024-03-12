import React from "react";
import Container1 from "../container1";
import Container2 from "../container2";
import Technologies from "../technologies";
import "./style.css";
import TheTeam from '../team';

function AllContainers() {
  return (
    <>
      <div className="allcontainers">
        <Container1 />
        <Container2 />
      </div>
      <Technologies/>
      <TheTeam/>
    </>
  );
}

export default AllContainers;
