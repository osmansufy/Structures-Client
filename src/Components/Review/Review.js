import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from '../../axios'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '350px',
    },
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  },
  inputContainer:{
      display:"flex",
      flexDirection:"column"
  }
}));

const Review=()=> {
  const classes = useStyles();
  const [reviewInfo, setReviewInfo] = useState({});
  const [rating, setRating] = useState(5);
  const handleChange = (event) => {
    const newReview={...reviewInfo}
    newReview[event.target.name]=event.target.value
    setReviewInfo(newReview);
  };
  const onSendReview=()=>{
    const reviewDetails={...reviewInfo,rating:rating}
    axios.post('addReview',reviewDetails)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{console.log(error)})
  }
  return (
    <div>
      
   
    <form className={classes.root} noValidate autoComplete="off">
    <div className={classes.inputContainer}>
        <TextField
          id="outlined-multiline-flexible"
          label="Your name"
          name="name"
          value={reviewInfo.name}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-textarea"
          label="Company's name"
          name="company"
          value={reviewInfo.company}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          name="description"
          value={reviewInfo.review}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Give us rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
            console.log(newValue);
          }}
        />
      </Box>
      <Button onClick={onSendReview} variant="contained" color="secondary">
  Submit
</Button>
    </form>
    </div>
  );
}
export default Review