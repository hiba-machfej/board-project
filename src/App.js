import React, { Component, Fragment, useEffect, useState } from "react";
import './App.css';
import Boards from './BoardsList/index.js'
import Form from './form/index.js'
function App() {
  const [selectedData, setSelectedData] = useState({
    name: "",
    date: "",
    visited: false
  })

  // const refreshData = () =>{
  //   useEffect(()=>{

  //   },[])
  // }



  return (
    <div>
      <Form onUserSelect={selectedData} /*{onDataSubmit={refreshData}}*/ />
      <Boards onUserSelect={setSelectedData}/>
    </div>
  );
}

export default App;
