import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import { Card, Button } from "react-bootstrap";
import "../index.css";
import CardForm from "../CardForm/index.js"

/// single card
const CardItem = (props) => {
  // const deleteData = async (e)=>{
  //     const res = await db.collection('Board').doc(props.id).delete();
  // }
//console.log(props.board.card.name)
  return (
    <div>
      <Card className="add-card" type="button">
        {/* <Card.Body className="text-center">
          <svg
            align="center"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </Card.Body> */}
        <CardForm board={props.board} />
      </Card>

      <Card className="inner-card">
  <Card.Header as="h6">Name: {props.board.card.name}</Card.Header>
        <Card.Body>
  <Card.Text>Date: {props.board.card.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItem;
