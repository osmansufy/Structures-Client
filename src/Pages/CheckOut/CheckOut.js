import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid } from '@material-ui/core';
import CheckoutStripe from '../../Components/Stripe/CheckoutStripe'
import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer";
import { OrderContext } from '../../App';
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

const CheckOut = () => {
    const classes = useStyles();
    const [orderProducts,setOrderProducts]=useContext(OrderContext)
    return (<>
        <Header/>
        <Container style={{margin:"50px"}}>

      
        <Grid container>
        <Grid item sm="12">      
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Service Title</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow >
              <TableCell component="th" scope="row">
               {orderProducts.title}
              </TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">{orderProducts.price}</TableCell>
         
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
        

    </Grid>
<Grid item sm="6">
<CheckoutStripe/> 
</Grid>
    </Grid>
    </Container>
    <Footer />
    </>
    );
};

export default CheckOut;