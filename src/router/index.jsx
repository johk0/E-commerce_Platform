import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";

import HomePage from "../Pages/Home";
import HomeLayout from "../Pages/Home/Layout";

import CartLayout from "../Pages/Cart/layout";
import CartPage from "../Pages/Cart";

import RegisterPage from "../Pages/Register";
import RegisterLayout from "../Pages/Register/Layout";

import LoginPage from "../Pages/Login";
import LoginLayout from "../Pages/Login/Layout";

import ProductPage from "../Pages/Product";
import ProductLayout from "../Pages/product/Layout";

const isLogin = false;

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root layout */}

			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path="/cart" element={<CartLayout />}>
				<Route index element={<CartPage />} />
			</Route>

			<Route path="/register" element={<RegisterLayout />}>
				<Route index element={<RegisterPage />} />
			</Route>

			<Route path="/login" element={<LoginLayout />}>
				<Route index element={<LoginPage />} />
			</Route>
			<Route path="/product" element={<ProductLayout />}>
				<Route index element={<ProductPage />} />
			</Route>

			{/* Learn layout
			<Route path="learn" element={<LearnLayout />}>
				<Route index element={<QuickPage />} />
				<Route path="think-in-react" element={<ThinkingInReact />} />
				<Route path="installation" element={<Installation />} />
			</Route> */}
		</>
	)
);

export default router;
