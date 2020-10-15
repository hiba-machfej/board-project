import React from "react";
import "../index.css";
import MemoryItem from "../MemoryItem/index.js";
// import ItemForm from "../ItemForm/index.js";



// /// single card
const MemoryItemList = ({boardInfo}) => {

  return (
    <div>
     
    {boardInfo.items.map((item, index) => {
       // console.log(item)
       const itemIndex = index
      return (
      <MemoryItem itemInfo={item} boardId={boardInfo.id} itemIndex={itemIndex} />
      );
    })}

  </div>
  )
}

export default MemoryItemList;
