import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import Board from "../Board/index.js";
///this will render the data from the firebase to the website

/// onSnapShot to rener the data
const Boards = (props) => {
  const [boardData, setBoardData] = useState([]);

  React.useEffect(() => {
    db.collection("Board").onSnapshot((snapshot) => {
      const travelData = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setBoardData((prevBoards) => [
            ...prevBoards,
            { ...change.doc.data(), id: change.doc.id },
          ]);
        }
        if (change.type === "modified") {
          console.log(change.doc.data())
          // for modify:
          // 1. find the index of the board that you want to replace
          // 2. setBoardData((prevBoardData) => 
          // prevBoardData.slice()[index] = change.doc.data())
          // .slice() --> duplicates the array (just to be safe)
          // change.doc.data() is the new board that was modified
        }
        if (change.type === "removed") {
          console.log(change.doc.data())
          ///fliter the previous board (follow line 15)
        }
      });
    });
  }, []);
  
  
  return boardData.map((data) => (
   // console.log(data.items)
     <Board {...data} onUserSelect={props.onUserSelect} />
  ));
};

export default Boards;
