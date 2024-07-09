import { useContext, useState } from 'react'
import img1 from '../assets/product-cover-5 (1).png'
import img2 from '../assets/product-cover-5 (2).png'
import img3 from '../assets/product-cover-5 (3).png'
import img4 from '../assets/product-cover-5.png'
import { Contxt } from '../store/Context'
export default function Products(){
  const Context=useContext(Contxt)
    const[Load,setLoad]=useState(false);
    function handleLoad(){
        setLoad((prev)=>!prev);
    }
    return(
        <div className="grapper flex flex-col items-center">
            <h2 className='text-xl text-gray-500 py-2'>Featured Products</h2>
            <h1 className='font-bold text-2xl py-2'>BESTSELLER PRODUCTS</h1>
            <p className='text-gray-500 pt-2 pb-8'>Problems trying to resolve the conflict between</p>
            <div className="products pb-7 grid  place-items-center gap-y-6 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] w-full">
             <div className="product text-center max-w-fit">
                <div className="image " >
                  <img src={img1} alt="product image" onClick={Context.HandleProduct}/>           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design fdfafdf</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img2} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img3} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img4} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img2} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img3} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img1} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img2} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img4} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className="product text-center max-w-fit">
                <div className="image">
                  <img src={img3} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
       
        
         
             
             <div className={Load?"product text-center max-w-fit":"product text-center max-w-fit hidden"}>
                <div className="image">
                  <img src={img2} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className={Load?"product text-center max-w-fit":"product text-center max-w-fit hidden"}>
                <div className="image">
                  <img src={img1} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className={Load?"product text-center max-w-fit":"product text-center max-w-fit hidden"}>
                <div className="image">
                  <img src={img3} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className={Load?"product text-center max-w-fit":"product text-center max-w-fit hidden"}>
                <div className="image">
                  <img src={img2} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             <div className={Load?"product text-center max-w-fit":"product text-center max-w-fit hidden"}>
                <div className="image">
                  <img src={img4} alt="product image" />           
                </div>
                <h4 className='pb-1 pt-2 font-bold'>Graphic Design</h4>
                <h3 className='pb-1 text-gray-700'>English Department</h3>
                <p><span className='pr-1 text-gray-400'>$16.48</span><span className='pl-1 text-green-700'>$6.48</span></p>
            </div>
             
            </div>
            <button onClick={handleLoad} className='text-sky-500 border-2 border-sky-500 py-2 px-4 font-bold'>{Load?"Show Less":"Show More"}</button>
        </div>
    )
}