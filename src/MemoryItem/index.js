import React, { useState } from "react";
import db from "../firebaseConfig.js";
import { Form, Card, Button } from "react-bootstrap";
import "../App.css";
import firebase from "@firebase/app";

// // /// single card
const MemoryItem = ({ itemInfo, boardId, itemIndex }) => {
  const [clicked, setClicked] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    itemTitle: itemInfo.itemTitle,
    people: itemInfo.people,
    date: itemInfo.date,
    isDone: itemInfo.isDone,
  });

  const handleDoneValue = (e) => {
    setItemDetails({ ...itemDetails, isDone:'checkbox' ? e.target.checked : e.target.value });
  };
  const sendEditedItem = async () => {
    // const editedData = `${itemIndex}:${{itemDetails}}`;
    await db
      .collection("Board")
      .doc(boardId)
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(itemInfo),
      });
    await db
      .collection("Board")
      .doc(boardId)
      .update({
        items: firebase.firestore.FieldValue.arrayUnion(itemDetails),
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEditedItem();
    setClicked(false);
  };

  const editingForm = () => {
    return (
      <Card >
        <Card.Body>
          <Form>
             <Form.Check
            type="checkbox"
            label="Did you experience this?"
            name="isGoing"
            checked={itemDetails.isDone}
            onChange={(e) => handleDoneValue(e, "isDone")}
          />
          </Form>
        
        </Card.Body>
        <Button
          tvariant="outline-info"
          type="submit"
          size="sm"
          onClick={(e) => handleSubmit(e)}
        >
          Approve Editings
        </Button>
      </Card>
    );
  };

  if (clicked === false) {
    return (
        itemInfo.isDone === true ? 
      <Card className="inner-card">
        <Card.Header as="h6" className="memory">{itemInfo.itemTitle}</Card.Header>
        <Card.Body>
          <Card.Text><b>Date:</b> {itemInfo.date}</Card.Text>
          <Card.Text><b>People:</b> {itemInfo.people}</Card.Text>
          
            <Card.Text><span>Been There, Done That</span></Card.Text>
          
        </Card.Body>
        <button className="memory-button" onClick={(e) => setClicked(true)}> Ooops is this not a memory? </button>
      </Card> : null
    );
  }
  if (clicked === true) {
    return editingForm();
  }
};

export default MemoryItem;
