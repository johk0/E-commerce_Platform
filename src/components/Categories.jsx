import img1 from "../assets/duck.png";
import img2 from "../assets/Сhildren.png";
import img3 from "../assets/blacklaptop.png";
import img4 from "../assets/clothesrack.png";
import img5 from "../assets/isometric.png";
import { Link } from "react-router-dom";
function Categories() {
	const images = [img1, img2, img3, img4, img5];
	const text = [
		"Toys & Games",
		"Sports Gear",
		"devices",
		"Clothes",
		"furniture",
	];
	return (
		<div className="categories mx-10 flex justify-around flex-wrap m-auto py-7 mb-6 rounded-xl bg-white">
			{images.map((item, index) => (
				<div key={index} className="flex flex-col items-center">
					<Link
						to={`/shop/${index}`}
						className="image w-24 m-3 p-2 h-24 rounded-[50%] bg-slate-100 flex justify-center items-center hover:scale-[1.3] [transition:all_0.6s] cursor-pointer">
						<img src={item} alt="" className="object-contain w-4/5 h-4/5" />
					</Link>
					<h3 className="pt-2 font-semibold">{text[index]}</h3>
				</div>
			))}
		</div>
	);
}

export default Categories;
