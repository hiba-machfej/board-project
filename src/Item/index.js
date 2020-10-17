import React, { useState } from "react";
import db from "../firebaseConfig.js";
import { Form, Card, Button } from "react-bootstrap";
import "../index.css";
import firebase from "@firebase/app";

// // /// single card
const Item = ({ itemInfo, boardId, itemIndex }) => {
  const [clicked, setClicked] = useState(false);
  const [itemDetails, setItemDetails] = useState({
    itemTitle: itemInfo.itemTitle,
    people: itemInfo.people,
    date: itemInfo.date,
    isDone: itemInfo.isDone,
  });

  //console.log(itemIndex)

  const handleClick = async (e) => {
    await db
      .collection("Board")
      .doc(boardId)
      .update({
        items: firebase.firestore.FieldValue.arrayRemove(itemInfo),
      });
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    setItemDetails({ ...itemDetails, [key]: value });
  };

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
      <Card className="inner-card">
        <Card.Body>
          <Form>
            Name:
            <Form.Control
              type="text"
              name="title"
              value={itemDetails.itemTitle}
              onChange={(e) => handleChange(e, "itemTitle")}
            />
            Date:
            <Form.Control
              type="date"
              name="title"
              value={itemDetails.date}
              onChange={(e) => handleChange(e, "date")}
            />
            People:
            <Form.Control
              type="text"
              name="title"
              value={itemDetails.people}
              onChange={(e) => handleChange(e, "people")}
            />
          </Form>
          <Form.Check
            type="checkbox"
            label="Did you experience this?"
            name="isGoing"
            checked={itemDetails.isDone}
            onChange={(e) => handleDoneValue(e, "isDone")}
          />
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
      <Card className="inner-card">
        <Card.Header as="h6" className="outer-board-header">{itemInfo.itemTitle}
        <div>
            <svg
              type="button"
              onClick={(e) => handleClick(e)}
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
        
        <Card.Body>
          <Card.Text><b>Date:</b> {itemInfo.date}</Card.Text>
          <Card.Text><b>People:</b> {itemInfo.people}</Card.Text>
          {itemInfo.isDone === true ? (
            <Card.Text className="completed">Been There, Done That</Card.Text>
          ) : (
            <Card.Text>An adventure is still wainting </Card.Text>
          )}
        </Card.Body>
        {/* <Button className="button-card" onClick={(e) => handleClick(e)}> Delete </Button>
        <Button className="button-card" onClick={(e) => setClicked(true)}> Edit </Button> */}
      </Card>
    );
  }
  if (clicked === true) {
    return editingForm();
  }
};

export default Item;
