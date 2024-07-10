import land_img from '../assets/midas-hofstra-tidSLv-UaNs-unsplash-removebg-preview.png'
export default function Landing() {
  return (
    <div className="landing pt-5 pr-7 pl-7 max-md:flex-col max-sm:pr-4 max-sm:pl-4">
      <div className="container flex justify-center m-auto min-w-full max-md:flex-col max-md:text-center py-7 pl-3 bg-gradient-to-r rounded-3xl  from-cyan-300 to-white items-center">
        <div className="landing-text flex flex-col  gap-y-8 pl-4 items-start max-md:items-center">
          <h5 className='text-blue-700 font-semibold  '>SUMMER 2024</h5>
          <h1 className='font-bold text-5xl max-sm:text-4xl'>NEW COLLECTION</h1>
          <p className='flex flex-col text-gray-800'><span>We know how large objects will act,</span><span>but things on a small scale.</span></p>
          <button className='text-white bg-sky-500 py-3 px-6 text-xl rounded-sm'>SHOP NOW</button>
        </div>
        <div className="landing_img w-1/2 relative z-10 -bottom-7 max-sm:w-3/4">
<img src={land_img} alt="person" className='w-full z-10' loading='lazy'/>
        </div>
      </div>
    </div>
  );
}
