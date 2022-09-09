import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  }
`

const Header = () => {
  const navigate = useNavigate()
  const handlePageMove = (url: string) => {
    navigate(url)
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
            홈
          </li>
          <li>회원가입</li>
          <li
            onClick={() => {
              handlePageMove('/login')
            }}>
            로그인
          </li>
        </ul>
      </NavBox>
    </Back>
  )
}

export default Header
