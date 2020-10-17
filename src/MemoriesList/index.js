import React, { useState } from "react";
import db from "../firebaseConfig.js";
import Board from "../Memories/index.js";
import { Container, Row } from "react-bootstrap";

///this will render the data from the firebase to the website

/// onSnapShot to rener the data
const MemoriesList = (props) => {
  const [boardData, setBoardData] = useState([]);

  React.useEffect(() => {
    db.collection("Board").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setBoardData((prevBoards) => [
            ...prevBoards,
            { ...change.doc.data(), id: change.doc.id },
          ]);
        }
        if (change.type === "modified") {
          console.log(change.doc.data());
          setBoardData((prevBoards) => {
            const newArrayBoards = [...prevBoards];
            let index = newArrayBoards.findIndex((element) => element.id ===change.doc.id);
            if (index!== -1) {
              newArrayBoards[index] = {...change.doc.data(),id: change.doc.id,};
            }
            return newArrayBoards;
          })
        }
          // for modify:
          // 1. find the index of the board that you want to replace
          // 2. setBoardData((prevBoardData) =>
          // prevBoardData.slice()[index] = change.doc.data())
          // .slice() --> duplicates the array (just to be safe)
          // change.doc.data() is the new board that was modified
        // }

        if (change.type === "removed") {
          console.log(change.doc.data());
          setBoardData((boardData)=>{
            const currBoards = [...boardData];
          //  let index = boardData.findIndex((board)=>board.id ===change.doc.id);
            return currBoards.filter((board)=> {if(board.id !== change.doc.id){return board}})
          });
        }
        
      });
    });
  }, []);

  return (
    <Container>
      <Row>
        {boardData.map((data) => (<Board {...data} />))}
      </Row>
    </Container>
  );
};

export default MemoriesList;
