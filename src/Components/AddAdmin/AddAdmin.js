import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from '../../axios';

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:theme.spacing(3),
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  error:{
    color:"red",
    textAlign:"center",
    margin: "0 auto",
  }
}));
function validateEmail (email) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}
const AddAdmin=()=> {
  const classes = useStyles();
  const [adminEmail,setAdminEmail]=useState()
const [error,setError]=useState("")
  const onAddAdmin=()=>{
    const validEmail=validateEmail(adminEmail)
    if (validEmail) {
      const email=adminEmail
     axios.post("addAdmin",{email})
     .then(response=>{
       console.log(response);
       setError("")
       setAdminEmail("")
     }).catch(error=>{
       console.log(error);
     })
     
    }else{
      setError("Please Enter valid email address")
    }

  }
  return (<>
    <h3>Add New Admin</h3>
    <form className={classes.root} noValidate autoComplete="off">
      {error && <p className={classes.error}>{error}</p>}
      <TextField id="outlined-basic"value={adminEmail} onChange={(e)=>setAdminEmail(e.target.value)} type="email" label="Email" variant="outlined" />
      <br/>
      <Button onClick={onAddAdmin} variant="contained" color="secondary">
  Submit
</Button>
    </form>
    </>
  );
}
export default AddAdmin
