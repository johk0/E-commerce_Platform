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

export function RegisterForm() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { password, password2 } = formData;

		if (password !== password2) {
			toast.error("Passwords do not match!");
			return;
		}

		try {
			const response = await axios.post(API.register, formData);
			toast.success("Account created successfully!");
			navigate("/login");
		} catch (error) {
			toast.error("Failed to create account. Please try again.");
			console.error("There was an error creating the account:", error);
		}
	};

	return (
		<Card className="mx-auto max-w-sm border-none">
			<CardHeader>
				<CardTitle className="text-xl">Register</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="username">Name</Label>
							<Input
								id="username"
								placeholder="Yousef Ahmed"
								value={formData.username}
								onChange={handleInputChange}
								required
							/>
						</div>
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
						<div className="grid gap-2">
							<Label htmlFor="password2">Confirm Password</Label>
							<Input
								id="password2"
								type="password"
								value={formData.password2}
								onChange={handleInputChange}
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Create an account
						</Button>
						<Button variant="outline" className="w-full">
							Sign up with Google
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link to="/login" className="underline">
							Login
						</Link>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
