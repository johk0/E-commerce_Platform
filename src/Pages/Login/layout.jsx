import Footer from "@/components/Footer";
import Nav from "@/components/Nav/Nav";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const layout = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, []);
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};

export default layout;
