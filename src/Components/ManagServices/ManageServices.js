import React ,{useState, useEffect}from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "../../axios"
import DeleteIcon from '@material-ui/icons/Delete';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const ManageServices = () => {
    const classes = useStyles();
    const [services,setServices]=useState([])
  const onAllService=()=>{
      axios.get("services")
      .then(response=>{
          setServices(response.data)
          console.log(response)
      })
      .catch(error=>{
          console.log(error);
      })
    }
useEffect(()=>{
  onAllService()
},[])
const onDeleteService=(id) =>{
  axios.delete(`deleteService/${id}`)
  .then(response=>{
    console.log(response)
    onAllService()
  })
  .catch(error=>{
    console.log(error);
  })
}
    return (
      <div style={{ margin:"5%" }}>

      
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Service Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <StyledTableRow key={service._id}>
                <StyledTableCell component="th" scope="row">
                  {service.title}
                </StyledTableCell>
                <StyledTableCell align="right">{service.price}</StyledTableCell>
                <StyledTableCell style={{curser:"pointer"}} onClick={() =>onDeleteService(service._id)} align="right"> <DeleteIcon color="secondary" /></StyledTableCell>
            
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
};

export default ManageServices;