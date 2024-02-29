/* eslint-disable react/prop-types */
import { data } from "./processData.js";
import "./Process.css";
import { useState } from "react";

function ProcessCard({card}) {

  const [isActive, setIsActive] = useState(card.isActive);

  

  /* item is a default prop, same as "this" */
  function activeWindow(e){
    e.preventDefault()
    e.stopPropagation()

    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
    card.isActive = isActive
    

  console.log(isActive)

}

  return (
    
            <button className="process-card" key={card.id} onClick={activeWindow}>
              <div className="process-card-selector-div" >
                <span className="process-selector-number">0{card.id}</span>
                <h3>{card.name}</h3>
              </div>
              <div className={`process-card-content ${isActive ? 'active' : '' }`}>
                <div className="process-card-img"></div>
                <div className="process-card-text">
                  <h3>{card.header}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            </button>
  )
}

function Process() {


  return (
    <div>
      <div>
        <h2>Process</h2>
        <p className="process-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          fuga distinctio molestias laboriosam cum esse!
        </p>
      </div>
      <div className="process-container">
      <div className="process-rail">
          <ProcessCard 
          card={data[0]}
          />
          <ProcessCard 
          card={data[1]}
          />
          </div>
      </div>
    </div>
  );
}

export default Process;
