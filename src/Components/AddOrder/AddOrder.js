import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import CheckoutStripe from '../../Components/Stripe/CheckoutStripe';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    alignItems: "center",
    marginTop:theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddOrder = () => {
    const classes = useStyles();
    return (<Grid container>
            <Grid item sm="6">      <div className={classes.root} autoComplete="off">
        <TextField id="standard-basic" label="Name" />
       <br/>
        <TextField id="standard-basic" label="Email" />
        <br/>
        <TextField id="standard-basic" label="Service Name" />
        </div>
        </Grid>
     
        <Grid item sm="6">        <CheckoutStripe/></Grid>
        </Grid>
  

      
    
    );
};

export default AddOrder;