import axios from 'axios'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Global/Button'
import * as G from '../components/Global/GlobalStyle'
import TypeList from '../components/Global/TypeList'
import { setLogin } from '../redux/slice/login'

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

const Input = styled.input`
  &.false {
    border: 1px solid red;
  }
`

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    mobile: '',
  })
  const [isEffectiveness, setIsEffectiveness] =
    useState<TypeList.Effectiveness>({
      email: '',
      password: '',
    })
  const handleInput = (key: string) => (e: { target: HTMLInputElement }) => {
    const { value } = e.target
    setUserInfo({ ...userInfo, [key]: value })
    if (key === 'password') {
      value.length < 8
        ? setIsEffectiveness({ ...isEffectiveness, password: false })
        : setIsEffectiveness({ ...isEffectiveness, password: true })
    }
  }
  const effectiveness = () => {
    //* ? : 하나 있거나 없거나,  * : 0개 이상 , ^ : 시작한다, + : 1개 이상, $ : 끝, {2,3} : 2글자나 3글자 사이,[] : 대괄호 안에 요소중 하나 , \ 이스케이프(탈출), . : 아무문자, i : 정규표현식 끝나는 곳에 표시, 대소문자 신경 인씀
    const emailReplace =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i
    emailReplace.test(userInfo.email)
      ? setIsEffectiveness({ ...isEffectiveness, email: true })
      : setIsEffectiveness({ ...isEffectiveness, email: false })
  }
  const inputRef = useRef<HTMLInputElement>(null)
  const hadleSignupClick = async () => {
    const { email, password, passwordConfirm, mobile } = userInfo
    if (!isEffectiveness.email) {
      alert('이메일을 확인해주세요.')
      inputRef.current?.focus()
    } else if (!isEffectiveness.password) {
      alert('비밀번호를 확인해주세요.')
    } else if (password !== passwordConfirm) {
      alert('두 비밀번호가 일치하지 않습니다.')
    } else {
      try {
        const data = await axios.post(
          'https://mycroft-test-api.herokuapp.com/sign-up',
          { email, password, mobile },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        navigate('/')
        dispatch(setLogin(data.data.token))
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <G.Back>
      <Box>
        <h1>회원가입을 진행해주세요. ✍</h1>
        <div>
          <Input
            placeholder="이메일"
            type="email"
            defaultValue={userInfo.email}
            onChange={handleInput('email')}
            onBlur={effectiveness}
            className={`${isEffectiveness.email}`}
            ref={inputRef}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            defaultValue={userInfo.password}
            onChange={handleInput('password')}
            className={`${isEffectiveness.password}`}
          />
          <Input
            placeholder="비밀번호 재확인"
            type="password"
            defaultValue={userInfo.passwordConfirm}
            onChange={handleInput('passwordConfirm')}
          />
          <Input
            placeholder="전화번호"
            type="tel"
            defaultValue={userInfo.mobile}
            onChange={handleInput('mobile')}
          />
        </div>
        <Button name="회원가입" handle={hadleSignupClick} />
      </Box>
    </G.Back>
  )
}

export default Signup
