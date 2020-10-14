import React, { useState } from "react";
import db from "../firebaseConfig.js";
import ItemList from "../ItemList/index.js";
import { Form, Button, Col, Card } from "react-bootstrap";
import "../index.css";


/// This is a function that renders a single board.
// in here we passed props which is the fetched data from firebase.

const Board = (props) => {
  //this function is used to PASS data from board to the form for EDIT >>> However edit is not working yet.
  // const passData = (e) => {
  //   props.onUserSelect({
  //     title: props.title,
  //   });
  // };
  const [clicked,setClicked]=useState(false)

  const [titleChange, setTitleChange] = useState(props.title)

    const handleTitleChange = (e) =>{
      setTitleChange (e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      sendEditedBoard()
      setClicked(false)
    };


    const sendEditedBoard = async ()=>{
      await db.collection("Board").doc(props.id).update(
        {title: titleChange}
      )
    }
  //console.log(props.id)
  //this function is used to DELETE data from board to the form for edit
  const deleteData = async (e) => {
    e.preventDefault();
    await db.collection("Board").doc(props.id).delete();
  };

  //this return renders the column board on the screen
  if (clicked === false){
  return (
    //   in here we added column  and card from bootstrap and also icons
    <Col lg={4}>
      <Card className="outer-board">
        <Card.Header as="h5" className="outer-board-header">
           {titleChange}
          <div>
            <svg
              type="button"
              onClick={(e) => deleteData(e)}
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>

            <svg
              type="button"
              onClick={(e) => setClicked(true)}
              width=".8em"
              height=".8em"
              viewBox="0 0 16 16"
              class="bi bi-pencil"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
              />
            </svg>
          </div>
        </Card.Header>
        <ItemList boardInfo={props}/>
      </Card>
    </Col>
  );
  } else if (clicked === true) {
    return (
      <Col lg={4}>
      <Card className="outer-board">
        <Card.Header as="h5" className="outer-board-header">
        <Form>
              <Form.Control
                type="text"
                // placeholder="Enter board name"
                name="title"
                value={titleChange}
                onChange={(e) => handleTitleChange(e)}
              />
              <Button 
                tvariant="outline-info"
                type="submit"
                size="sm"
                onClick={(e) => handleSubmit(e)}>
                submit</Button>
            </Form>
        </Card.Header>
        <ItemList boardInfo={props}/>
      </Card>
    </Col>
    )
  }
};

export default Board;
