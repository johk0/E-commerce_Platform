import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {
	faLeaf,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer(){
    return(
        <>
        <div className="flex justify-between bg-neutral-200 items-center py-2 px-4">
        <div className="flex items-center">
						<a
							href="/"
							className="text-2xl font-bold text-blue-500 flex items-center">
							<FontAwesomeIcon icon={faLeaf} className="mr-2" />
							<span>Candleleaf</span>
						</a>
					</div>
        <div className="social w-fit text-end text-sky-500">
                <p>Follow Us:
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
        <footer className="px-14 py-14 flex gap-x-3 gap-y-9 justify-between flex-wrap items-center  lg:items-start max-sm::flex max-sm:flex-col">
           <ul className="px-4 text-sm max-sm:m-auto max-sm:pl-9">
            <li className="font-bold pb-3 text-lg text-slate-800">Company info</li>
            <li className="text-neutral-500 font-semibold pb-2">About Us</li>
            <li className="text-neutral-500 font-semibold pb-2">Career</li>
            <li className="text-neutral-500 font-semibold pb-2">We Are Hiring</li>
            <li className="text-neutral-500 font-semibold pb-2">Blog</li>
           </ul>
           <ul className="px-4 text-sm max-sm:m-auto">
            <li className="font-bold pb-3 text-lg text-slate-800">Legal</li>
            <li className="text-neutral-500 font-semibold pb-2">About Us</li>
            <li className="text-neutral-500 font-semibold pb-2">Career</li>
            <li className="text-neutral-500 font-semibold pb-2">We Are Hiring</li>
            <li className="text-neutral-500 font-semibold pb-2">Blog</li>
           </ul>
           <ul className="px-4 text-sm max-sm:m-auto">
            <li className="font-bold pb-3 text-lg text-slate-800">Resources</li>
            <li className="text-neutral-500 font-semibold pb-2">IOS & Android</li>
            <li className="text-neutral-500 font-semibold pb-2">Watch a Demo</li>
            <li className="text-neutral-500 font-semibold pb-2">Customers</li>
            <li className="text-neutral-500 font-semibold pb-2">API</li>
           </ul>
           <ul className="px-4 text-sm max-sm:m-auto max-sm:pl-9">
            <li className="font-bold pb-3 text-lg text-slate-800">Features</li>
            <li className="text-neutral-500 font-semibold pb-2">Business Marketing</li>
            <li className="text-neutral-500 font-semibold pb-2">User Analytic</li>
            <li className="text-neutral-500 font-semibold pb-2">Live Chat</li>
            <li className="text-neutral-500 font-semibold pb-2">Unlimited Support</li>
           </ul>
           <ul className=" max-sm:m-auto ">
            <li className="font-bold pb-3 text-lg text-slate-800">Get In Touch</li>
            <li className="flex border-2 border-neutral-100 rounded" >
                <input type="email" placeholder="Enter Your Email" className="px-4 py-3 focus:outline-none max-sm:py-2 max-sm:px-3 max-sm:w-36 footerEmail"/>
                <input type="submit" value="Subscribe" className="bg-sky-500 px-4 py-3 text-white font-bold max-sm:py-2 max-sm:px-3"/>
                </li>
           </ul>
        </footer>
        </>
    )
}