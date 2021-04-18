import { Button } from '@material-ui/core';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import { OrderContext, UserContext } from '../../App';
import axios from "../../axios"
const SimpleForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [orderProducts,setOrderProducts]=useContext(OrderContext)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const newOrder={
        email:loggedInUser.email,
        name:loggedInUser.name,
        date:new Date(),
        serviceName:orderProducts.title,
        quantity:1,
        price:orderProducts.price,
        paymentId:paymentMethod.id,
        orderStatus:"pending"
      };
      axios.post('createOrder',newOrder)
      .then(response=>{
        console.log(response);
      })
      .catch(error=>{console.log(error);})
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form style={{display:"flex",flexDirection:"column",marginTop:"50px",marginBottom:"50px"}} onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" style={{marginTop:"50px",maxWidth:"150px"}} disabled={!stripe} variant="contained" color="secondary">
  SendOrder
</Button>
   
    </form>
  );
};
export default SimpleForm