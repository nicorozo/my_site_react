/* eslint-disable react/prop-types */
import { data } from "./processData.js";
import "./Process.css";
import ProcessCard from "./ProcessCard.jsx";
import { useState } from "react";


function Process() {

  const [openedProcessId,setOpenedProcessId] = useState(1)

  function onOpen(id){
    
    setOpenedProcessId(id)

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
