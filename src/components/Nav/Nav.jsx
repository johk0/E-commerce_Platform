import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faShoppingCart,
	faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
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
			<header className="bg-white py-4 shadow-md px-5 max-md:hidden">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<a
							href="/"
							className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span>Candleleaf</span>
						</a>
					</div>
					<form className="ml-8 flex-grow text-center">
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
					<div className="flex items-center">
						<a href="/login" className="text-gray-700 font-medium mr-4">
							Login
						</a>
						<a
							href="/register"
							className="text-white bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</a>
						<div className="ml-4">
							<a href="/cart" className="mr-4">
								<FontAwesomeIcon
									icon={faShoppingCart}
									className="text-gray-700"
								/>
							</a>
							<a href="/profile">
								<FontAwesomeIcon icon={faUser} className="text-gray-700" />
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* mobile nav bar */}
            


            <header className="bg-white py-4 shadow-md px-5 md:hidden mb-5">
				<div className="container mx-auto flex justify-between items-center">
					<div className="flex items-center">
						<a
							href="/"
							className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span className="max-sm:text-sm">Candleleaf</span>
						</a>
					</div>
				
					<div className="flex items-center">
						<a href="/login" className="text-gray-700 font-medium mr-4 max-sm:text-sm">
							Login
						</a>
						<a
							href="/register"
							className="text-white max-sm:text-sm bg-blue-500 px-4 py-2 rounded-md font-medium">
							Register
						</a>
						<div className="ml-4">
							<a href="/cart" className="mr-4">
								<FontAwesomeIcon
									icon={faShoppingCart}
									className="text-gray-700"
								/>
							</a>
							<a href="/profile">
								<FontAwesomeIcon icon={faUser} className="text-gray-700" />
							</a>
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
				<label title="home" htmlFor="home" className="label flex flex-col items-center active cursor-pointer">
					<NavLink to={"/"} id="home" name="page" type="radio"/>
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
				</label>
				<label title="cart" htmlFor="cart" className="label flex flex-col items-center cursor-pointer">
					<NavLink to={"/cart"} id="cart" name="page" type="radio" />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
					</svg>
					<p className="text-neutral-500 text-xs pt-1">Products</p>
				</label>
				<label title="favorite" htmlFor="favorite" className="label flex flex-col items-center cursor-pointer">
					<NavLink to={"/bag"} id="favorite" name="page" type="radio" />
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
						<path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
					</svg>
					<p className="text-neutral-500 text-xs pt-1">Cart</p>
				</label>
				<label title="notifications" htmlFor="notifications" className={wantSearch?"label flex flex-col items-center active cursor-pointer":"cursor-pointer label flex flex-col items-center "}>
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
