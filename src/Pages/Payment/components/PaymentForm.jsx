// src/components/PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({ amount, onSuccess, onError }) => {
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});

		if (error) {
			setError(error.message);
			setProcessing(false);
			onError(error.message);
			return;
		}

		const response = await fetch("/api/payments/create-payment-intent/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount }),
		});

		const paymentResult = await response.json();

		if (paymentResult.error) {
			setError(paymentResult.error);
			setProcessing(false);
			onError(paymentResult.error);
			return;
		}

		onSuccess(paymentResult);
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			{error && <div>{error}</div>}
			<button type="submit" disabled={!stripe || processing}>
				{processing ? "Processing..." : "Pay"}
			</button>
		</form>
	);
};

export default PaymentForm;
