import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ReviewMain from '../components/ReviewScreen/ReviewMain'
import HomeMain from '../components/HomeScreen'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import RegisterScreen from '../components/LoginScreen/RegisterScreen'
import Welcome from '../pages/Welcome'
import SingleProductPage from '../pages/SingleProductPage'
import AllProducts from '../components/ProductScreens/ProductByCategory'
import MyProfile from '../pages/MyProfile'
import MyOrderDetails from '../components/MyProfileScreen/MyOrderDetails'
import ProductByCategory from '../components/ProductScreens/ProductByCategory'
import ViewAllProducts from '../components/ProductScreens/ViewAllProducts'


const RoutesContainer = () => {

let isLogged = false
const userInfo = localStorage.getItem("userInfo")
if(userInfo) {
  isLogged = true
}

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeMain/>} />
    <Route path="/product/:id" element={<SingleProductPage/>} />
    <Route path="/add-review/:id" element={<ReviewMain />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<RegisterScreen />} />
    <Route path="/welcome" element={<Welcome />} />
    <Route path="/all-products"  element={<AllProducts/>} />
    <Route path="/profile/:id"  element={isLogged ? <MyProfile/> : <Navigate to='/login'/>} />
    <Route path="/my-orders/:orderid"  element={<MyOrderDetails/>} />
    <Route path="/category/:cat_name"  element={<ProductByCategory/>} />
    <Route path="/products/all"  element={<ViewAllProducts />} />
    <Route path='*' element={<h1>404</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesContainer
