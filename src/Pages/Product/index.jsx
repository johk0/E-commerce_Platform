
import "./product.css";
import ProductDetails from "@/components/ProductDetails";
import Companies from "@/components/Companies";
import Products from "@/components/Products";
const index = () => {
    scrollTo(0,0);
	return (
		<>
	<ProductDetails />
    <Products/>
    <Companies/>
		</>
	);
};

export default index;
