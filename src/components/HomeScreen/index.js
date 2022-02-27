import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './Header'
import LogoBanner from './LogoBanner'
import SearchBar from './SearchBar'
import ProductCards from './ProductCards'
import { useState } from 'react'
import LoggedInHeader from './LoggedInHeader'

// import './App.css';

const HomeMain = () => {

  const [user, setUser] = useState({})
  const parsedInfo = JSON.parse(localStorage.getItem('userInfo'))
  
  return (
    <>
    {parsedInfo ?  <LoggedInHeader /> : <Header/>}
    <LogoBanner/>
    <SearchBar/>
    <ProductCards/>
    </>
  )
}

export default HomeMain
