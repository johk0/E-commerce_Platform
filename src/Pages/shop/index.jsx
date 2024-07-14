import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faThList } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "@/components/ProductCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/getProducts";
import "./shop.css";

const Shop = () => {
	const dispatch = useDispatch();
	const productsData = useSelector((state) => state.getProducts.items);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const { id } = useParams();
	const [view, setView] = useState("grid");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedOption, setSelectedOption] = useState(0);
	const [selectedFilter, setSelectedFilter] = useState(0);
	const [selectedSearch, setSelectedSearch] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [searchedData, setSearchedData] = useState(productsData);

	useEffect(() => {
		if (id) {
			if (isNaN(id)) {
				setSelectedSearch(id);
				setSelectedFilter(0);
			} else {
				setSelectedFilter(parseInt(id) + 1);
				setSelectedSearch("");
			}
		} else {
			setSelectedFilter(0);
			setSelectedSearch("");
		}
	}, [id]);

	// Handle change in sorting option
	const handleSelectChange = (event) => {
		setSelectedOption(parseInt(event.target.value));
		setCurrentPage(1);
	};

	// Handle change in filter option
	const handleSelectFilter = (event) => {
		setSelectedFilter(parseInt(event.target.value));
		setCurrentPage(1);
	};

	// Function to filter products based on the first letter of ID
	const filterProductsByFirstLetter = (products, letter) => {
		return products.filter((product) => String(product.id).startsWith(letter));
	};

	// Function to search products by name
	const searchProductsByName = (products, name) => {
		return products.filter((product) =>
			product.name.toLowerCase().startsWith(name.toLowerCase())
		);
	};

	useEffect(() => {
		let filteredData = [...productsData];
		if (selectedSearch.length > 0) {
			filteredData = searchProductsByName(productsData, selectedSearch);
		}
		setSearchedData(filteredData);
	}, [selectedSearch, productsData]);

	useEffect(() => {
		let filteredData = [...searchedData];
		if (selectedFilter === 1) {
			filteredData = filterProductsByFirstLetter(searchedData, "t");
		} else if (selectedFilter === 2) {
			filteredData = filterProductsByFirstLetter(searchedData, "s");
		} else if (selectedFilter === 3) {
			filteredData = filterProductsByFirstLetter(searchedData, "d");
		} else if (selectedFilter === 4) {
			filteredData = filterProductsByFirstLetter(searchedData, "c");
		} else if (selectedFilter === 5) {
			filteredData = filterProductsByFirstLetter(searchedData, "f");
		}
		setFilteredProducts(filteredData);
		setCurrentPage(1);
	}, [selectedFilter, searchedData]);

	const sortProducts = (products, option) => {
		if (option === 1) {
			return products.slice().sort((a, b) => a.price - b.price);
		} else if (option === 2) {
			return products.slice().sort((a, b) => b.price - a.price);
		}
		return products;
	};

	const sortedProducts = sortProducts(filteredProducts, selectedOption);

	// Pagination function
	const handleChangeOfPage = (number) => {
		setCurrentPage(number);
	};

	// Calculate number of pages
	const numPages = Math.ceil(sortedProducts.length / 6);

	// Scroll to top on currentPage or filteredProducts change
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [currentPage, filteredProducts]);

	return (
		<div className="p-4 px-7">
			<header className="flex justify-between items-center mb-4 max-md:flex-col">
				<div className="text-lg font-semibold max-md:pb-4">
					Showing all {sortedProducts.length} results{" "}
					{selectedSearch.length > 0 ? (
						<span>
							for:
							<span className="text-sky-500 uppercase">
								{" "}
								&quot; {selectedSearch} &quot;
							</span>
						</span>
					) : null}
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={() => setView("grid")}
						className={`p-2 max-md:hidden ${
							view === "grid" ? "text-blue-500" : ""
						}`}>
						<FontAwesomeIcon icon={faThLarge} />
					</button>
					<button
						onClick={() => setView("list")}
						className={`p-2 max-md:hidden ${
							view === "list" ? "text-blue-500" : ""
						}`}>
						<FontAwesomeIcon icon={faThList} />
					</button>
					<select
						className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
						value={selectedOption}
						onChange={handleSelectChange}>
						<option value={0}>Popularity</option>
						<option value={1}>Price Low-To-High</option>
						<option value={2}>Price High-To-Low</option>
					</select>
					<select
						className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
						value={selectedFilter}
						onChange={handleSelectFilter}>
						<option value={0}>All Products</option>
						<option value={1}>Toys & Games</option>
						<option value={2}>Sports Gear</option>
						<option value={3}>Devices</option>
						<option value={4}>Clothes</option>
						<option value={5}>Furniture</option>
					</select>
				</div>
			</header>

			<div
				className={`grid ${
					view === "grid"
						? "grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] max-sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-6"
						: "grid-cols-1 gap-4"
				}`}>
				{sortedProducts
					.slice((currentPage - 1) * 6, currentPage * 6)
					.map((product, index) => {
						const hi = "hi";
						console.log(product);
						return (
							<Fragment key={index}>
								<ProductCard item={product} />
							</Fragment>
						);
					})}
			</div>

			<div className="flex justify-center items-center mt-4 max-w-80 m-auto">
				<button
					onClick={() => handleChangeOfPage(1)}
					className="p-2 bg-gray-300 rounded">
					First
				</button>
				<div className="flex items-center gap-2 mx-3">
					{Array.from({ length: numPages }, (_, index) => (
						<button
							key={index}
							onClick={() => handleChangeOfPage(index + 1)}
							className={`p-2 ${
								currentPage === index + 1
									? "bg-blue-500 text-white rounded"
									: "bg-gray-300 rounded"
							}`}>
							{index + 1}
						</button>
					))}
				</div>
				<button
					onClick={() => {
						if (currentPage !== numPages) {
							handleChangeOfPage(currentPage + 1);
						}
					}}
					className="p-2 bg-gray-300 rounded">
					Next
				</button>
			</div>
		</div>
	);
};

export default Shop;
