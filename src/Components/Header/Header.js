import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logoImg from "../../Images/logo.png" 
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { SignInContext, UserContext } from "../../App";
import Usermanu from "../Profile/UserManu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerContainer: {
backgroundColor: theme.palette.primary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isSignIn, setIsSignIn] = useContext(SignInContext);
  return (
    <div className={classes.headerContainer}>
    <Container maxWidth="lg">
      <AppBar position="static">
        <Grid container>
          <Grid item md={6}>
            <div className="logoContainer">
              <Link to="/">
              <img src={logoImg} width="150" height="50"alt="" srcset=""/>
              </Link>
            
            </div>
           
          </Grid>
          <Grid item md={6}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <List component="nav" className={classes.nav}>
                  <ListItem button>
                    <Link to="/">
                    <ListItemText primary="Home" />
                    </Link>
                    
                  </ListItem>
                
                  <ListItem button>
                    <Link to="/dashboard">
                    <ListItemText primary="Admin" />
                    </Link>
                    
                  </ListItem>
                 
                </List>
              </Typography>
              {
                isSignIn ?<Usermanu/> :<Button color="inherit">
                  <Link to="/login">Login
                  </Link>
                  </Button> 
              }
              
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
    </div>
  );
};
export default Header;
