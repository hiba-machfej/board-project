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
         
        }
        if (change.type === "removed") {
          
        }
      });
    });
  }, []);
  return boardData.map((data) => (
    <Board {...data} onUserSelect={props.onUserSelect} />
  ));
};

export default Boards;
