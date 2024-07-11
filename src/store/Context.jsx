import { createContext, useState } from "react";

export const Contxt = createContext({
	Cart:[],
	HandleAddToCart:()=>{},
	HandleRemove:()=>{}
});

export default function Context({ children }) {
	const [cart, setCart] = useState([]);
	function HandleCart(index) {
		setCart((prev)=>{
		if(prev.includes(index)===false){
			return [index,...prev]
		}
		else{return [...prev]}
		})
	}
	function HandleRemover(itemToRemove) {
        setCart((prev) => prev.filter((item) => item !== itemToRemove));
    }
	const ctxval = {
		Cart: cart,
		HandleAddToCart: HandleCart,
        HandleRemove:HandleRemover
	};
	return <Contxt.Provider value={ctxval}>{children}</Contxt.Provider>;
}
