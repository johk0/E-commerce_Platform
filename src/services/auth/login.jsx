import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../UIcomponents/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../UIcomponents/ui/card";
import { Input } from "../../UIcomponents/ui/input";
import { Label } from "../../UIcomponents/ui/label";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API } from "../api";

export function LoginForm() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(API.login, formData);
			// Show success message and navigate to home
			toast.success("Logged in successfully!");
			console.log("Login successful:", response.data);
			navigate("/"); // Redirect to the home page
		} catch (error) {
			// Show error message
			toast.error(
				"Failed to log in. Please check your credentials and try again."
			);
			console.error("There was an error logging in:", error);
		}
	};

	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">Login</CardTitle>
				<CardDescription>Enter your credentials to log in</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								value={formData.email}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={formData.password}
								onChange={handleInputChange}
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Log In
						</Button>
						<Button variant="outline" className="w-full">
							Sign in with GitHub
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Don’t have an account?{" "}
						<Link to="/register" className="underline">
							Register
						</Link>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
