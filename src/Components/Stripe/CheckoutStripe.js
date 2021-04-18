import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleForm from './SimpleForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeFSiDfPe41flWVJa3ydM6odGIDmxjg5xxmzB66vpGKcVOHs9WveuPdt4rg2nyrJFZZF8MMty1LxAQKNQj3gE7J00vHDdEu55');

const CheckoutStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleForm />
    </Elements>
  );
};
export default CheckoutStripe