import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faLeaf,
	faMapMarkerAlt,
	faEnvelope,
	faPhone,
	faFax,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<div className="flex justify-between  bg-white items-center py-6 sm:px-14 px-12 align-middle">
				<div className="flex items-center">
					<a
						href="/"
						className="text-2xl font-bold text-sky-500 flex items-center">
						{/* <FontAwesomeIcon icon={faLeaf} className="mr-2" /> */}
						<span>
							{" "}
							<span>Easy</span>
							<span className="pl-[6px] text-black">Shop</span>
						</span>
					</a>
				</div>
				<div className="social w-fit text-end text-sky-500">
					<p>
						Follow Us:
						<span>
							<a href="https://www.facebook.com/" className="pl-2 pr-1">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="https://www.instagram.com/" className="pl-2 pr-1">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="https://www.youtube.com/" className="pl-2 pr-1">
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</span>
					</p>
				</div>
			</div>
			<footer className="max-sm:pb-24 px-14 py-14 flex gap-x-40 max-lg:flex-col gap-y-9 justify-center max-md:gap-x-2 max-lg:gap-x-10 max-xl:gap-x-20 flex-wrap items-center max-lg:justify-normal  sm:items-start ">
				<div className="text w-1/5 max-lg:w-full">
					<div className=" max-sm:text-center  max-md::w-full">
						<h2 className="font-bold pb-2 text-2xl">
							<span className="text-sky-500">Easy</span> Shop
						</h2>
						<p className="text-neutral-500 ">
							offers a convenient and dynamic platform for consumers to purchase
							a wide range of products from the comfort of their homes.
							Leveraging the countrys increasing internet penetration and
							growing tech-savvy population
						</p>
					</div>
				</div>

				<div className="AllLinks max-lg:w-full justify-around flex-grow flex m-auto max-sm:flex-wrap ">
					<ul className="px-4 text-sm max-sm:m-auto max-sm:pl-0 m-auto max-sm:pb-3 max-md:mt-0  w-1/2">
						<li className="font-bold pb-3 text-lg text-sky-500 ">Products</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<Link to={`/shop/${-1}`}>All Products</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							{" "}
							<Link to={`/shop/${0}`}>Toys & Games</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							{" "}
							<Link to={`/shop/${1}`}>Sports Gear</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							{" "}
							<Link to={`/shop/${2}`}>devices</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							{" "}
							<Link to={`/shop/${3}`}>Clothes</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							{" "}
							<Link to={`/shop/${4}`}>furniture</Link>
						</li>
					</ul>
					<ul className="px-4 text-sm max-sm:m-auto max-sm:pl-0 m-auto mt-1 max-sm:pb-3  max-sm:mt-0 w-1/2">
						<li className="font-bold pb-3 text-lg text-sky-500">Links</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<Link to={`/`}>Home</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<Link to={`Shop`}>Shop</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<Link to={`/cart`}>Cart</Link>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<Link to={`/profile`}>Profile</Link>
						</li>
					</ul>
					<ul className="px-4 text-sm max-sm:m-auto max-sm:pl-0 m-auto mt-1 max-sm:mt-0 max-sm:ml-0 max-sm:pt-3">
						<li className="font-bold pb-3 text-lg text-sky-500">Contact</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<FontAwesomeIcon icon={faMapMarkerAlt} />
							<span className="pl-3">Giza, smart city, Egypt</span>
						</li>
						<li className="text-neutral-500 font-semibold pb-2 max-sm:flex">
							<FontAwesomeIcon icon={faEnvelope} />
							<span className="pl-3 max-sm:block max-sm:text-xs">
								Tech-it-easy@gmail.com
							</span>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<FontAwesomeIcon icon={faPhone} />
							<span className="pl-3">+ 01 234 567 88</span>
						</li>
						<li className="text-neutral-500 font-semibold pb-2">
							<FontAwesomeIcon icon={faFax} />
							<span className="pl-3">+ 01 234 567 89</span>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
