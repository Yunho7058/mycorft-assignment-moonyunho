import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '../components/Global/Button'
import { Back } from '../components/Global/GlobalStyle'
import { loginAPI } from '../redux/slice/login'
import { AppDispatch } from '../redux/store'

const Box = styled.section`
  width: 50%;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    align-items: center;
  }
`
const Input = styled.input`
  outline: none;
  width: 46%;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
`
// 회원가입 컴포넌트 만들기 또는 버튼으로 구현

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' })
  const dispatch: AppDispatch = useDispatch()
  const handleInput = (key: string) => (e: { target: HTMLInputElement }) => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
    console.log(e.target.value)
  }
  const handleLoginClick = () => {
    if (userInfo.id && userInfo.password) {
      dispatch(loginAPI(userInfo))
    }
    console.log('하이')
  }
  const handleInputEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' && handleLoginClick()
  }
  console.log(userInfo)
  return (
    <Back>
      <Box>
        <div>
          <Input
            type="text"
            defaultValue={userInfo.id}
            onChange={handleInput('id')}
            onKeyDown={handleInputEnter}
          />
          <Input
            type="password"
            defaultValue={userInfo.password}
            onChange={handleInput('password')}
            onKeyDown={handleInputEnter}
          />
        </div>
        <Button name={'로그인'} handle={handleLoginClick}></Button>
      </Box>
    </Back>
  )
}

export default Login
