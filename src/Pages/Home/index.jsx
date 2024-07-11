import Landing from "/src/components/Landing.jsx";
import Companies from "/src/components/Companies.jsx";
import Explore from "/src/components/Explore.jsx";
import Products from "/src/components/Products.jsx";
import Featured from "/src/components/Featured.jsx";
import Services from "/src/components/Services.jsx";


import Categories from "../../components/categories";
import "./home.css";
const HomePage = () => {

	return (
		<>
			<Landing />
			<Companies />
			<Categories />
			<Explore />
			<Products />
			<Featured />
			<Services />
		</>
	);
};

export default HomePage;
