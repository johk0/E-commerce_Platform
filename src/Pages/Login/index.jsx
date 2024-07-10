import { LoginForm } from "@/services/auth/login";

const index = () => {
	return (
		<>
			<div className="my-10">
				<h2 className="text-center text-4xl font-bold mb-5">Login</h2>
				<LoginForm />
			</div>
		</>
	);
};

export default index;
