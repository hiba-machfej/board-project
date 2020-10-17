import React, { useState } from "react";
import db from "../firebaseConfig.js";
import ItemList from "../ItemList/index.js";
import { Form, Button, Col, Card } from "react-bootstrap";
import "../index.css";


/// This is a function that renders a single board.
// in here we passed props which is the fetched data from firebase.

const Board = (props) => {
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

  const sortTitle = async(e) =>{
          
    for (let i = 1; i < props.items.length; i++) {
      let tmp = props.items[i];
      let j = i;

      while (j>0 &&(tmp.itemTitle.charAt(0)) < (props.items[i-1].itemTitle.charAt(0))) {
          props.items[j]= props.items[j-1]
          j--;
        }
      props.items[j] = tmp;
    }

    await db.collection("Board").doc(props.id).update(
        {items: props.items}
    )
  }
  const sortDate = async(e)=>{
    for (let i = 1; i < props.items.length; i++) {
      let tmp = props.items[i];
      let j = i;
      let currDate = makeDate(props.items[i].date)
      let prevDate = makeDate(props.items[i-1].date);
      console.log(currDate);
      console.log(prevDate);
      while (j>0 && (currDate[0]<= prevDate[0]&& currDate[1]<= prevDate[1] && currDate[2]<= prevDate[2])) {
          console.log("here");
          props.items[j]= props.items[j-1]
          j--;
        }
      props.items[j] = tmp;

    }

    function makeDate(str){
      let date = str.split('-');
      return date;
    }

    await db.collection("Board").doc(props.id).update(
        {items: props.items}
    )

  }
  //this return renders the column board on the screen
  if (clicked === false){
  return (
    //   in here we added column  and card from bootstrap and also icons
    <Col lg={4}>
      <Card className="outer-board">
        <Card.Header as="h5" className="outer-board-header">
           {titleChange}
          <div>
          <svg type="button" onClick={(e) => sortTitle(e)} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sort-alpha-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"/>
            <path fill-rule="evenodd" d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z"/>
          </svg>
          <svg width="1em" onClick={(e) => sortDate(e)} height="1em" viewBox="0 0 16 16" class="bi bi-sort-numeric-down-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"/>
            <path fill-rule="evenodd" d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            <path d="M9.598 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008zM12.438 14V8.668H11.39l-1.262.906v.969l1.21-.86h.052V14h1.046z"/>
          </svg>
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
                onChange={(e) => handleTitleChange(e)}>
                </Form.Control>
      
              <Button 
                tvariant="outline-info"
                type="submit"
                size="sm"
                onClick={(e) => handleSubmit(e)} >
                Submit</Button>
        </Form>
        </Card.Header>
        <ItemList boardInfo={props}/>
      </Card>
    </Col>
    )
  }
};

export default Board;
