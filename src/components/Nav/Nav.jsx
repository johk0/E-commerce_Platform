import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faShoppingCart,
	faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import { Contxt } from "@/store/Context";
import demoProducts from "@/demoProducts";


export default function Nav() {
	const context = useContext(Contxt);
	const [searchTerm, setSearchTerm] = useState("");
	const [wantSearch, setWantSearch] = useState(false);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	function handleWantSearch() {
		setWantSearch((prev) => !prev);
	}

	// Filter products based on search term
	const filteredProducts = demoProducts.filter((product) =>
		product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
	);

	return (
		<>
			<header className="bg-white py-4 shadow-md px-5 max-md:hidden max-lg:px-4  sticky top-0 w-full z-50">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<Link to="/" className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span>
								<span>Easy</span>
								<span className="pl-[6px] text-black">Shop</span>
							</span>
						</Link>
					</div>
					<form className="ml-8 flex-grow text-center relative">
	<input
		type="text"
		placeholder="Search"
		className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5 max-lg:w-9/12"
		value={searchTerm}
		onChange={handleSearchChange}
	/>
	<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
		<FontAwesomeIcon icon={faSearch} />
	</button>
	{searchTerm && (
		<div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
			{filteredProducts.length ? (
				filteredProducts.map((product) => (
					<div key={product.id} className="px-4 py-2 hover:bg-gray-100">
						<Link to={`/product/${product.id}`} onClick={() => setSearchTerm("")}>
							{product.name}
						</Link>
					</div>
				))
			) : (
				<div className="px-4 py-2">No results found</div>
			)}
		</div>
	)}
</form>

					<div className="flex items-center">
						<Link to="/login" className="text-gray-700 font-medium mr-4">
							Login
						</Link>
						<Link to="/register" className="text-white bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</Link>
						<div className="ml-4 relative">
							<Link to="/cart" className="mr-4">
								<FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
								<span
									className={
										context.Cart.length > 0
											? "absolute -top-4 bg-sky-500 rounded-[50%] flex justify-center items-center right-4 w-5 h-5 text-white "
											: "absolute -top-4 bg-sky-500 rounded-[50%]   right-4 w-5 h-5 text-white hidden"
									}
								>
									{context.Cart.length}
								</span>
							</Link>
							<Link to="/profile">
								<FontAwesomeIcon icon={faUser} className="text-gray-700" />
							</Link>
						</div>
					</div>
				</div>
			</header>

			{/* mobile nav bar */}

			<header className="bg-white py-4 shadow-md px-5 md:hidden mb-5 max-sm:px-0 sticky top-0 w-full z-50">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<Link to="/" className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span className="max-sm:text-sm">
								<span>Easy</span>
								<span className="pl-[6px] text-black">Shop</span>
							</span>
						</Link>
					</div>

					<div className="flex items-center">
						<Link to="/login" className="text-gray-700 font-medium mr-4 max-sm:text-sm">
							Login
						</Link>
						<Link to="/register" className="text-white max-sm:text-sm bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</Link>
						<div className="ml-4 relative">
							<Link to="/cart" className="mr-4 ">
								<FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
								<span
									className={
										context.Cart.length > 0
											? "absolute -top-4 bg-sky-500 rounded-[50%] flex justify-center items-center right-4 w-5 h-5 text-white "
											: "absolute -top-4 bg-sky-500 rounded-[50%]   right-4 w-5 h-5 text-white hidden"
									}
								>
									{context.Cart.length}
								</span>
							</Link>
							<Link to="/profile">
								<FontAwesomeIcon icon={faUser} className="text-gray-700" />
							</Link>
						</div>
					</div>
				</div>
			</header>

			<form
	className={
		wantSearch
			? "m-auto flex-grow text-center md:hidden sticky top-20 w-full z-50 relative"
			: "m-auto flex-grow text-center hidden"
	}
>
	<input
		type="text"
		placeholder="Search"
		className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5"
		value={searchTerm}
		onChange={handleSearchChange}
	/>
	<button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
		<FontAwesomeIcon icon={faSearch} />
	</button>
	{searchTerm && (
		<div className="absolute left-[46%] -translate-x-1/2 mt-1 w-4/5 bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
			{filteredProducts.length ? (
				filteredProducts.map((product) => (
					<div key={product.id} className="px-4 py-2 hover:bg-gray-100">
						<Link to={`/product/${product.id}`} onClick={() => setSearchTerm("")}>
							{product.name}
						</Link>
					</div>
				))
			) : (
				<div className="px-4 py-2">No results found</div>
			)}
		</div>
	)}
</form>

<section className="md:hidden fixed m-auto bottom-3 z-30 left-2/4 -translate-x-1/2 p-2">
	<NavLink
		end
		to={"/"}
		title="home"
		htmlFor="home"
		className="label flex flex-col items-center cursor-pointer pb-3"
	>
		<input id="home" name="page" type="radio" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 21 20"
			height="20"
			width="21"
			className="icon home"
		>
			<path
				fill="inherit"
				d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.7 19.0599 16.98L20.3199 9.44002C20.5099 8.26002 19.9299 6.76002 18.9999 6.01002ZM11.4999 17C11.4999 17.55 11.0499 18 10.4999 18C9.94988 18 9.49988 17.55 9.49988 17V13C9.49988 12.45 9.94988 12 10.4999 12C11.0499 12 11.4999 12.45 11.4999 13V17Z"
			/>
		</svg>
		<span className="text-slate-700 text-sm">Home</span>
	</NavLink>

	<div onClick={handleWantSearch} title="search" className="label flex flex-col items-center cursor-pointer pb-3">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" className="icon search">
			<path
				fill="inherit"
				d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
			/>
		</svg>
		<span className="text-slate-700 text-sm">Search</span>
	</div>
	<NavLink
		end
		to={"/profile"}
		title="profile"
		htmlFor="profile"
		className="label flex flex-col items-center cursor-pointer pb-3"
	>
		<input id="profile" name="page" type="radio" />
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20" className="icon profile">
			<path
				fill="inherit"
				d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10ZM10 12.5C6.96243 12.5 0 14.0869 0 17.5V18.75C0 19.4404 0.559644 20 1.25 20H18.75C19.4404 20 20 19.4404 20 18.75V17.5C20 14.0869 13.0376 12.5 10 12.5Z"
			/>
		</svg>
		<span className="text-slate-700 text-sm">Profile</span>
	</NavLink>
	<NavLink
		end
		to={"/cart"}
		title="cart"
		htmlFor="cart"
		className="label flex flex-col items-center cursor-pointer pb-3"
	>
		<input id="cart" name="page" type="radio" />
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" height="20" width="21" className="icon cart">
			<path
				fill="inherit"
				d="M17.837 13.435l2.381-8.337a.781.781 0 00-.075-.607.733.733 0 00-.524-.34L4.69 2.51l-.618-2.12A1.249 1.249 0 002.858 0H.782a.781.781 0 100 1.563h1.8c.053 0 .1.036.115.085L5.16 11.63a1.248 1.248 0 001.145.888l10.707.677-3.132 3.133a.782.782 0 000 1.105c.305.305.8.305 1.104 0l3.935-3.935a.781.781 0 00.019-1.063.044.044 0 01-.002-.002zM6.261 10.827L4.253 3.542l14.11 2.064-2.046 7.162-10.056-.64zM5.469 16.719a1.563 1.563 0 100 3.126 1.563 1.563 0 000-3.126zm0 2.188a.625.625 0 110-1.251.625.625 0 010 1.25zm8.437-2.188a1.563 1.563 0 100 3.126 1.563 1.563 0 000-3.126zm0 2.188a.625.625 0 110-1.251.625.625 0 010 1.25z"
			/>
		</svg>
		<span className="text-slate-700 text-sm">Cart</span>
	</NavLink>
</section>

		</>
	);
}
