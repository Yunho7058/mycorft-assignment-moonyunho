import styled from 'styled-components'
import { Back } from '../components/Global/GlobalStyle'

const Box = styled.section`
  width: 50%;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Login = () => {
  return (
    <Back>
      <Box></Box>
    </Back>
  )
}

export default Login
