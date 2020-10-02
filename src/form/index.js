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
        name : ${userInput.name}
        date: ${userInput.date}
        visited : ${userInput.visited}
        `)
        sendData(userInput);
      };

       const sendData = async (userInput)=>{
          const res = await db.collection('TravelDestination').doc('Place2').set(userInput);  
          
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
            onChange={(e) => handleInputChange(e, "date")}
            placeholder="Date"
            />
            <input
            type="checkbox"
            onChange={handleInputChange}
            value={userInput.visited}
            onChecked={(e) => handleInputChange(e, "visited")}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default Form