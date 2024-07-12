
import blueHeadphones from '../assets/blueHeadphones.png'
import { NavLink } from 'react-router-dom';
const Headphone=()=>{
    return(
     <div className="grapper md:flex md:items-center md:h-[700px]">
           <section className="relative w-full md:h-1/2 h-auto bg-sky-500 p-6 flex flex-col md:flex-row justify-around items-center rounded-lg">
      <div className="text-center md:text-left mb-4 md:mb-0 pr-12">
        <p className="text-white text-4xl font-bold">40% OFF</p>
        <p className="text-white text-6xl font-extrabold">Sales</p>
      </div>
      <div className="relative my-4 md:my-0 bottom-0">
        <img src={blueHeadphones} alt="Headphones" className="w-full h-auto max-w-[377px]" />
        
      </div>
      <div className="max-md:text-center md:text-left md:pl-4">
        <p className="text-white text-4xl font-medium">Beats Solo Air</p>
        <p className="text-white text-6xl font-bold">Summer Sale</p>
        <button className="mt-4 bg-white text-sky-500 font-semibold py-2 px-4 rounded text-lg">
        <NavLink
					to={"/shop"}
					title="cart"
					htmlFor="cart"
					className="label flex flex-col items-center cursor-pointer p-0">Shop Now</NavLink>
        </button>
      </div>
    </section>
     </div>
    )
}
export default Headphone;