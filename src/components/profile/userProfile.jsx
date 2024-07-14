import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Button } from "@/UIcomponents/ui/button";
import { Input } from "@/UIcomponents/ui/input";
import { Label } from "@/UIcomponents/ui/label";
import toast from "react-hot-toast";

const UserProfile = () => {
	const userData = useSelector((state) => state.userData.value);
	console.log(userData);

	const initialUserState = {
		firstName: userData.username,
		lastName: "",
		hiredDate: "",
		birthDate: "",
		phone: "",
		email: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		country: "",
		profileImage: "https://via.placeholder.com/100",
	};

	const [user, setUser] = useState(initialUserState);
	const [editedUser, setEditedUser] = useState(initialUserState);
	const [isChanged, setIsChanged] = useState(false);

	useEffect(() => {
		const savedUser = localStorage.getItem("userProfile");
		if (savedUser) {
			const parsedUser = JSON.parse(savedUser);
			setUser(parsedUser);
			setEditedUser(parsedUser);
		}
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedUser((prevState) => ({
			...prevState,
			[name]: value,
		}));
		setIsChanged(true);
	};

	const handleSave = () => {
		setUser(editedUser);
		localStorage.setItem("userProfile", JSON.stringify(editedUser));
		setIsChanged(false);
		toast.success("Profile saved successfully!");
	};

	const handleCancel = () => {
		setEditedUser(user);
		setIsChanged(false);
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			setEditedUser((prevState) => ({
				...prevState,
				profileImage: reader.result,
			}));
			setIsChanged(true);
		};
		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="grapper py-5">
			<div className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
				<div className="flex flex-col md:flex-row items-center justify-between mb-6">
					<div className="flex items-center">
						<img
							src={editedUser.profileImage}
							alt="Profile"
							className="w-24 h-24 rounded-full mr-4"
						/>
						<div>
							<h2 className="text-xl font-bold">
								{user.firstName} {user.lastName}
							</h2>
							{/* <p>ID: 22</p> */}
						</div>
					</div>
					<div className="pt-5 md:p5-0">
						<Label
							htmlFor="upload-button"
							className="cursor-pointer bg-sky-600 text-white px-4 py-2 rounded">
							Upload Image
						</Label>
						<Input
							type="file"
							id="upload-button"
							accept="image/*"
							className="hidden"
							onChange={handleImageUpload}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
					<div className="space-y-2">
						<h3 className="text-lg font-semibold">Basic Info</h3>
						<div>
							<Label className="block pb-2">First Name</Label>
							<Input
								type="text"
								name="firstName"
								value={editedUser.firstName}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>
						<div>
							<Label className="block pb-2">Last Name</Label>
							<Input
								type="text"
								name="lastName"
								value={editedUser.lastName}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>

						<div>
							<Label className="block pb-2">Register Date</Label>
							<Input
								type="date"
								name="hiredDate"
								value={editedUser.hiredDate}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>
						<div>
							<Label className="block pb-2">Birth Date</Label>
							<Input
								type="date"
								name="birthDate"
								value={editedUser.birthDate}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-lg font-semibold">Contacts</h3>
						<div>
							<Label className="block pb-2">Phone</Label>
							<Input
								type="tel"
								name="phone"
								value={editedUser.phone}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>
						<div>
							<Label className="block pb-2">Email</Label>
							<Input
								type="email"
								name="email"
								value={editedUser.email}
								onChange={handleChange}
								className="w-full border rounded p-2"
							/>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<h3 className="text-lg font-semibold">Address</h3>
					<div>
						<Label className="block pb-2">Street Address</Label>
						<Input
							type="text"
							name="address"
							value={editedUser.address}
							onChange={handleChange}
							className="w-full border rounded p-2"
						/>
					</div>
					<div>
						<Label className="block pb-2">City</Label>
						<Input
							type="text"
							name="city"
							value={editedUser.city}
							onChange={handleChange}
							className="w-full border rounded p-2"
						/>
					</div>
					<div>
						<Label className="block pb-2">State/Province</Label>
						<Input
							type="text"
							name="state"
							value={editedUser.state}
							onChange={handleChange}
							className="w-full border rounded p-2"
						/>
					</div>
					<div>
						<Label className="block pb-2">Zip Code</Label>
						<Input
							type="text"
							name="zip"
							value={editedUser.zip}
							onChange={handleChange}
							className="w-full border rounded p-2"
						/>
					</div>
					<div>
						<Label className="block pb-2">Country</Label>
						<Input
							type="text"
							name="country"
							value={editedUser.country}
							onChange={handleChange}
							className="w-full border rounded p-2"
						/>
					</div>
				</div>

				<div className="flex justify-end mt-6">
					<Button
						className={`bg-sky-600 text-white px-4 py-2 rounded mr-2 ${
							!isChanged ? "opacity-50 cursor-not-allowed" : ""
						}`}
						onClick={handleSave}
						disabled={!isChanged}>
						Save
					</Button>
					<Button
						className="bg-gray-500 text-white px-4 py-2 rounded"
						onClick={handleCancel}>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
