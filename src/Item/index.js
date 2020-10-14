import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";
import {Form,Card, Button} from "react-bootstrap";
import "../index.css";
import firebase from '@firebase/app';

// // /// single card
const Item = ({ itemInfo, boardId, itemIndex}) => {

  const [clicked,setClicked] = useState(false);
  const [itemDetails,setItemDetails] = useState({
    itemTitle: itemInfo.itemTitle,
    people: itemInfo.people,
    date: itemInfo.date
  });


   //console.log(itemIndex)

   const handleClick = async (e) => {
    await db.collection("Board").doc(boardId).update({
           items: firebase.firestore.FieldValue.arrayRemove(itemInfo)
         })
         ///window.location.reload(true);
  };

  const handleChange = (e, key)=> {
    const value = e.target.value;
    setItemDetails({...itemDetails, [key]:value})
  }

  const sendEditedItem = async ()=>{
    // const editedData = `${itemIndex}:${{itemDetails}}`;
    await db.collection("Board").doc(boardId).update({
      items: firebase.firestore.FieldValue.arrayRemove(itemInfo)
    })
    await db.collection("Board").doc(boardId).update({
      items: firebase.firestore.FieldValue.arrayUnion(itemDetails)
    });

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    sendEditedItem()
    setClicked(false)
    
  }

  const editingForm = () =>{
    return(
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
                  type="text"
                  name="title"
                  value={itemDetails.date}
                  onChange={(e) => handleChange(e, "date" )}
                />
            People:
            <Form.Control
                  type="text"
                  name="title"
                  value={itemDetails.people}
                  onChange={(e) => handleChange(e, "people")}
                />
          </Form>
        </Card.Body>
        <Button 
              tvariant="outline-info"
              type="submit"
              size="sm"
              onClick={(e) => handleSubmit(e)}>
              Aproove Editings</Button>
      </Card>
    )
  }

  if (clicked === false){
  return (
    <Card className="inner-card">
    <Card.Header as="h6">Name: {itemInfo.itemTitle}</Card.Header>
    <Card.Body>
      <Card.Text>Date: {itemInfo.date}</Card.Text>
      <Card.Text>People: {itemInfo.people}</Card.Text>
    </Card.Body>
    <button onClick={(e) => handleClick(e)}> Delete </button>
    <button onClick={(e) => setClicked(true)}> Edit </button>
  </Card>
    );
  } if (clicked === true){
    return editingForm()
  }
}



export default Item;
