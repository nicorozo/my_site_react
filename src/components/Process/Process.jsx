/* eslint-disable react/prop-types */
import { data } from "./processData.js";
import "./Process.css";
import { useState } from "react";

function ProcessCard({card,onSelectorClick}) {

  return (
    
            <div className="process-card" key={card.id}>
              <div className="process-card-selector-div" onClick={onSelectorClick}>
                <span className="process-selector-number">0{card.id}</span>
                <h3>{card.name}</h3>
              </div>
              <div className="process-card-content">
                <div className="process-card-img"></div>
                <div className="process-card-text">
                  <h3>{card.header}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
  )
}

function Process() {
  const [activeSelector,setActiveSelector] = useState(0)
  
  function activeWindow(item,index){
  console.log(item)
  console.log(index)
}

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
          onSelectorClick={activeWindow}
          />
          <ProcessCard 
          card={data[1]}
          onSelectorClick={activeWindow}
          />
          </div>
      </div>
    </div>
  );
}

export default Process;
