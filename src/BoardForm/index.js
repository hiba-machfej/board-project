import React, { useState } from "react";
import db from "../firebaseConfig.js";
import { Form, Button, Col } from "react-bootstrap";
import image1 from "./image1.png";
import "../App.css";

const BoardForm = ({props}) => {
  //state for the board
  //console.log(props)
  const [Board, setBoard] = useState({
    title: "",
  });
 
  //this is for adding new board to the coollection
  const addBoard = async () => {
    await db.collection("Board").add({
      title: Board.title,
      items: [],
    });
  };
  //this handles the input value
  const handleInputValue = (e) => {
    setBoard({ ...Board, [e.target.name]: e.target.value });
  };
  //this is for the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard();
    setBoard({
      title: "",
    });
  };

  return (
    // <p>hello</p>
    <Col className="board-entry">
    <div className="board-form">
    <h2 className="adventure" >Let's plan your next <span>ADVENTURE</span></h2>
      <Form controlId="addBoard">
        <Form.Control
          type="text"
          placeholder="Enter board name"
          name="title"
          value={Board.title}
          onChange={(e) => handleInputValue(e)}
        />
        <Button
          variant="outline-info"
          type="submit"
          size="sm"
          onClick={(e) => handleSubmit(e)}
        >
          Add Board
        </Button>
      </Form>
     </div> 
     <img src={image1} alt="People-traveling" width="350px"/>
    </Col>
  );
};

export default BoardForm;
