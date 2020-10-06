import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import { Form, Button, Col } from "react-bootstrap";


const ItemForm = (props) => {
  //state for the board
  const [item, setItem] = useState({
    name: "",
    date: ""
  });

  console.log(props.board.id)
  //this is for adding new board to the coollection
  const addItem = async () => {
    await db.collection("Board").doc(props.board.id).update({
        name: item.name,
        date: item.date
    });
  };
  
  //this handles the input value
  const handleInputValue = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  //this is for the submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setItem({
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
          placeholder="Enter name"
          name="name"
          value={item.name}
          onChange={(e) => handleInputValue(e)}
        />
          <Form.Control
          type="text"
          placeholder="Enter date"
          name="date"
          value={item.date}
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

export default ItemForm;
