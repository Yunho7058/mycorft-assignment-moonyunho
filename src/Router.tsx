import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Header from './components/Header'
import Signup from './page/Signup'
import MyOrder from './page/MyOrder'
import MyOrderDetail from './page/MyOrderDetail'
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/mypage/order" element={<MyOrder />} />
        <Route path="/mypage/order/:id" element={<MyOrderDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
