// src/components/Checkout.js
import React from "react";
import PaymentForm from "./PaymentForm";

const Checkout = ({ amount }) => {
	const handlePaymentSuccess = (paymentResult) => {
		console.log("Payment Successful:", paymentResult);
	};

	const handlePaymentError = (error) => {
		console.error("Payment Error:", error);
	};

	return (
		<div>
			<h2>Checkout</h2>
			<p>Amount to be paid: ${(amount / 100).toFixed(2)}</p>
			<PaymentForm
				amount={amount}
				onSuccess={handlePaymentSuccess}
				onError={handlePaymentError}
			/>
		</div>
	);
};

export default Checkout;
