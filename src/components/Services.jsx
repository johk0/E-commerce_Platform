import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBookOpenReader,faBook,faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
export default function Services(){
    return(
        <div className="grapper text-center pt-11 max-sm:px-6">
            <div className="text">
                <h4 className="text-neutral-500 font-semibold pb-2">Featured Products</h4>
                <h2 className="font-semibold text-xl">THE BEST SERVICES</h2>
                <p className="text-neutral-500 ">Problems trying to resolve the conflict between </p>
            </div>
            <div className="cards pt-12 grid gap-y-9 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] w-full">
                <div className="card">
                <FontAwesomeIcon icon={faBookOpenReader} className="text-sky-500 text-6xl pb-5" />
                <h2 className="font-bold text-2xl pb-3">Easy Wins</h2>
                <p className="text-neutral-500 font-semibold w-4/6 m-auto">Get your best looking smile now!</p>
                </div>
                <div className="card">
                <FontAwesomeIcon icon={faBook} className="text-sky-500 text-6xl pb-5" />
                <h2 className="font-bold text-2xl pb-3">Concrete</h2>
                <p className="text-neutral-500 font-semibold w-5/6 m-auto">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className="card">
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-sky-500 text-6xl pb-5" />
                <h2 className="font-bold text-2xl pb-3">Hack Growth </h2>
                <p className="text-neutral-500 font-semibold w-4/6 m-auto">Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
    )
}