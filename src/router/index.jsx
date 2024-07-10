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
import Cart from "../Pages/Cart";

const isLogin = false;

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root layout */}
		
           
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
			</Route>
			<Route path="/Cart" element={<CartLayout />}>
				<Route index element={<Cart />} />
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
