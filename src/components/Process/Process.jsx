/* eslint-disable react/prop-types */
import { data } from "./processData.js";
import "./Process.css";
import { useState } from "react";

function ProcessCard({card,isOpen,onClick}) {

  return (
            <button className={`process-card ${isOpen ? 'active' : '' }`} key={card.id} onClick={onClick} >
              <div className="process-card-selector-div" >
                <span className="process-selector-number">0{card.id}</span>
                <h3>{card.name}</h3>
              </div>
              <div className={`process-card-content ${isOpen ? 'active' : '' }`}>
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

  const [openedProcessId,setOpenedProcessId] = useState(1)

  function onOpen(id){
    
    setOpenedProcessId(id)
    console.log(openedProcessId)

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
          {data.map((card)=> 

            <ProcessCard key={card.id} 
            card={card} 
            isOpen={openedProcessId === card.id}
            onClick={()=> onOpen(card.id)} 
            />
          )}
          </div>
      </div>
    </div>
  );
}

export default Process;
