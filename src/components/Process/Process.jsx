import {data} from "./processData.js";
import './Process.css'

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
          {data.map((card)=>
          <div className="process-card" key={card.id}>
            
          </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Process;
