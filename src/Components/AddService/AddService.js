import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField,Typography } from "@material-ui/core";
import axios from "../../axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const AddService = () => {
  const classes = useStyles();
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...serviceInfo };
    newInfo[e.target.name] = e.target.value;
    setServiceInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(serviceInfo);
    formData.append("file", file);
    formData.append("title", serviceInfo.title);
    formData.append("price", serviceInfo.price);
    axios
      .post("/addService", formData)
      .then((response) => {
        console.log(response);
        setFile(null);
        setServiceInfo({});
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };
  return (
   <div style={{margin:"5%"}}>


       <Typography style={{textAlign:"left"}} variant="h6" >
       Add New Services 
      </Typography>
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Title"
        id="filled-size-small"
        variant="filled"
        size="small"
        name="title"
        onBlur={handleBlur}
      />
      <TextField
        label="Price"
        id="filled-size-small"
        variant="filled"
        size="small"
        name="price"
        onBlur={handleBlur}
      />
      <input onChange={handleFileChange} type="file" />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
    </div>
  );
};
export default AddService;
