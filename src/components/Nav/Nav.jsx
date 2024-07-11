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

export default function Nav() {
	let context = useContext(Contxt);
	const [searchTerm, setSearchTerm] = useState("");
	const [wantSearch, setWantSearch] = useState(false);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	function handleWantSearch() {
		window.scrollTo(0, 0);
		setWantSearch((prev) => !prev);
	}

	return (
		<>
			<header className="bg-white py-4 shadow-md px-5 max-md:hidden max-lg:px-4">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span>Candleleaf</span>
						</Link>
					</div>
					<form className="ml-8 flex-grow text-center">
						<input
							type="text"
							placeholder="Search"
							className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5 max-lg:w-9/12"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</form>
					<div className="flex items-center">
						<Link to="/login" className="text-gray-700 font-medium mr-4">
							Login
						</Link>
						<Link
							to="/register"
							className="text-white bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</Link>
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

			<header className="bg-white py-4 shadow-md px-5 md:hidden mb-5 max-sm:px-0">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<Link
							to="/"
							className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span className="max-sm:text-sm">Candleleaf</span>
						</Link>
					</div>

					<div className="flex items-center">
						<Link
							to="/login"
							className="text-gray-700 font-medium mr-4 max-sm:text-sm">
							Login
						</Link>
						<Link
							to="/register"
							className="text-white max-sm:text-sm bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</Link>
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
				className={
					wantSearch
						? " m-auto  flex-grow text-center  md:hidden "
						: "m-auto flex-grow text-center hidden"
				}>
				<input
					type="text"
					placeholder="Search"
					className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>

			<section className="md:hidden fixed m-auto bottom-3 z-30 left-2/4 -translate-x-1/2 ">
				<NavLink
					end
					to={"/"}
					title="home"
					htmlFor="home"
					className="label flex flex-col items-center cursor-pointer">
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
					className="label flex flex-col items-center cursor-pointer">
					<input id="cart" name="page" type="radio" />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M495.9 166.6L447.7 54.4C441.6 39.4 427.6 32 412 32H164C148.4 32 134.4 39.4 128.3 54.4L80.1 166.6C57.2 171.2 40 190.6 40 213.6V408c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-24h384v24c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V213.6c0-23-17.2-42.4-40.1-47zm-55.9 94H135.9c-12.3 0-21.9-10.4-19.9-22.6l15.9-95.4c2-12.2 12.5-20.6 24.9-20.6h295.4c12.4 0 22.9 8.4 24.9 20.6l15.9 95.4c2 12.2-7.6 22.6-19.9 22.6zM328 128h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-72 96h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16zm-72 96h208c8.8 0 16-7.2 16-16s-7.2-16-16-16H184c-8.8 0-16 7.2-16 16s7.2 16 16 16zm-80-64h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16zm416 128h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-64-64h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
					</svg>

					<p className="text-neutral-500 text-xs pt-1">Shop</p>
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
					<p className="text-neutral-500 text-xs pt-1">Cart</p>
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
					<p className="text-neutral-500 text-xs pt-1 ">Search</p>
				</label>
			</section>
		</>
	);
}
