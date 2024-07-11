
import "./product.css";
import ProductDetails from "@/components/ProductDetails";
import Companies from "@/components/Companies";
import Products from "@/components/Products";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const ProductPage = () => {
	const { id } = useParams();
    useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	  }, [id]);
	
	return (
		<>
	<ProductDetails id={id}/>
    <Products/>
    <Companies/>
		</>
	);
};

export default ProductPage;
