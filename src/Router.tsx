import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Login from './page/Login'
import Header from './components/Header'
import Signup from './page/Signup'
import Mypage from './page/Mypage'
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/mypage/order" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
