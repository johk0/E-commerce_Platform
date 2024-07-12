// src/router.js
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";

import HomePage from "../Pages/Home";
import HomeLayout from "../Pages/Home/Layout";
import CartLayout from "../Pages/Cart/Layout";
import CartPage from "../Pages/Cart";
import RegisterPage from "../Pages/Register";
import RegisterLayout from "../Pages/Register/Layout";
import LoginPage from "../Pages/Login";
import LoginLayout from "../Pages/Login/Layout";
import ProductPage from "../Pages/Product";
import ProductLayout from "../Pages/Product/Layout";
import ShopLayout from "../Pages/Shop/Layout";
import ShopPage from "../Pages/Shop";
import PaymentLayout from "../Pages/Payment/Layout";
import PaymentPage from "../Pages/Payment";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
			</Route>

			<Route path="/cart" element={<CartLayout />}>
				<Route index element={<CartPage />} />
				<Route path=":id" element={<PaymentLayout />}>
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
			</Route>

			<Route path="/shop" element={<ShopLayout />}>
				<Route index element={<ShopPage />} />
				<Route path=":id" element={<ShopPage />} />
			</Route>

			<Route path="*" element={<Navigate to="/" replace />} />
		</>
	)
);

export default router;
