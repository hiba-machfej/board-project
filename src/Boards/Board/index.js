import React, { useState, useEffect } from "react";


const Board = (props) =>{
    return (
       <div> 
        <h2>Name: {props.name}</h2>
        <h3>Date: {props.date}</h3>
        <h3>Visited: {props.visited}</h3>
        </div>
    )
}

export default Board