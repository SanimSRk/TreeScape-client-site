import CheckOutForm from './CheckOutForm/CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PUBLICK_KEY);

const Paymens = () => {
  console.log(stripePromise);
  return (
    <div>
      <h2>this is payment section </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Paymens;
