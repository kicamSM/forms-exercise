import React, { useState } from "react";
import "./Box.css"



function Box({width, height, color, id, deleteBox}) {

    const handleClick = evt => {
    deleteBox(id);
  };

    return <div className="Box">
    <div className="Box-div" key={id} id={id} style={{ backgroundColor: color, width: width + 'px', height: height + 'px'} }>
    </div>
    <button className="Box-btn" onClick={handleClick}>X</button>
    </div>
} 



export default Box