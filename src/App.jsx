import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/collections' element={<Collections />}/>
        <Route path='/product/:productId' element={<ProductDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/place-order' element={<PlaceOrder />}/>
        <Route path='/orders' element={<Orders />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
