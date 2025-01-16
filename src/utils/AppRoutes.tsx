import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'

const AppRoutes = () => 
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={ <Register /> } />
        <Route path='/products' element={ <Products /> } />
    </Routes>
</BrowserRouter>


export default AppRoutes