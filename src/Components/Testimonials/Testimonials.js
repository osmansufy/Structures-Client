import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import { Box, Container } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "../../axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("reviews")
      .then((response) => {
        console.log(response);
        setReviews(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <List className={classes.root}>
          {
              reviews.map((review) =>(
                  <>
                <Box
                component={ListItem}
                container
                boxShadow={3}
                style={{maxWidth:"350px", marginTop:"3%"}}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar alt="Review">
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={review.name}
                  secondary={
                    <React.Fragment>
                        <p>{review.company}</p>
                      <Rating name="read-only" value={review.rating} readOnly />
                      <br />
                      <Typography
                        component="h3"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {review.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </Box>
      
              <Divider variant="inset" component="li" />
              </>
              ))
          }
       
      </List>
    </Container>
  );
};

export default Testimonials;
