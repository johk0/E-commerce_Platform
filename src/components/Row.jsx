import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function Row(){
    return(
        <div className="row text-white flex justify-between pl-4  bg-slate-800 text-center pt-4 pb-4 max-lg:hidden max-w-screen-2xl ">
            <div className="contact-info flex justify-around w-1/3">
                <p>
                <FontAwesomeIcon icon={faPhone} />
                    <span className="pl-2 text-sm" >(225) 555-0118</span>
                
                </p>
                <p> 
                <FontAwesomeIcon icon={faEnvelope} className="pl-2" />
                <span className="pl-2 text-sm">michelle.rivera@example.com</span>
                </p>
            </div>
            <div className="text w-1/3">
                <p className="text-sm">Follow Us and get a chance to win 80% off</p>
            </div>
            <div className="social w-1/3 text-end pr-3">
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
    )
}