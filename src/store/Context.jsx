import { createContext, useState } from "react";

export const Contxt = createContext({
	product: false,
	HandleProduct: () => {},
});

export default function Con({ children }) {
	const [productActive, setProduct] = useState(false);
	function HandleProducts() {
		setProduct((prev) => !prev);
	}
	const ctxval = {
		product: productActive,
		HandleProduct: HandleProducts,
	};
	return <Contxt.Provider value={ctxval}>{children}</Contxt.Provider>;
}
