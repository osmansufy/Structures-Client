import React, { useContext, useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "../../axios";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const OrDerList = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const classes = useStyles();
  const [loggedInUser, setLoggedInUser]=useContext(UserContext)
  const [isAdmin,setIsAdmin]=useState(false)
  useEffect(() => {
    axios
      .post("orders",{email:loggedInUser.email})
      .then((response) => {
        setOrders(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  const onStatusChange=(id) => {
    console.log(status,id);
    axios.patch(`orderUpdate/${id}`,{status})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <h3>Order List</h3>
      <TableContainer style={{ margin:"40px"}} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Service Title</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Payment Id</StyledTableCell>
              <StyledTableCell align="right">Order Date</StyledTableCell>
              {isAdmin &&  <StyledTableCell align="right">Order Status</StyledTableCell> }
     
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order._id}>
                <StyledTableCell component="th" scope="row">
                  {order.serviceName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {order.quantity}
                </StyledTableCell>
                <StyledTableCell align="right">{order.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {order.paymentId}
                </StyledTableCell>
                <StyledTableCell align="right">{order.date}</StyledTableCell>
                {isAdmin && <StyledTableCell align="right">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={order.orderStatus}
                      onChange={handleChange}
                    >
                      <MenuItem value={order.orderStatus}>{order.orderStatus}</MenuItem>
                      <MenuItem value="OnGoing">OnGoing</MenuItem>
                      <MenuItem value="Complete">Complete</MenuItem>
                    </Select>
                  </FormControl>
                  <br/>
                  <Button onClick={()=>onStatusChange(order._id)} variant="contained" style={{marginTop:"20px"}}color="primary">Save</Button>
                </StyledTableCell> }
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default OrDerList;
