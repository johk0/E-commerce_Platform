import { Contxt } from "@/store/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/product-cover-5 (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const ProductCard=({item})=>{
    const Context=useContext(Contxt);
    return(
        <div className="product text-center w-80 bg-white py-5 px-2 rounded-2xl pb-0 m-auto">
          <div className="image w-11/12 m-auto h-1/2">
            <img
              src={item.image || img1} // Ensure item.image is used if available
              alt="product image"
            
              className="rounded-2xl w-full h-56 object-cover max-h-full"
            />
          </div>
          <div className="description flex py-4 px-5">
            <div className="text w-1/2 text-start">
              <p className="font-semibold pb-1 text-[15px]">{item.name || 'Snickers Off-White'}</p>
              <p className="font-semibold pb-1">{item.Year || '2024'}</p>
              <p className="text-neutral-500 pb-1">{item.Brand || 'NIKE'}</p>
              <p className="font-semibold ">${item.Price || '38.00'}</p>
            </div>
            <div className="add w-1/2 flex items-end justify-end">
              <button
                
                className="rounded-2xl bg-black opacity-0 text-white w-fit h-fit text-center p-2 px-3 text-sm">
             <Link to="/product" onClick={item.id}>Buy Now</Link>
              </button>
              <button
                onClick={() =>Context.HandleAddToCart(item.id)}
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
    )
}
export default ProductCard;