import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51PaxxPRx0BSIfJgRQNjIwQ4e0EaQP0VKspjrGHWVeIa530iF7VqdyGO54mVsS6w7n1UUF8qInFW339OzfVwLtFAi00BDwSo574"
);

const StripeProvider = ({ children }) => {
	return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
