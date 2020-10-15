import React, { useState } from "react";
import db from "../firebaseConfig.js";
import MemoryItemList from "../MemoryItemList/index.js";
import { Form, Button, Col, Card } from "react-bootstrap";
import "../App.css";


/// This is a function that renders a single board.
// in here we passed props which is the fetched data from firebase.

const Board = (props) => {
  //this function is used to PASS data from board to the form for EDIT >>> However edit is not working yet.

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
  

  //this function is used to DELETE data from board to the form for edit

  
//   if ($(".toDiv").contains("on")) {
//     // do something
// }


  
//   props.filter(item => item.items.isDone ===true)
  //console.log(completedMemories)
  //console.log(props)
  //this return renders the column board on the screen
  if (clicked === false){


  return (


    <Col lg={4}>
    <Card className="outer-board">
    <Card.Header as="h5" className="outer-board-header"> {titleChange} </Card.Header> 
    <MemoryItemList boardInfo={props}/>
    </Card>
  </Col> 


  
  )

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
        <MemoryItemList boardInfo={props}/>
      </Card>
    </Col>
    )
  }
};

export default Board;
