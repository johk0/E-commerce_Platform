import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";

import HomePage from "../Pages/Home";

import HomeLayout from "../Pages/Home/Layout";

const isLogin = false;

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root layout */}
			<Route path="/" element={<HomeLayout />}>
				<Route index element={<HomePage />} />
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
