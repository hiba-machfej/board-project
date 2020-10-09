import React from "react";
// import { Card, Button } from "react-bootstrap";
import "../index.css";
import Item from "../Item/index.js";
import ItemForm from "../ItemForm/index.js";



// /// single card
const ItemList = ({boardInfo}) => {
 //console.log(boardInfo.id)
  return (
    <div>
     <ItemForm boardItems={boardInfo.items} boardId={boardInfo.id}/>   
    {boardInfo.items.map((item) => {
       // console.log(item)
      return <Item itemInfo={item} boardId={boardInfo.id} />;
    })}


  </div>
  )
}



//   return (
//     <div>
//       <Card className="add-card" type="button">
//         {/* <Card.Body className="text-center">
//           <svg
//             align="center"
//             width="1.5em"
//             height="1.5em"
//             viewBox="0 0 16 16"
//             class="bi bi-plus"
//             fill="currentColor"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
//             />
//           </svg>
//         </Card.Body> */}
       
//       </Card>
//       <Card className="inner-card">
//   <Card.Header as="h6">Name: {props.board.item.something}</Card.Header>
//         <Card.Body>
//   <Card.Text>Date: {props.board.item.date}</Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

export default ItemList;
