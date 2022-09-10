import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Global/Button'
import * as G from '../components/Global/GlobalStyle'
import { setLogin } from '../redux/slice/login'
import { AppDispatch } from '../redux/store'

const Box = styled(G.Box)`
  row-gap: 30px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    align-items: center;
  }
`
const Input = styled.input``

// 회원가입 컴포넌트 만들기 또는 버튼으로 구현

const Login = () => {
  const [userInfo, setUserInfo] = useState({ id: '', password: '' })
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const handleInput = (key: string) => (e: { target: HTMLInputElement }) => {
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }
  const handleLoginClick = async () => {
    if (userInfo.id && userInfo.password) {
      try {
        const data = await axios.post(
          'https://mycroft-test-api.herokuapp.com/login',
          userInfo,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        navigate('/')
        dispatch(setLogin(data.data.token))
      } catch (error: Error | AxiosError | any) {
        if (error.response.status === 401) {
          alert('아이디 및 비밀번호 확인해주세요')
        }
      }
    }
  }
  const handleInputEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' && handleLoginClick()
  }

  return (
    <G.Back>
      <Box>
        <h1>환영합니다. 👋</h1>
        <div>
          <Input
            type="text"
            defaultValue={userInfo.id}
            onChange={handleInput('id')}
            onKeyDown={handleInputEnter}
            placeholder="이메일"
          />
          <Input
            type="password"
            defaultValue={userInfo.password}
            onChange={handleInput('password')}
            onKeyDown={handleInputEnter}
            placeholder="비밀번호"
          />
        </div>
        <Button name={'로그인'} handle={handleLoginClick}></Button>
      </Box>
    </G.Back>
  )
}

export default Login
