import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import Control from './Control'
import Likes from '../pages/Likes'
import ProductDetail from '../pages/ProductDetail'
import Search from '../pages/Search'
import Users from '../pages/Users'
import { Provider } from 'react-redux'
import { reduxStore } from '../useRedux/reduxStore'

const AppRoutes = () =>
<Provider store={reduxStore}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={  <Register /> } />
            <Route path='/products' element={ <Control item={ <Products /> } /> } />
            <Route path='/likes' element={ <Control item={ <Likes /> } /> } />
            <Route path='/productDetail/:pid' element={ <Control item={ <ProductDetail /> } /> } />
            <Route path='/search' element={ <Control item={ <Search /> } /> } />
            <Route path='/users' element={ <Control item={ <Users /> } /> } />
        </Routes>
    </BrowserRouter>
</Provider>

export default AppRoutes