/* eslint-disable react/prop-types */
import { data } from "./processData.js";
import "./Process.css";
import ProcessCard from "./ProcessCard.jsx";
import { useState } from "react";

function Process() {
  const [openedProcessId, setOpenedProcessId] = useState(1);

  function onOpen(id) {
    setOpenedProcessId(id);
  }

  return (
    <div className="process-container">
      <div className="process-rail">
        {data.map((card) => (
          <ProcessCard
            key={card.id}
            card={card}
            isOpen={openedProcessId === card.id}
            onClick={() => onOpen(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Process;
