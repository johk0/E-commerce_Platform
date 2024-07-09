
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser,faMagnifyingGlass,faCartShopping,faHeart} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
export default function Nav(){
    const [clicked,setclick]=useState("");
    function handleClickedButton(){
        setclick(()=>{
            if(clicked=="")return "click"
            else{
                return ""
            }
        })
    }
return(
    //nav on big screen
    <>
    <nav className="pl-3 pr-3 flex pt-3 max-md:hidden">
        <h1 className="pr-4 font-bold text-2xl pb-1">Bandage</h1>
        <ul className="flex justify-between grow pl-8 pr-6 ">
            <li className="  flex items-center pl-4" >
                <a href="" className="pl-2 pr-1 text-stone-600">Home</a>
                <a href="" className="pl-1 pr-1  text-stone-600">Product</a>
                <a href="" className="pl-1 pr-1  text-stone-600">Pricing</a>
                <a href="" className="pl-1 pr-1  text-stone-600">Contact</a>
            </li>
            <li className="flex justify-around items-center">
                <p className="pr-5">
                <FontAwesomeIcon icon={faUser}  className="text-blue-400"/>
                    <a href="" className="pl-2 font-bold text-blue-400">Login / Register</a>
                </p>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-5 text-blue-400"/>
                <p className="pr-5">
                <FontAwesomeIcon className="text-blue-400 pr-1"icon={faCartShopping} />
                <span className="text-blue-400 ">0</span>
                </p>
                <p>
                <FontAwesomeIcon icon={faHeart} className="text-blue-400 pr-1" />
                <span className="text-blue-400">0</span>
                </p>

            </li>
        </ul>
    </nav>
    
    
    <nav className="md:hidden flex justify-between pt-3 pl-3 pr-3 relative" >
    <h1 className="pr-4 font-bold text-2xl pb-1">Bandage</h1>
    <ul className="flex justify-around items-center gap-2">
    <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-2 cursor-pointer"/>
    <FontAwesomeIcon className="cursor-pointer pr-2"icon={faCartShopping} />
    <FontAwesomeIcon className="cursor-pointer pr-2"icon={faHeart} />
    <div className={clicked=="click"?"burger click":"burger"} onClick={handleClickedButton}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </ul>
    </nav>
    <ul className={clicked=="click"?"text-center  nav-ul -translate-y-0 w-full clicked":"text-center nav-ul  md:hidden invisible h-0 -translate-y-60 w-full"}>
        <li className="pt-3 pb-7 font-bold text-gray-600 hover:pl-3  li-small w-full"><a href="">Home</a></li>
        <li className="pt-1 pb-7 font-bold  text-gray-600  hover:pl-3 li-small w-full"><a href="">Products</a></li>
        <li className="pt-1 pb-7 font-bold  text-gray-600  hover:pl-3 li-small w-full" ><a href="">Pricing</a></li>
        <li className="pt-1 pb-7 font-bold  text-gray-600  hover:pl-3 li-small w-full"><a href="">Contact</a></li>
    </ul>
    </>
)
}
 