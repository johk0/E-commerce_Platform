import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [clientSecret, setClientSecret] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const totalAmount = location.state?.totalAmount || 0;
	const fees = 21;

	useEffect(() => {
		axios.post("/create-payment-intent/").then((response) => {
			setClientSecret(response.data.clientSecret);
		});
	}, [totalAmount]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);
		const { error, paymentIntent } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: cardElement,
				},
			}
		);

		if (error) {
			console.error("Payment failed: ", error.message);
		} else {
			console.log("Payment successful: ", paymentIntent.id);
			navigate("/confirmation", {
				state: { paymentId: paymentIntent.id },
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg space-y-6">
			<h2 className="text-2xl font-bold text-center">Complete Your Payment</h2>
			<div className="space-y-4">
				<div className="flex flex-col sm:flex-row sm:space-x-4">
					<div className="flex flex-col w-full sm:w-1/2">
						<label htmlFor="firstName" className="text-sm font-medium">
							First Name (optional)
						</label>
						<input
							id="firstName"
							type="text"
							className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						/>
					</div>
					<div className="flex flex-col w-full sm:w-1/2">
						<label htmlFor="lastName" className="text-sm font-medium">
							Last Name (optional)
						</label>
						<input
							id="lastName"
							type="text"
							className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="phoneNumber" className="text-sm font-medium">
						Phone Number (optional)
					</label>
					<input
						id="phoneNumber"
						type="text"
						className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
					/>
				</div>
				<div className="flex flex-col">
					<label className="text-sm font-medium">Card Information</label>
					<div className="mt-1 p-2 border border-gray-300 rounded-lg">
						<CardElement options={{ style: { base: { fontSize: "16px" } } }} />
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="name" className="text-sm font-medium">
						Cardholder Name
					</label>
					<input
						id="name"
						type="text"
						className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="country" className="text-sm font-medium">
						Country or Region
					</label>
					<select
						id="country"
						className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						required>
						<option value="US">United States</option>
						<option value="AE">United Arab Emirates</option>
						<option value="EG">Egypt</option>
						{/* Add more options as needed */}
					</select>
				</div>
				<div className="flex flex-col sm:flex-row sm:space-x-4">
					<div className="flex flex-col w-full sm:w-1/2">
						<label htmlFor="region" className="text-sm font-medium">
							Region/Province (optional)
						</label>
						<input
							id="region"
							type="text"
							className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						/>
					</div>
					<div className="flex flex-col w-full sm:w-1/2">
						<label htmlFor="city" className="text-sm font-medium">
							City (optional)
						</label>
						<input
							id="city"
							type="text"
							className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="streetAddress" className="text-sm font-medium">
						Street Address (optional)
					</label>
					<input
						id="streetAddress"
						type="text"
						className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="zipCode" className="text-sm font-medium">
						ZIP Code (optional)
					</label>
					<input
						id="zipCode"
						type="text"
						className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring"
					/>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-lg font-semibold">Taxes & Fees</span>
					<span className="text-lg font-semibold">$26.81</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-lg font-semibold">Product Cost</span>
					<span className="text-lg font-semibold">
						${totalAmount.toFixed(2)}
					</span>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-2xl font-bold">Total</span>
					<span className="text-2xl font-bold">
						${(totalAmount + fees).toFixed(2)}
					</span>
				</div>
			</div>
			<button
				type="submit"
				disabled={!stripe}
				className="w-full py-2 px-4 bg-sky-500 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 disabled:opacity-50">
				Submit Secure Payment
			</button>
		</form>
	);
};

export default CheckoutForm;
