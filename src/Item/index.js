import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import {Form,Card} from "react-bootstrap";
import "../index.css";
import firebase from '@firebase/app';

// // /// single card
const Item = ({ itemInfo, boardId }) => {

  const [clicked,setClicked] = useState(false);
  const [changeTitle,setChangeTitle] = useState(itemInfo.itemTitle);

   //console.log(itemInfo)

   const handleClick = async (e) => {
    await db.collection("Board").doc(boardId).update({
           items: firebase.firestore.FieldValue.arrayRemove(itemInfo)
         })
         window.location.reload(true);
  };


  const handleEdite =() =>{
    setClicked(!clicked)
    if (clicked === false){
      setChangeTitle(itemInfo.itemTitle)
    }else{
      setChangeTitle(
        <Form>
          <input
          type="text"
          value={itemInfo.itemTitle}>
          </input>
        </Form>
      )
    }
  }

  


  return (
    <Card className="inner-card">
      <Card.Header as="h6">Name: {changeTitle}</Card.Header>
      <Card.Body>
        <Card.Text>Date: {itemInfo.date}</Card.Text>
        <Card.Text>{itemInfo.people}</Card.Text>
      </Card.Body>
      <button onClick={(e) => handleClick(e)}> Delete </button>
      <button onClick={(e) => handleEdite(e)}> Edit </button>
    </Card>
  );
};



export default Item;
