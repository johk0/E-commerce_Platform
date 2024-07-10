import Row from '../components/row';
import Nav from './Nav';
import ProductDetails from './ProductDetails';
import Products from '../components/Products'
import Companies from '../components/Companies'
import Footer from '../components/Footer'
export default function Product(){
    window.scrollTo(0,0)
return(
    <>
<Row/>
<Nav/>
<ProductDetails/>
<Products/>
<Companies/>
<Footer/>
    </>
)
}