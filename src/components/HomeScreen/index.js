import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './Header'
import LogoBanner from './LogoBanner'
import SearchBar from './SearchBar'
import ProductCards from './ProductCards'
import LoggedInHeader from './LoggedInHeader'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from '../../stores/store'

const HomeMain = () => {

  const parsedInfo = JSON.parse(localStorage.getItem('userInfo'))

  return (
    <>
    <Provider store={store}>
    {parsedInfo ?  <LoggedInHeader /> : <Header/>}
    <LogoBanner/>
    <SearchBar/>
    <ProductCards/>
    </Provider>
    </>
  )
}

export default HomeMain
