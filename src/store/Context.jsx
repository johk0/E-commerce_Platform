import { createContext, useState } from "react";

export const Contxt = createContext({
	Cart:[],
	HandleAddToCart:()=>{}
});

export default function Context({ children }) {
	const [cart, setCart] = useState([]);
	function HandleCart(index) {
		setCart((prev)=>{
			console.log(index)
			return [index,...prev]
		})
	}
	const ctxval = {
		Cart: cart,
		HandleAddToCart: HandleCart,
	};
	return <Contxt.Provider value={ctxval}>{children}</Contxt.Provider>;
}
