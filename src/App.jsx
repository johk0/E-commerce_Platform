import { RouterProvider } from "react-router-dom";

import router from "./router";
import Context from "./store/Context";
import { Toaster } from "react-hot-toast";
import { store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Provider store={store}>
					<Context>
						<RouterProvider router={router} />
					</Context>
					<Toaster />
				</Provider>
			</ApolloProvider>
		</>
	);
}

export default App;
