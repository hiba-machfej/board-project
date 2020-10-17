import React, { useState } from "react";
import db from "../firebaseConfig.js";
import Board from "../Board/index.js";
import BoardForm from "../BoardForm/index.js";
import { Container, Row } from "react-bootstrap";

///this will render the data from the firebase to the website

/// onSnapShot to rener the data
const Boards = (props) => {
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
        if (change.type === "removed") {
          console.log(change.doc.data());
          setBoardData((boardData)=>{
            const currBoards = [...boardData];
            return currBoards.filter((board)=> {if(board.id != change.doc.id){return board}})
          });
        }
        
      });
    });
  }, []);

  return (
    <Container>
      <Row className="board-form">
        <BoardForm />
      </Row>

      <Row>
        {boardData.map((data) => (<Board {...data} />))}
      </Row>
    </Container>
  );
};

export default Boards;
