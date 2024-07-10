import { RouterProvider } from "react-router-dom";

import router from "./router";
import Context from "./store/Context";
function App() {
	return (
		<Context>
			<RouterProvider router={router} />
		</Context>
	);
}

export default App;
