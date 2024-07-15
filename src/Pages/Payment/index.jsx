import React from "react";
import StripeProvider from "../../services/StripeProvider";
import CheckoutForm from "./components/CheckoutForm";

const Payment = () => {
	return (
		<StripeProvider>
			<div className="flex flex-col items-center justify-center min-h-screen py-5">
				<CheckoutForm />
			</div>
		</StripeProvider>
	);
};

export default Payment;
