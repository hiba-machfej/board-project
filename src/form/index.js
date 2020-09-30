import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";



const Form = ()=>{

    const [userInput, setUserInput] = React.useState({
        name: "",
        date: "",
        visited: false
      });



      const handleInputChange = (e, key) => {
        setUserInput({ ...userInput, [key]: e.target.value });
        console.log(userInput);
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        First Name : ${userInput.name}
        Last Name : ${userInput.date}
        Age : ${userInput.visited}
        `);
      };

      const sendData = async ()=>{
        const boardRes = await db.collection('TravelDestination').post()
        const boardData = boardRes.docs.map(user => user.data())
        setBoardData(boardData)
        console.log(boardData)
    }


    return(
        <div className="App">
        <form
             onSubmit={handleSubmit}
        >
            <input
            type="text"
            value={userInput.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Name"
            />
            <input
            type="text"
            onChange={handleInputChange}
            value={userInput.date}
            onChange={(e) => handleInputChange(e, "Date")}
            placeholder="Date"
            />
            <input
            type="checkbox"
            onChange={handleInputChange}
            value={userInput.visited}
            onChange={(e) => handleInputChange(e, "visited")}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default Form