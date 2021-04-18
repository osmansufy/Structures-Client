import React, { useContext, useEffect, useState } from "react";
import {
  List,
  ListItem,
  Typography,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "../../axios";
import { UserContext } from "../../App";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  sideNav: {
    backgroundColor: theme.palette.grey.A200,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    height: "80vh",
  },
  demo: {
    backgroundColor: theme.palette.grey.A200,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
const DashBoardMenu = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin,setIsAdmin]=useState(false)
  const classes = useStyles();
  const { url } = useRouteMatch();
  useEffect(()=>{
    const {email}=loggedInUser
axios.post('isAdmin',{email})
.then(response=>{
  console.log(response);
  setIsAdmin(response.data)
})
.catch(error=>{
  console.log(error);
})
  },[])
  return (
    <>
      <Typography variant="h6" className={classes.title}>
       DashBoard 
      </Typography>
      <div className={classes.demo}>
        <List>
          <ListItem>
            <Link to="/">
              <ListItemText primary="View Site" />
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`${url}/addOrder`}>
              <ListItemText primary="Send Order" />
            </Link>
          </ListItem>
       
          <ListItem>
            <Link to={`${url}`}>
              <ListItemText primary="Order Lists" />
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`${url}/review`}>
              <ListItemText primary="Review" />
            </Link>
          </ListItem>
          {
            isAdmin &&<> <ListItem>
            <Link to={`${url}/addService`}>
              <ListItemText primary="Add Service" />
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`${url}/addAdmin`}>
              <ListItemText primary="Add Admin" />
            </Link>
          </ListItem>
          <ListItem>
            <Link to={`${url}/manageServices`}>
            <ListItemText primary="Manage Services" />
            </Link>
          </ListItem>
          </>
          }
          
        </List>
      </div>
    </>
  );
};

export default DashBoardMenu;
