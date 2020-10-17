import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4),
      color: "red"
    },
  }));

export default function ListItemsLayout(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };

  return (
      <div>
    <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
    {props.items.map((items) => {
        return (<List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText primary={items.itemTitle} />
            </ListItem>
        </List>
    )})}
    </Collapse>
    </div>
  )
}


  
//   export default function NestedList() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
  
//     const handleClick = () => {
//       setOpen(!open);
//     };
  
//     return (
//       <List
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" id="nested-list-subheader">
//             Nested List Items
//           </ListSubheader>
//         }
//         className={classes.root}
//       >
//         <ListItem button>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Sent mail" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItem>
//         <ListItem button onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//     );
//   }
  