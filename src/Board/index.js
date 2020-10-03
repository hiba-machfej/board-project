import React, { useState, useEffect } from "react";
import db from "../firebaseConfig.js";

/// single board
const Board = (props) =>{
//     const [retrivedData, setRetrivedData] = useState({
//         name: props.name,
//         date:props.date,
//         visited: props.visited
//     })

    const passData =(e) =>{
        props.onUserSelect({
        name: props.name,
        date:props.date,
        visited: props.visited
        })
        console.log(props)
    }

    const deleteData = async (e)=>{
        const res = await db.collection('TravelDestination').doc(props.name).delete();
    }


    return (
       <div> 
        <h2>Name: {props.name}</h2>
        <h3>Date: {props.date}</h3>
        <h3>Visited: {props.visited}</h3>
        <button type="button" onClick={(e) => passData(e)}>Edite</button>
        <button type="button" onClick={(e) => deleteData(e)}>DELETE</button>
        </div>
    )
}

export default Board