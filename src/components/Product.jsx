import ProductDetails from "./ProductDetails";
import Products from "../components/Products";
import Companies from "../components/Companies";

export default function Product() {
	window.scrollTo(0, 0);
	return (
		<>
			<ProductDetails />
			<Products />
			<Companies />
		</>
	);
}
