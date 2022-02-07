import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './Header'
import LogoBanner from './LogoBanner'
import SearchBar from './SearchBar'
import ProductCards from './ProductCards'
// import './App.css';

const HomeMain = () => {
  return (
    <>
    <Header/>
    <LogoBanner/>
    <SearchBar/>
    {/* <ProductCards/> */}
    </>
  );
}

export default HomeMain
