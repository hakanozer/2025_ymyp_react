import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import Control from './Control'
import Likes from '../pages/Likes'
import ProductDetail from '../pages/ProductDetail'

const AppRoutes = () => 
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={  <Register /> } />
        <Route path='/products' element={ <Control item={ <Products /> } /> } />
        <Route path='/likes' element={ <Control item={ <Likes /> } /> } />
        <Route path='/productDetail/:pid' element={ <Control item={ <ProductDetail /> } /> } />
    </Routes>
</BrowserRouter>


export default AppRoutes