import Row from '/src/components/Row.jsx'
import Nav from '/src/components/Nav.jsx'
import Landing from '/src/components/Landing.jsx'
import Companies from '/src/components/Companies.jsx'
import Explore from '/src/components/Explore.jsx'
import Products from '/src/components/Products.jsx'
import Featured from '/src/components/Featured.jsx'
import Services from '/src/components/Services.jsx'
import Posts from '/src/components/Posts.jsx'
import Footer from '/src/components/Footer.jsx'
import Categories from '../../components/categories'
import './home.css'
const Home = () => {
	return (
		<>
		
<Row />
<Nav/>
<Landing/>
<Companies/>
<Categories/>
<Explore />
<Products />
<Featured />
<Services/>
<Posts />
<Footer/>
		</>
	);
};

export default Home;
