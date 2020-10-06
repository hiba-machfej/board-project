import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import { Form, Button, Col } from "react-bootstrap";


const CardForm = (props) => {
  //state for the board
  const [Card, setCard] = useState({
    name: "",
    date: ""
  });

  //this is for adding new board to the coollection
  const addCard = async () => {
    await db.collection("Board").doc().add({
        name: "",
        date: ""
    });
  };
  //this handles the input value
  const handleInputValue = (e) => {
    setCard({ ...Card, [e.target.name]: e.target.value });
  };
  //this is for the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addCard();
    setCard({
        name: "",
        date: ""
    });
  };
  //this is for editing the data, it comes from the board HOWEVER IT IS NOT WORKING
//   const dataToForm = () => {
//     setCard({
//       name: props.onUserSelect.name,
//     });
//   };

//   useEffect(() => {
//     dataToForm();
//     //console.log(pizzaState)
//   }, [props]);

  return (
   
      <Form controlId="addBoard">
        <Form.Control
          type="text"
          placeholder="Enter board name"
          name="title"
          value={Card.name}
          onChange={(e) => handleInputValue(e)}
        />
          <Form.Control
          type="text"
          placeholder="Enter board date"
          name="title"
          value={Card.date}
          onChange={(e) => handleInputValue(e)}
        />

        <Button
          variant="outline-info"
          type="submit"
          size="sm"
          onClick={(e) => handleSubmit(e)}
        >
          Add Card
        </Button>
      </Form>
  
  );
};

export default CardForm;
