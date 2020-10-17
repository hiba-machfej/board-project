import React, { useState} from "react";
import db from "../firebaseConfig.js";
import { Form, Button } from "react-bootstrap";


const ItemForm = ({boardItems, boardId, setShow}) => {


  const [items, setItems] = useState(boardItems);
  const [userInput, setUserInput] = useState({
    itemTitle:"", 
    date:"",
    isDone:true,
    people:""
  });

  const addItem = async () => {
    // console.log(boardsId)
    await db
      .collection("Board")
      .doc(boardId)
      .update({
        items: [...items, userInput],
      });
    setItems([...items, userInput]);
  };
  
  

  const handleTitleValue = (e) => {
    setUserInput({ ...userInput, itemTitle: e.target.value });
  };

  const handleDateValue = (e) => {
    setUserInput({ ...userInput,  date: e.target.value });
  };

  const handlePeopleValue = (e) => {
    setUserInput({ ...userInput,  people: e.target.value });
  };

  	
  const handleDoneValue = (e) => {
    setUserInput({ ...userInput,  isDone:'checkbox' ? e.target.checked : e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false)
    addItem();
    setUserInput({
      itemTitle:"", 
      date:"",
      isDone:false,
      people:""
    });
  };

  return (
     
    <Form controlId="addBoard" className="item-form">
    <Form.Control
      type="text"
      placeholder="Enter a Title"
      name="itemTitle"
      value={items.itemTitle}
      onChange={(e) => handleTitleValue(e)}
    />
      <Form.Control
      type="date"
      placeholder="Enter a date"
      name="date"
      value={items.date}
     onChange={(e) => handleDateValue(e)}
    />

<Form.Control
      type="text"
      placeholder="Enter a name"
      name="people"
      value={items.people}
     onChange={(e) => handlePeopleValue(e)}
    />

<Form.Check type="checkbox" label="Did you experience this?"
     name="isGoing"
     checked={userInput.isDone}
     onChange={(e) => handleDoneValue(e)}
    />
 
    <Button
      className="add-card-btn"
      variant="outline-info"
      type="submit"
      size="sm"
     onClick={(e) => handleSubmit(e)}
    >
      Add Card
    </Button>
  </Form>
  )
}

export default ItemForm;