import React, { useState, useEffect } from "react";
import db from "../firebaseConfig";


const Board = () => {
    const[boardData, setBoardData] = useState([]);


    const fetchData = async ()=>{
        const boardRes = await db.collection('TravelDestination').get()
        const boardData = boardRes.docs.map(user => user.data())
    setBoardData(boardData)
    console.log(boardData)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <h2>Hi</h2>
    )

}

export default Board