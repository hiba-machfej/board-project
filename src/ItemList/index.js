import React , {useState} from "react";
import { Card, Button ,Modal } from "react-bootstrap";
import "../App.css";
import Item from "../Item/index.js";
import ItemForm from "../ItemForm/index.js";



// /// single card
const ItemList = ({boardInfo}) => {
  const [show, setShow] = useState(false);
 //console.log(boardInfo)
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
  return (
    <div>
      <Card className="add-card" type="button" variant="primary" onClick={handleShow}>
        <Card.Body className="text-center">
          <svg
            align="center"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body> <ItemForm boardItems={boardInfo.items} boardId={boardInfo.id} setShow={setShow} /> </Modal.Body>
      <Button variant="secondary" onClick={handleClose} className="modal-button">
            Close
      </Button>
      </Modal>
     
    {boardInfo.items.map((item, index) => {
       // console.log(item)
       const itemIndex = index
      return (
      <Item itemInfo={item} boardId={boardInfo.id} itemIndex={itemIndex} />
      );
    })}


  </div>
  )
}

export default ItemList;
