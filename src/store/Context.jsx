import { createContext, useState } from "react";

export const Contxt = createContext({
	Cart:[],
	HandleAddToCart:()=>{},
	HandleRemove:()=>{},
	component:"",
	handleComponent:()=>{}
});

export default function Context({ children }) {
	const [activeComponent,setActiveComponent]=useState("");
	function handleComponentSwitch(id){
		setActiveComponent(id);
	}
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
        HandleRemove:HandleRemover,
		component:activeComponent,
		handleComponent:handleComponentSwitch
	};
	return <Contxt.Provider value={ctxval}>{children}</Contxt.Provider>;
}
