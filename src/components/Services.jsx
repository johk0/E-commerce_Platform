import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpenReader,
	faBook,
	faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
export default function Services() {
	return (
		<div className="grapper text-center pt-11 max-sm:px-6 mb-5">
			<div className="text">
				<h2 className="font-semibold text-2xl pb-2">Why Us?</h2>
				<p className="text-neutral-500 ">
					Problems trying to resolve the conflict between{" "}
				</p>
			</div>
			<div className="cards pt-12 flex justify-around gap-y-9 flex-wrap w-full">
				<div className="card md:max-w-[33%]">
					<FontAwesomeIcon
						icon={faBookOpenReader}
						className="text-sky-500 text-6xl pb-5"
					/>
					<h2 className="font-bold text-2xl pb-3">Easy buying</h2>
					<p className="text-neutral-500 font-semibold w-4/6 m-auto">
						Enjoy quick and effortless purchases with our intuitive interface.
					</p>
				</div>
				<div className="card md:max-w-[33%]">
					<FontAwesomeIcon
						icon={faBook}
						className="text-sky-500 text-6xl pb-5"
					/>
					<h2 className="font-bold text-2xl pb-3">Real-Time Order Tracking</h2>
					<p className="text-neutral-500 font-semibold w-5/6 m-auto">
						Track your orders status from processing to delivery in real-time.
					</p>
				</div>
				<div className="card md:max-w-[33%]">
					<FontAwesomeIcon
						icon={faArrowTrendUp}
						className="text-sky-500 text-6xl pb-5"
					/>
					<h2 className="font-bold text-2xl pb-3">Secure Payments</h2>
					<p className="text-neutral-500 font-semibold w-4/6 m-auto">
						Benefit from top-tier security measures protecting all your payment
						information
					</p>
				</div>
			</div>
		</div>
	);
}
