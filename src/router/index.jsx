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

import ShopLayout from "../Pages/shop/layout";
import ShopPage from "../Pages/shop";

import ProfileLayout from "@/Pages/profile/layout";
import ProfilePage from "@/Pages/profile";

import PaymentLayout from "@/Pages/Payment/layout";
import PaymentPage from "@/Pages/Payment";
//
import ProtectedRoute from "@/components/ProtectedRoutes";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root layout */}

			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path="/cart" element={<CartLayout />}>
				<Route
					index
					element={
						<ProtectedRoute>
							<CartPage />
						</ProtectedRoute>
					}
				/>
				<Route path="pay" element={<PaymentLayout />}>
					<Route index element={<PaymentPage />} />
				</Route>
			</Route>

			<Route path="/register" element={<RegisterLayout />}>
				<Route index element={<RegisterPage />} />
			</Route>

			<Route path="/login" element={<LoginLayout />}>
				<Route index element={<LoginPage />} />
			</Route>

			<Route path="/product" element={<ProductLayout />}>
				<Route index element={<ProductPage />} />
				<Route path=":id" element={<ProductPage />} />
			</Route>

			<Route path="/shop" element={<ShopLayout />}>
				<Route index element={<ShopPage />} />
				<Route path=":id" element={<ShopPage />} />
			</Route>

			<Route path="/profile" element={<ProfileLayout />}>
				<Route
					index
					element={
						<ProtectedRoute>
							<ProfilePage />
						</ProtectedRoute>
					}
				/>
			</Route>

			{/* Route for product details with :id parameter */}
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
