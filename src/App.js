import React, { Component, Fragment, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Boards from './BoardsList/index.js'
import BoardForm from './BoardForm/index.js'
import SideNav from "./SideNav/index.js";
import HeadNav from "./HeadNav/index.js";
import FootNav from "./Footer/index.js";
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import {Container, Row} from "react-bootstrap";


const { Header, Footer, Sider, Content } = Layout;




function App() {
  const [selectedData, setSelectedData] = useState({
    name: "",
    date: "",
    visited: false
  })

  return (
   
      <Layout>
       <Sider> <SideNav/></Sider>
        <Layout> 
        <Header><HeadNav/></Header>
        <Content>
        <Container>
        <Row className="board-form">
         <BoardForm onUserSelect={selectedData} /*{onDataSubmit={refreshData}}*/ />
         </Row>
           <Row>
         <Boards onUserSelect={setSelectedData}/>
           </Row>
         </Container>
        
        </Content> 
        <Footer><FootNav/></Footer>
        </Layout>
      </Layout>

  );
}

export default App;
