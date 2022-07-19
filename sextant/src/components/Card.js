import React from "react";
import "./Card.css";
import Datapoint from "./Datapoint";

const Card = () => {
  return (
    <div className="card">
      <h4>Card Component</h4>
      <p>A card style component for each data point to be visualized.</p>
      <div className="datapoint">
        <Datapoint />
        <Datapoint />
        <Datapoint />
        <Datapoint />
      </div>
    </div>
  );
};

export default Card;
