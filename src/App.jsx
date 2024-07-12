// src/App.jsx
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Context from "./store/Context";
import { Toaster } from "react-hot-toast";
import StripeContext from "./StripeContext"; // Import the Stripe context

function App() {
	return (
		<>
			<Context>
				<StripeContext>
					<RouterProvider router={router} />
				</StripeContext>
			</Context>
			<Toaster />
		</>
	);
}

export default App;
