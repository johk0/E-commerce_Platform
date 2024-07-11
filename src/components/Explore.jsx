import img1 from "../assets/jade-aucamp-Kj6LgGceZ4M-unsplash.jpg";
import img2 from "../assets/sirio-7_ZNLVlJchs-unsplash.jpg";
import img3 from "../assets/rayul-_M6gy9oHgII-unsplash.jpg";
import { NavLink } from "react-router-dom";
export default function Explore() {
  return (
    <div className="grapper ">
      <div className="explore-container flex justify-between gap-3 h-96 overflow-hidden m-auto max-md:flex-col max-md:h- max-md:overflow-visible ">
        <div className="one w-1/2 relative max-md:w-full max-md:h-1/2">
          <img
            src={img1}
            alt=""
            className="max-h-full object-cover w-full absolute z-0"
          />
          <div className="explore absolute z-10 bottom-0 py-5 px-7 max-sm:py-3">
            <h2 className="py-4 font-bold text-xl text-white max-sm:py-3">
              Product Of The Week
            </h2>
            <button className="py-3 text-white border-white border-2 px-4 max-sm:py-2 exploreButton">
              {" "}
              <NavLink
                to={"/shop"}
                title="cart"
                htmlFor="cart"
                className="label flex flex-col items-center cursor-pointer p-0"
              >
                Explore More
              </NavLink>
            </button>
          </div>
        </div>
        <div className="two flex flex-col w-1/2 gap-y-2 max-md:w-full max-md:h-1/2">
          <div className="first h-1/2 relative">
            <img src={img2} alt="" className="w-full max-h-full object-cover" />
            <div className="explore absolute z-10 bottom-0 py-3 px-7 ">
              <h2 className="py-3 font-bold text-xl text-white">
                Product Of The Week
              </h2>
              <button className="py-3 text-white border-white border-2 px-4 exploreButton">
                <NavLink
                  to={"/shop"}
                  title="cart"
                  htmlFor="cart"
                  className="label flex flex-col items-center cursor-pointer p-0"
                >
                  Explore More
                </NavLink>
              </button>
            </div>
          </div>
          <div className="second h-1/2 relative">
            <img
              src={img3}
              alt=""
              className=" w-full max-h-full object-cover"
            />
            <div className="explore absolute z-10 bottom-0 py-4 px-7 ">
              <h2 className="py-4 font-bold text-xl text-white">
                Product Of The Week
              </h2>
              <button className="py-3 text-white border-white border-2 px-4 exploreButton">
                {" "}
                <NavLink
                  to={"/shop"}
                  title="cart"
                  htmlFor="cart"
                  className="label flex flex-col items-center cursor-pointer p-0"
                >
                  Explore More
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
