import { RouterProvider } from "react-router-dom";

import router from "./router";
import Context from "./store/Context";
import { Toaster } from "react-hot-toast";
import { store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";

function App() {
	return (
		<>
			<Provider store={store}>
				<Context>
					<RouterProvider router={router} />
				</Context>
				<Toaster />
			</Provider>
		</>
	);
}

export default App;
