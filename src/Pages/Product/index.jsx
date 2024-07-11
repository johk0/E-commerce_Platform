import "./product.css";
import ProductDetails from "@/components/ProductDetails";
import Companies from "@/components/Companies";
import Products from "@/components/Products";
import { useParams } from "react-router-dom";
const index = () => {
	const { id } = useParams();
	scrollTo(0, 0);
	return (
		<>
			<ProductDetails id={id} />
			<Products />
			<Companies />
		</>
	);
};

export default index;
