import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import { Contxt } from "@/store/Context";
import { changeLoginState } from "@/store/slices/loginState";
import { Button } from "@/UIcomponents/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Nav() {
	const loginState = useSelector((state) => state.loginState.value);
	const productsData = useSelector((state) => state.getProducts.items);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const context = useContext(Contxt);
	const [searchTerm, setSearchTerm] = useState("");
	const [wantSearch, setWantSearch] = useState(false);

	const handleSearchChange = (event) => {
		const value = event.target.value;
		if (value.match(/^[a-zA-Z0-9\s]*$/)) {
			setSearchTerm(value);
		}
	};

	function handleWantSearch() {
		setWantSearch((prev) => !prev);
	}
	const handleSearchSubmit = (event) => {
		event.preventDefault();
		navigate(`/shop/${searchTerm}`);
		setSearchTerm("");
	};
	// Filter products based on search term
	const filteredProducts = productsData
		? productsData.filter((product) =>
				String(product.name).toLowerCase().startsWith(searchTerm.toLowerCase())
		  )
		: [];

	// handle logout
	const handleLogout = () => {
		dispatch(changeLoginState(false));
		navigate("/login");
	};

	return (
		<>
			<header className="bg-white py-4 shadow-md px-5 max-md:hidden max-lg:px-4  sticky top-0 w-full z-50">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold text-sky-500 flex items-center">
							{/* <FontAwesomeIcon icon={faLeaf} className="mr-2" /> */}
							<span>
								<span>Easy</span>
								<span className="pl-[6px] text-black">Shop</span>
							</span>
						</Link>
					</div>
					<form
						className="ml-8 flex-grow text-center relative"
						onSubmit={handleSearchSubmit}>
						<input
							type="text"
							placeholder="Search"
							className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 w-4/5 max-lg:w-9/12"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
						<button
							type="submit"
							className="px-4 py-2 bg-sky-500 text-white rounded-md ml-2">
							<Link
								onClick={() => {
									setSearchTerm("");
								}}
								to={`/shop/${searchTerm}`}>
								<FontAwesomeIcon icon={faSearch} />
							</Link>
						</button>
						{searchTerm && (
							<div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
								{filteredProducts.length ? (
									filteredProducts.map((product) => {
										return (
											<div
												key={product.id}
												className="px-4 py-2 hover:bg-gray-100 ">
												<Link
													to={`/product/${product.id}`}
													onClick={() => setSearchTerm("")}
													className="flex justify-start items-center">
													<img
														src={product.images && product.images[0].url}
														alt=""
														className="w-16 mr-4 h-16 object-contain"
													/>
													{product.name}
												</Link>
											</div>
										);
									})
								) : (
									<div className="px-4 py-2">No results found</div>
								)}
							</div>
						)}
					</form>

					<div className="flex items-center">
						{!loginState && (
							<>
								<Link to="/login" className="text-gray-700 font-medium mr-4">
									Login
								</Link>
								<Link
									to="/register"
									className="text-white bg-sky-500 px-4 py-2 rounded-md font-medium">
									Register
								</Link>
							</>
						)}
						{loginState && (
							<Button variant="destructive" onClick={handleLogout}>
								Logout
							</Button>
						)}

						<div className="ml-4 relative">
							<Link to="/cart" className="mr-4">
								<FontAwesomeIcon
									icon={faShoppingCart}
									className="text-gray-700"
								/>
								<span
									className={
										context.Cart.length > 0
											? "absolute -top-4 bg-sky-500 rounded-[50%] flex justify-center items-center right-4 w-5 h-5 text-white "
											: "absolute -top-4 bg-sky-500 rounded-[50%]   right-4 w-5 h-5 text-white hidden"
									}>
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
						<Link
							to="/"
							className="text-2xl font-bold text-sky-500 flex items-center font-">
							{/* <FontAwesomeIcon icon={faLeaf} className="mr-2" /> */}
							<span className="max-sm:text-base">
								<span>Easy</span>
								<span className="pl-[6px] text-black">Shop</span>
							</span>
						</Link>
					</div>

					<div className="flex items-center">
						{!loginState && (
							<>
								<Link to="/login" className="text-gray-700 font-medium mr-4">
									Login
								</Link>
								<Link
									to="/register"
									className="text-white bg-sky-500 px-4 py-2 rounded-md font-medium">
									Register
								</Link>
							</>
						)}
						{loginState && (
							<Button variant="destructive" onClick={handleLogout}>
								Logout
							</Button>
						)}
						<div className="ml-4 relative">
							<Link to="/cart" className="mr-4 ">
								<FontAwesomeIcon
									icon={faShoppingCart}
									className="text-gray-700"
								/>
								<span
									className={
										context.Cart.length > 0
											? "absolute -top-4 bg-sky-500 rounded-[50%] flex justify-center items-center right-4 w-5 h-5 text-white "
											: "absolute -top-4 bg-sky-500 rounded-[50%]   right-4 w-5 h-5 text-white hidden"
									}>
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
				onSubmit={handleSearchSubmit}
				className={
					wantSearch
						? "m-auto flex-grow text-center md:hidden sticky top-20 w-full z-50 relative"
						: "m-auto flex-grow text-center hidden"
				}>
				<input
					type="text"
					placeholder="Search"
					className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 w-4/5"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-sky-500 text-white rounded-md ml-2">
					<Link
						onClick={() => {
							setSearchTerm("");
						}}
						to={`/shop/${searchTerm}`}>
						<FontAwesomeIcon icon={faSearch} />
					</Link>
				</button>
				{searchTerm && (
					<div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto">
						{filteredProducts.length ? (
							filteredProducts.map((product) => (
								<div key={product.id} className="px-4 py-2 hover:bg-gray-100">
									<Link
										to={`/product/${product.id}`}
										onClick={() => setSearchTerm("")}
										className="flex justify-start items-center">
										<img
											src={product.images && product.images[0].url}
											alt=""
											className="w-12 mr-4 h-12 object-contain"
										/>
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

			<section className="md:hidden fixed m-auto bottom-3 z-30 left-2/4 -translate-x-1/2 p-2  ">
				<NavLink
					end
					to={"/"}
					title="home"
					htmlFor="home"
					className="label flex flex-col items-center cursor-pointer pb-3">
					<input id="home" name="page" type="radio" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 21 20"
						height="20"
						width="21"
						className="icon home">
						<path
							fill="inherit"
							d="M18.9999 6.01002L12.4499 0.770018C11.1699 -0.249982 9.16988 -0.259982 7.89988 0.760018L1.34988 6.01002C0.409885 6.76002 -0.160115 8.26002 0.0398848 9.44002L1.29988 16.98C1.58988 18.67 3.15988 20 4.86988 20H15.4699C17.1599 20 18.7599 18.64 19.0499 16.97L20.3099 9.43002C20.4899 8.26002 19.9199 6.76002 18.9999 6.01002ZM10.9199 16C10.9199 16.41 10.5799 16.75 10.1699 16.75C9.75988 16.75 9.41988 16.41 9.41988 16V13C9.41988 12.59 9.75988 12.25 10.1699 12.25C10.5799 12.25 10.9199 12.59 10.9199 13V16Z"></path>
					</svg>
					<p className="text-white text-xs">Home</p>
				</NavLink>
				<NavLink
					to={"/shop"}
					title="cart"
					htmlFor="cart"
					className="label flex flex-col items-center cursor-pointer pb-3">
					<input id="cart" name="page" type="radio" />
					<svg
						className="w-4 h-4 s"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512">
						<path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
					</svg>
					<p className="text-white text-xs pt-1">Shop</p>
				</NavLink>
				<NavLink
					to={"/cart"}
					title="favorite"
					htmlFor="favorite"
					className="label relative flex flex-col items-center cursor-pointer">
					<input id="favorite" name="page" type="radio" />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
					</svg>
					<p className="text-white text-xs pt-1">Cart</p>
					<span
						className={
							context.Cart.length > 0
								? "absolute -top-1 bg-sky-500 rounded-[50%] flex justify-center items-center right-0 w-5 h-5 text-white "
								: "absolute -top-4 bg-sky-500 rounded-[50%]   right-4 w-5 h-5 text-white hidden"
						}>
						{context.Cart.length}
					</span>
				</NavLink>
				<label
					title="notifications"
					htmlFor="notifications"
					className={
						wantSearch
							? "label flex flex-col items-center active cursor-pointer"
							: "cursor-pointer label flex flex-col items-center "
					}>
					<input
						to={"cart"}
						id="notifications"
						name="page"
						type="radio"
						onClick={handleWantSearch}
					/>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
					</svg>
					<p className="text-white text-xs pt-1 ">Search</p>
				</label>
			</section>
		</>
	);
}
