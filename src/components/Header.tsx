import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setLogout } from '../redux/slice/login'
import { RootState } from '../redux/store'

const Back = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding: 15px;
`
const NavBox = styled.nav`
  padding: 15px;
  ul {
    list-style: none;
  }
  li {
    cursor: pointer;
    float: left;
    margin-right: 12px;
    font-size: 18px;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Header = () => {
  const loginState = useSelector((state: RootState) => state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handlePageMove = (url: string) => {
    navigate(url)
  }
  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/')
  }
  return (
    <Back>
      <Logo src={require('../assets/images/logo.png')} />
      <NavBox>
        <ul>
          <li
            onClick={() => {
              handlePageMove('/')
            }}>
            서비스
          </li>
          {loginState.isLogin ? (
            <>
              <li
                onClick={() => {
                  handlePageMove('/mypage/order')
                }}>
                마이페이지
              </li>
              <li onClick={handleLogout}>로그아웃</li>
            </>
          ) : (
            <>
              <li
                onClick={() => {
                  handlePageMove('/sign-up')
                }}>
                회원가입
              </li>
              <li
                onClick={() => {
                  handlePageMove('/login')
                }}>
                로그인
              </li>
            </>
          )}
        </ul>
      </NavBox>
    </Back>
  )
}

export default Header
