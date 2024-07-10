import { RegisterForm } from "@/services/auth/register";

const index = () => {
	return (
		<>
			<div className="my-10">
				<h2 className="text-center text-4xl font-bold mb-5">Register</h2>
				<RegisterForm />
			</div>
		</>
	);
};

export default index;
