import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Contxt } from "../store/Context";

export default function Products() {
	const productsData = useSelector((state) => state.getProducts.items);
	console.log(productsData, "here");

	const Context = useContext(Contxt);
	const [load, setLoad] = useState(false);

	function handleLoad() {
		setLoad((prev) => !prev);
	}

	return (
		<div className="grapper flex flex-col items-center bg-slate-100 pt-5 max-sm:px-2">
			<h2 className="text-xl text-gray-500 py-2">Featured Products</h2>
			<h1 className="font-bold text-2xl py-2">BESTSELLER PRODUCTS</h1>
			<p className="text-gray-500 pt-2 pb-8 max-sm:text-center">
				Problems trying to resolve the conflict between
			</p>
			<div className="products pb-7 grid place-items-center gap-y-6 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] 2xl:grid-cols-[repeat(4,_minmax(320px,_1fr))] w-full max-sm:px-2 max-w-[1500px]">
				{productsData &&
					productsData.map((item, index) => (
						<div
							key={index}
							className={`product text-center w-80 bg-white py-5 px-2 rounded-2xl ${
								index >= 4 && !load ? "hidden" : ""
							}`}>
							<div className="image w-11/12 m-auto h-1/2">
								<img
									src={
										(item.images && item.images[0].url) ||
										"https://via.placeholder.com/150"
									}
									alt={item.name || "Product image"}
									className="rounded-2xl w-full h-56 object-cover"
								/>
							</div>
							<div className="description flex py-4 px-5">
								<div className="text w-1/2 text-start">
									<p className="font-semibold pb-1 text-[15px]">
										{item.name || "Snickers Off-White"}
									</p>
									<p className="font-semibold pb-1">{item.year || "2024"}</p>
									<p className="text-neutral-500 pb-1">
										{item.brand || "NIKE"}
									</p>
									<p className="font-semibold">${item.price || "38.00"}</p>
								</div>
								<div className="add w-1/2 flex items-end justify-end">
									<button className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
										<Link to={`/product/${item.id}`}>View</Link>
									</button>
									<button
										onClick={() => Context.HandleAddToCart(item.id)}
										className="rounded-[50%] mb-1 bg-black ml-3 text-white w-7 h-7 text-center pb-1">
										{Context.Cart.includes(item.id) ? (
											<FontAwesomeIcon
												icon={faShoppingCart}
												className="text-white w-3 h-3"
											/>
										) : (
											"+"
										)}
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
			<button
				onClick={handleLoad}
				className="text-sky-500 border-2 border-sky-500 py-2 px-4 font-bold">
				{load ? "Show Less" : "Show More"}
			</button>
		</div>
	);
}
