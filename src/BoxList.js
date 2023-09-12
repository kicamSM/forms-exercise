import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";




function BoxList() {
    const [boxes, setBoxes] = useState([]);
    console.log("boxes:", boxes)
  
    const renderBoxes = () => {

    return (
        <>
        {boxes.map((box) =>(<Box color={box.color} width={box.width} height={box.height} deleteBox={deleteBox} id={box.id}/>)) }
        </>
        // *Note here you are passing in props to Box which is color width and height. 
      );
    };
    // end renderBoxes

     const deleteBox = boxId => {
        let newBoxes = [];
        for (const box of boxes) {
            if (box.id !== boxId) {
              newBoxes.push(box);
            }
          }
        setBoxes(newBoxes);
      }
  
    /** Add new box object to boxList. */
    const addBox = box => {
        console.log("box:", box)
      let newBox = { ...box, id: uuid() };
      setBoxes(boxes => [...boxes, newBox]);
    };
    // end addBox
  
    return (
      <div className="BoxList">
        <NewBoxForm addBox={addBox} />
        {renderBoxes()}
      </div>
    );
  };

  
export default BoxList;
