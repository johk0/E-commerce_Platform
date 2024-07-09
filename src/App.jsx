import Nav from './components/Nav.jsx';
import Row from '../src/components/row.jsx';
import Landing from './components/Landing.jsx';
import Companies from './components/Companies.jsx';
import Explore from './components/Explore.jsx';
import Products from './components/Products.jsx';
import Featured from './components/Featured.jsx';
import Services from './components/Services.jsx';
import Posts from './components/Posts.jsx';
import Footer from './components/Footer.jsx';
import { Contxt } from './store/Context.jsx';
import { useContext } from 'react';
import Product from './components/Product.jsx';

function App() {
const Context=useContext(Contxt);

    return(
 <>
{Context.product?<Product/>:<>
  <Row />
<Nav/>
<Landing/>
<Companies/>
<Explore />
<Products />
<Featured />
<Services/>
<Posts />
<Footer/>
</>
}
</>
    )
}

export default App;
