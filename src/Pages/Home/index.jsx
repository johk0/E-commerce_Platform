import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/getProducts"; // Adjust the path as needed

import Landing from "/src/components/Landing.jsx";
import Companies from "/src/components/Companies.jsx";
import Explore from "/src/components/Explore.jsx";
import Products from "/src/components/Products.jsx";
import Featured from "/src/components/Featured.jsx";
import Services from "/src/components/Services.jsx";
import Categories from "../../components/categories";

import "./home.css";
import Headphone from "@/components/Headphone";

const Home = () => {
	const products = useSelector((state) => state.products);
	// get products
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// get products
	return (
		<>
			<Landing />
			<Companies />
			<Categories />
			<Explore />
			<Products products={products} />
			<Headphone />
			<Featured />
			<Services />
		</>
	);
};

export default Home;
