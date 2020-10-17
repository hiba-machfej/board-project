import React, { useState , useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Container, Row , Col} from "react-bootstrap";
import db from "../firebaseConfig.js";
import BoardForm from '../BoardForm'
import ListItemsLayout from '../ListItemsLayout/index.js';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      margin: '10px'
    }
}));

  
export default function ListPreview() {
  const classes = useStyles();

  const [fetcheddata, setFetchedData] = useState([]);

  const fetchdata= async()=>{
    const res = await db.collection('Board').get()
    const data = res.docs.map(board => board.data())
    console.log(data)
    setFetchedData(data)
  }

  useEffect(()=>{
    fetchdata()
    },[])

  

  return (
    <Container>
      <Row className="board-form">
        <BoardForm />
      </Row>
    <Row className="listedBoards">
     <h2 className="listTitle">SO you like it Minimalist!</h2>
    </Row>
    <Col>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {fetcheddata.map((data) => (<ListItemsLayout {...data} />))}
    </List>
    </Col>
  </Container>
  );
}
