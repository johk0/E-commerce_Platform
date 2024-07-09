import img1 from '../assets/unsplash_75EFpyXu3Wg.png'
import img2 from '../assets/unsplash_ruJm3dBXCqw.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping,faHeart,faEye,faDownload,faBell,faChartSimple,faChartLine,faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default function Posts(){
    return(
        <div className="grapper flex flex-col items-center">
            <div className="head pb-8 text-center">
            <h4 className='text-sky-500 text-xl font-semibold pb-3'>Practice Advice</h4>
            <h1 className='text-4xl font-bold '>Featured Posts</h1>
            </div>
            <div className="cards flex justify-center max-lg:flex-col max-lg:gap-6 w-full items-center">
           
                <div className="card flex pl-2 max-lg:pl-0 max-sm:flex-col">
                    <div className="image relative w-1/3 max-sm:w-full max-h-[451px] max-sm:h-64 flex-grow">
                      <img src={img1} alt="img1" className='h-full w-full object-cover max-sm:w-full'/>
                      <p className='absolute top-2 left-2 py-1 px-2 text-white bg-red-500'>SALE</p>
                      <div className="image_links absolute  bottom-1 w-full text-center">
                      <FontAwesomeIcon icon={faHeart} className='px-2 bg-white py-2 rounded-[50%] mx-1'/>
                      <FontAwesomeIcon icon={faCartShopping} className='px-2 bg-white py-2 rounded-[50%] mx-1' />
                      <FontAwesomeIcon icon={faEye} className='px-2 bg-white py-2 rounded-[50%] mx-1'/>
                      </div>
                    </div>
                    <div className="text pt-6 pl-6 w-fit">
                        <h3 className='text-sky-500 font-bold pb-2'>English Department</h3>
                        <h2 className='font-bold text-xl pb-2'>Graphic Design</h2>
                        <p className='flex flex-col text-neutral-500 pb-2'>
                            <span>We focus on ergonomics and </span>
                            <span>meeting you where you work. It's </span>
                            <span>only a keystroke away.</span>
                        </p>
                        <p className='font-bold text-neutral-500 pb-4'><FontAwesomeIcon icon={faDownload} /> 15 Sales</p>
                        <p className='pb-3'><span className='pr-1 text-gray-400 '>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
                        <div className="colours h-5 flex gap-2">
                            <span className='w-5 h-5 rounded-[50%] bg-sky-500 block'> </span>
                            <span className='w-5 h-5 rounded-[50%] bg-teal-700 block'> </span>
                            <span className='w-5 h-5 rounded-[50%] bg-orange-400 block'> </span>
                        </div>
                        <div className="info pt-3 text-neutral-500 pb-5">
                            <span className='pr-2'><FontAwesomeIcon icon={faBell} className='text-sky-500'/> 22h...</span>
                            <span className='pr-2'><FontAwesomeIcon icon={faChartSimple} className='text-teal-700'/> 64 Lessons</span>
                            <span className='pr-2'><FontAwesomeIcon icon={faChartLine} className='text-orange-400'/> Progress</span>
                        </div>
                        <button className='text-sky-500 py-2 px-4 border-2 border-sky-500 rounded-[36px] font-bold'>Learn More <FontAwesomeIcon icon={faChevronRight} className='pl-2'/></button>
                    </div>
                </div>
           
                <div className="card flex pl-2 max-lg:pl-0 max-sm:flex-col">
                    <div className="image relative w-1/3 max-sm:w-full max-sm:h-64 max-h-[451px] flex-grow">
                      <img src={img2} alt="img1" className='h-full object-cover w-full'/>
                      <p className='absolute top-2 left-2 py-1 px-2 text-white bg-red-500'>SALE</p>
                      <div className="image_links absolute  bottom-1 w-full text-center">
                      <FontAwesomeIcon icon={faHeart} className='px-2 bg-white py-2 rounded-[50%] mx-1'/>
                      <FontAwesomeIcon icon={faCartShopping} className='px-2 bg-white py-2 rounded-[50%] mx-1' />
                      <FontAwesomeIcon icon={faEye} className='px-2 bg-white py-2 rounded-[50%] mx-1'/>
                      </div>
                    </div>
                    <div className="text pt-6 pl-6 w-fit ">
                        <h3 className='text-sky-500 font-bold pb-2'>English Department</h3>
                        <h2 className='font-bold text-xl pb-2'>Graphic Design</h2>
                        <p className='flex flex-col text-neutral-500 pb-2'>
                            <span>We focus on ergonomics and </span>
                            <span>meeting you where you work. It's </span>
                            <span>only a keystroke away.</span>
                        </p>
                        <p className='font-bold text-neutral-500 pb-4'><FontAwesomeIcon icon={faDownload} /> 15 Sales</p>
                        <p className='pb-3'><span className='pr-1 text-gray-400 '>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
                        <div className="colours h-5 flex gap-2">
                            <span className='w-5 h-5 rounded-[50%] bg-sky-500 block'> </span>
                            <span className='w-5 h-5 rounded-[50%] bg-teal-700 block'> </span>
                            <span className='w-5 h-5 rounded-[50%] bg-orange-400 block'> </span>
                        </div>
                        <div className="info pt-3 text-neutral-500 pb-5">
                            <span className='pr-2'><FontAwesomeIcon icon={faBell} className='text-sky-500'/> 22h...</span>
                            <span className='pr-2'><FontAwesomeIcon icon={faChartSimple} className='text-teal-700'/> 64 Lessons</span>
                            <span className='pr-2'><FontAwesomeIcon icon={faChartLine} className='text-orange-400'/> Progress</span>
                        </div>
                        <button className='text-sky-500 py-2 px-4 border-2 border-sky-500 rounded-[36px] font-bold'>Learn More <FontAwesomeIcon icon={faChevronRight} className='pl-2'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}