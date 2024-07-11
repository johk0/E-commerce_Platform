import { RouterProvider } from "react-router-dom";

import router from "./router";
import Context from "./store/Context";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Context>
				<RouterProvider router={router} />
			</Context>
			<Toaster />
		</>
	);
}

export default App;
